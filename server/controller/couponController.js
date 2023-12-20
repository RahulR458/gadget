const couponModel = require("../model/couponModel")

exports.create = async (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"content cannot be empty!"});
        return;
    }
    const existingCoupon = await couponModel.findOne({ name: req.body.couponName });
    if (existingCoupon) {
        return res.status(400).json({ error: 'Coupon with the same name already exists' });
    }
    //new coupon
    const coupon = new couponModel({
        name : req.body.couponName,
        code : req.body.couponCode,
        percent : req.body.couponPercentage,
        maxoff : req.body.couponMaxOff,
        expdt: req.body.couponExpiry,
        count : req.body.couponCount,
        isVerified : true
    })
    //save coupon in database
    coupon
    .save(coupon)
    .then(data=>{
        // res.send(data)
        res.redirect('/adminLogin/addProduct')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "some error occured while creating a create operation"
        });
    });  
 }