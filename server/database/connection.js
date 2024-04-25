const mongoose = require("mongoose")

const connectDB = async()=>{
    console.log("MONGO_URL:", process.env.MONGO_URL_local); // Add this line for debugging
    try{
        //mongoDB connection
        const con = await mongoose.connect(process.env.MONGO_URL_local)

        console.log(`MongoDB connected:${con.connection.host}`);
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;