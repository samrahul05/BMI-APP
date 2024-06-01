
const mongoose = require('mongoose')

const user = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User_data',
          },
      name:String,
      age:String,
      height:String,
      weight:String,
      gender: {
		type: String,
		// enum: ["Male", "Female"]
	   },
       smokingStatus:{
        type:String,
        // enum:["Smoker","Non-Smoker","Ex-Smoker"]
       }

    })

module.exports=mongoose.model('BasicInfo',user)