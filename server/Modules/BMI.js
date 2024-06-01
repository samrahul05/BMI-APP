
const mongoose = require('mongoose')

const user = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User_data',
          },
      
      height:String,
      weight:String,
    })

module.exports=mongoose.model('BMI_Cal',user)