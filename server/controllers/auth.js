import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'

import users from './../models/auth.js'

export const singup = async (req , res) => {
    const {name,email ,password} =req.body;
    try{
        const existingUser =await users.findOne({ email})
        if(existingUser){
            return res.status(404).json({messsage:'User already exist'});
        }

        const hasedPassword = await bcrypt.hash(password ,12)
        const newUser = await users.create({name,email,password:hasedPassword})
        const token = jwt.sign({email :users.email, id:newUser._id} ,'test',{expiresIn:'1hr'})
        res.status(200).json({result :newUser,token})
    }catch(error){
        res.status(500).json('something went wrong')
    }

}
export const login = async (req , res) => {

    const {email ,password} =req.body;
    try {
        const existingUser =await users.findOne({ email})
        if(!existingUser){
            return res.status(404).json({messsage:'User does not exist'});
        }
        const isPasswordCrt = bcrypt.compare(password,existingUser.password)
        if(!isPasswordCrt){
            return res.status(400).json({messsage:'Invalid Password'})
        }
        const token = jwt.sign({email :users.email, id:newUser._id} ,'test',{expiresIn:'1hr'})
        res.status(200).json({result:newUser,token})
        
    } catch (error) {
        res.status(500).json('something went wrong')
    }
}