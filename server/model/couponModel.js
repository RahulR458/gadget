const mongoose = require('mongoose')

const schema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
code:{
    type:String,
    required:true
},
percent:{
    type:String,
    required:true
},
maxoff:{
    type:String,
    required:true
},
expdt:{
    type:String,
    required:true
},
count:{
    type:String,
    required:true
},
avilable:{
    type:String,
    // required:true
},
// discount:{
// type:Number,
// required:true
// },
usedBy:[{
    type:mongoose.Types.ObjectId,
    ref:'userDetail'
}]

})

const couponDetails = mongoose.model('couponDetails',schema)

module.exports = couponDetails;