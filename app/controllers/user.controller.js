const db=require('../models')

const User=db.users

//saving data to database
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

//find all data from database
exports.findAll=(req,res)=>{

      User.find()
            .then(data=>{
                res.send(data)
            })
}

// find single document based on id
exports.findOne=(req,res)=>{

    const userId=req.params.id
    console.log(userId);
   
    User.findOne({'_id':userId})
          .then(data=>{
              res.send(data)
          })
}

// db.users.find();

// Login endpoint

exports.findByFirstNameAndLastName=(req,res)=>{

    const userObj=req.body
    console.log(userObj);

    const resObj={
        status:200,
        message:'Success'
    }

    User.findOne({firstName:userObj.firstName,lastName:userObj.lastName})
        .then((data)=>{
            if(!data){
                res.send({'status':'Failed!!!'})
            }else{
                res.send(resObj)
            }
            
        })

}

// mongoose methods


