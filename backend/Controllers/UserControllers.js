import prisma from "../db/db.js"
import bcrypt from "bcrypt"

const signup=async(username,email,name,password)=>{
    
    const user=await prisma.user.findFirst({where:{email:email}})
    if(user){
        return "User already exists Please Login"
    }else{
        const hashedpassword=await bcrypt.hash(password,10)
       return await prisma.user.create({data:{username,email,name,password:hashedpassword}})
    }
}

const login=async(email,password)=>{
    const user=await prisma.user.findFirst({where:{email:email}})
    if(user){
        const Match=bcrypt.compare(user.password,password)
        if(Match){
            return "Login Success"
        }else{
            return "Invalid Credentials"
        }
    }else{
        return "User not found"
    }
}

export {signup,login}