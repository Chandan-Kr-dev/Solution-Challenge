import prisma from "../db/db.js"


const signup=async(username,email,name,password)=>{
    
    const user=await prisma.user.findFirst({where:{email:email}})
    if(user){
        return "User already exists Please Login"
    }else{

       return await prisma.user.create({data:{username,email,name,password}})
    }
}

const login=async(email,password)=>{
    const user=await prisma.user.findFirst({where:{email:email}})
    if(user){

        if(user.password==password){
            return "Login Success"
        }else{
            return "Invalid Credentials"
        }
    }else{
        return "User not found"
    }
}

export {signup,login}