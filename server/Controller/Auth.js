const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Modules/User')
const symptoms =require('../Modules/Symptoms')
const BasicInfo = require('../Modules/BasicInfo')
const Token =require('../Modules/Token')
const BmiCal = require('../Modules/BMI')

const Signup = async (req,res) => {
    const data = new User(
        {
          ...req.body,
        
        })
    const {email} =req.body
    console.log(email)
    if(email === null){
      res.json("Feilds are required")
    }
    else{
      const existingUser =await User.findOne({email } )
      if(existingUser)
      {
         res.json("Email is Already Existing")
      }
    else
      {
         await data.save()
         .then(()=>
          {
            res.status(201).json({
              status: "ok",
              message:"signup succesfully",
            });
            
            console.log(data);
          })
         .catch(()=>
          {
            res.json("Something Worng");
          })
      }
    }
    
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }); // Changed User.find to User.findOne

    if (!user) {
      
      return res.status(201).json({
        message:"User doesn't exist!",
      });
   
    }

    const passwordMatch = password === user.password; 
    

    if (!passwordMatch) {
      
      return res.status(201).json({
        message: 'Invalid password',
      });
    }

    const token = jwt.sign({ email: user.email,id:user._id }, process.env.SECRETKEY, {
      expiresIn: '1h',
    });
 
    res.cookie('jwt', token, { httpOnly: true });

    const newToken = new Token({ userId:user._id, token: token });
    await newToken.save();
    console.log("newToken",newToken);
    return res.status(201).json({
      status: "ok",
      data: token,
      userType:user.userType
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const BasicInformation = async (req, res) => {
  try {
    const userId = req.User.id; 
    console.log(userId);
    const { name, age, height, weight, gender, smokingStatus } = req.body;
    const basicInformation = new BasicInfo({ userId, name, age, height, weight, gender, smokingStatus });
    await basicInformation.save();
   
    return res.status(201).json({
      message: 'BasicInfo Posted Successfully',
    });
  } catch (error) {
    console.error("Basic Information Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const Symptoms =  async (req, res) => {
    
    const userId =req.User.id;
    const {coughFrequency,breathlessness,chestTightness,difficultySleeping} = req.body
    const Symptoms = new symptoms({userId,coughFrequency,breathlessness,chestTightness,difficultySleeping});
    await Symptoms.save();
    
        return res.status(201).json({
          message: 'Symptoms Posted Successfully',
        });
}

const GetUserdata = async (req, res) => {
  try {
      const userId = req.User.id;
      const basicInfo = await BasicInfo.find({ userId });
      const Symptoms = await symptoms.find({ userId });
      const basicInfoData = basicInfo.map(info => ({
          
          Name: info.name,
          Age: info.age,
          Height: info.height,
          Weight: info.weight,
          Gender: info.gender,
          smokingStatus: info.smokingStatus
      }));


      const symptomsData = Symptoms.map(symptom => ({
          coughFrequency: symptom.coughFrequency,
          breathlessness: symptom.breathlessness,
          chestTightness: symptom.chestTightness,
          difficultySleeping: symptom.difficultySleeping
      }));

      
      const lastBasicInfo = basicInfoData[basicInfoData.length - 1];
      const lastSymptom = symptomsData[symptomsData.length - 1];

      
      res.json({
          BasicInfo: lastBasicInfo,
          Symptoms: lastSymptom
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
  }
};
  

const BMI =async(req,res) =>{
  try {
    const userId = req.User.id; 
    console.log(userId);
    const { height, weight} = req.body;
    const bmi = new BmiCal({userId, height, weight});
    await bmi.save();
    console.log(bmi);
    return res.status(201).json({
      message: 'BMI Posted Successfully',
    });
  } catch (error) {
    console.error("BMI Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }

}


module.exports={Signup,Login,BasicInformation,Symptoms,GetUserdata,BMI}