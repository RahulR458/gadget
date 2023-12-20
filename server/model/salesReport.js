const mongoose = require('mongoose')

const  Schema = new mongoose.Schema({
productName:{  
    type:String,
    required:true
},
// category:{
//     type:String,
//     required:true
// },
quantity:{
    type:String,
    required:true
},
amount:{
    type:String,
    required:true
},
createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now()
}

})

const salesReportDetails = mongoose.model('salesReportDetails',Schema)

module.exports = salesReportDetails;