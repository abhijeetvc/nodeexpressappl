module.exports=app=>{

    const users=require('../controllers/user.controller')

    const router=require('express').Router()

    router.post('/saveData',users.create)

    // context path
    app.use('/api',router)

}

// http://localhost:8989/api/saveData

// mongod --dbpath D://mongodb/data