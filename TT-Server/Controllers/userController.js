
const users=require('../Models/userModel')
const jwt=require('jsonwebtoken')


exports.userRegister=async(req,res)=>{
    const {username,password,email}=req.body
    console.log("Inside Register Function!!")
    try{
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(401).json("User Already Exist!")
            console.log(existingUser)
        }
        else{
            const newUser=new users({
                username,password,email
            })
            await newUser.save()
            res.status(201).json(newUser)
            console.log(newUser)
        }
    }catch(err){
        res.status(404).json(err)
    }
}

exports.userLogin= async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password)
    try{
        const existingUser= await users.findOne({email,password})
        console.log(existingUser)
        if(existingUser){
            const token=jwt.sign({email:existingUser.email,username:existingUser.username,userId:existingUser._id},process.env.secret_key)
            const rest={token,user:existingUser.username,userDetails:existingUser}
            console.log(rest)
            console.log(token)
            res.status(200).json(rest)
        }
        else{
            res.status(406).json("invalid username/password")
        }
    }
    catch(err){
        console.log(err)
        res.status(401).json(err)
    } 
}