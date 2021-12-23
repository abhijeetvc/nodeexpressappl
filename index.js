
const express=require('express')
const cors=require('cors')

const app=express()

const port=8989

const corsOptions={
    origin:'http://localhost:3000'
}

app.use(express.json())
app.use(cors(corsOptions))

// app.get("/check",(req,res)=>{
//     res.send('Hello from Node Server!!!')
// })

// app.get("/check1",(req,res)=>{
//     const data={name:'John',city:'Pune'}
//     res.send(data)
// })

// const userList=[{id:1,name:'John',city:'Pune'},{id:2,name:'Peter',city:'Mumbai'}]

// const userList1=[{firstName:'John',lastName:'Doe',email:'a@gmail.com',city:'Pune'},
// {firstName:'Peter',lastName:'Parker',email:'b@gmail.com',city:'Mumbai'}]

// app.get("/check2",(req,res)=>{
//     res.send(userList)
// })

// app.post('/sendData',(req,res)=>{
//     const data=req.body
//     console.log(data);

//     userList1.push(data)
//     console.log(userList1);
//    // res.send('Data received!!!')
//     res.send(userList1)
// })


const db=require('./app/models')

db.mongoose.connect(db.url)
            .then(()=>{
                console.log('Connected to Database!!!');
            })


require('./app/routes/user.routes')(app)            


app.listen(port,()=>{
    console.log('Server started!!!');
})

