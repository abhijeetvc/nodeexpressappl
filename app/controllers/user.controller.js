const db=require('../models')

const User=db.users

exports.create=(req,res)=>{

    const user=new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        city:req.body.city
    })

    // saving to database/collection
    user.save(user)
        .then(data=>{
            res.send(data)
        })
}
