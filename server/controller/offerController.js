const offerModel = require("../model/offerModel")

exports.create = async (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"content cannot be empty!"});
        return;
    }
    const existingOffer = await offerModel.findOne({ name: req.body.offerName });
    if (existingOffer) {
        return res.status(400).json({ error: 'Offer with the same name already exists' });
    }
    //new coupon
    const offer = new offerModel({
        name : req.body.offerName,
        discount : req.body.offerPercentage,
        categoryname : req.body.category,
        productname : req.body.product,
        expirydate: req.body.couponExpiry,
        count : req.body.couponCount,
        isVerified : true
    })
    //save coupon in database
    offer
    .save(offer)
    .then(data=>{
        // res.send(data)
        res.redirect('/adminLogin/addOffer')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "some error occured while creating a create operation"
        });
    });  
 }