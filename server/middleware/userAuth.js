const userModel = require("../model/userModel");

const isLogin = async (req, res, next) => {
    try{
        if(req.session.userId){
            next()
        }else{
            res.redirect("/login");
            
        }
    }catch(error){
        res.render('404_errorPage', { message: error.message });
    }
};

const isLogout = async (req, res, next) => {
    try{
        if(req.session.userId){
            res.redirect("/")
            next()
        }else{
            next()   
        }
    }catch(error){
        res.render('404_errorPage', { message: error.message });
    }
};

const isVerified = async (req, res, next) => {

    if(req.session.userId){
    const check = await userModel.findOne({_id:req.session.userId});
    if(check.isVerified){
        next()
    }else{
        res.redirect("/login");
    }
    }else{
        next()
    }
};






module.exports ={
    isLogin,
    isLogout,
    isVerified
}