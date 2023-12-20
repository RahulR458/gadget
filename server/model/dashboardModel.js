
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
order:{
    type:Number
    
},
sale:{
    type:Number
    
},
rupee:{
    type:Number
    
},
user:{
    type:Number
    
},
cancell:{
    type:Number
    
},
return:{
    type:Number
    
},
order:{
    type:Number
    
},
orderToday:{
    type:Number
    
},
profit:{
    type:Number
    
}
})

const dashboardDetails = mongoose.model('dashboardDetails',schema)

module.exports = dashboardDetails;