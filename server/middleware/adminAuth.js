const userModel = require("../model/userModel");

const isLogin = async (req, res, next) => {
  try {
    if (req.session.userId) {

    } else {
      res.redirect('/adminLogin');
    }
    next();
  } catch (error) {
    res.render('404_adminErrorPage', { message: error.message });
  }
};

const isLogout = async (req, res, next) => {
  try {
    if (req.session.userId) {
      res.redirect('/adminLogin/dashboard');
    }
    next();
  } catch (error) {
    res.render('404_adminErrorPage', { message: error.message });

  }
};
  
  module.exports = {
    isLogin,
    isLogout,
  };
  

// const role = async (req, res, next) => {

//   if (req.session.userId) {
//     const check = await userModel.findOne({ _id: req.session.userId });
//     if (check.isAdmin) {
//       next()
//     } else {
//       res.redirect("/admin/login");
//     }
//   } else {
//     res.redirect("/admin/login");
//   }
// };

// module.exports ={
//     role
// }