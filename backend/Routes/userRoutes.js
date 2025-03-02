import express from 'express';
import { login, signup } from '../Controllers/UserControllers.js';

const userRouter=express.Router()

userRouter.post('/signup',async(req,res)=>{
    const {username,email,name,password}=req.body;
    
    if(username ==null || name==null || email==null || password==null){
        return res.status(400).json({message:"Missing required fields"})
    }else{
        try {
            const response=await signup(username,email,name,password)
            res.status(201).json({message:"user created successfully",data:response})
            
        } catch (error) {
            console.error(error)
            res.status(500).json({message:"An error occurred"})
        }
        
    }
})

userRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body
    if(email==null || password==null){
        return res.status(400).json({message:"Missing required fields"})
    }else{
        try {
            const response=await login(email,password)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }
})

export default userRouter