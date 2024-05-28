require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')
require('./DB/connection')

// server instance
const ttserver=express()

// config. cors to server
ttserver.use(cors())

// json conversion
ttserver.use(express.json())

// config. routes to server
ttserver.use(router)

// Serve uploads
ttserver.use('/uploads',express.static('./uploads'))

const PORT=3003

// listen method
ttserver.listen(PORT,()=>{
    console.log(`Server is running at:${PORT}`)
})

// response
ttserver.get('/',(req,res)=>{
    res.status(200).send("<h1>Get request hit successfully!<h1/>")
})

