module.exports=app=>{

    const users=require('../controllers/user.controller')

    const router=require('express').Router()

    router.post('/saveData',users.create)

    router.get('/getUsers',users.findAll)

    router.get('/getSingleUser/:id',users.findOne)

    router.post('/login',users.findByFirstNameAndLastName)

    // context path
    app.use('/api',router)

}

// http://localhost:8989/api/saveData

// mongod --dbpath D://mongodb/data