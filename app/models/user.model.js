
module.exports=mongoose=>{

    var schema=mongoose.Schema({
        firstName:String,
        lastName:String,
        email:String,
        city:String 
    })

    const User=mongoose.model('user',schema)
    return User
}