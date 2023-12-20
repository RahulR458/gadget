const mongoose = require('mongoose')

const  Schema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
discount:{
    type:String,
    required:true
},
categoryname:{
    type:String,
    required:true
},
productname:{
    type:String,
    required:true
},
expirydate:{
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

const offerDetails = mongoose.model('offerDetails',Schema)

module.exports = offerDetails;