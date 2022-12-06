const mongoose = require('mongoose')
const User = require('../models/userModel')


//register a user 
const createUser = async (req,res)=>{
    const userExists = await User.findOne({email: req.body.email})
    if(userExists){
        res.status(400).json({msg:"user already exists"})

    }else{
        const {name, email, password, phone} = req.body
        try{
            const user = await User.create({name, email, password, phone})
            res.status(200).json(user)
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }
}

module.exports = {
    createUser
}