const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const access_key = process.env.access_secret_key;
const refresh_key = process.env.refresh_secret_key;




const SignUp = async(req,res)=>{
   const {email,password} = req.body;
   try{
      const user = await User.findOne({email});
      if(user){
        return res.status(403).send("User Already Exists");
      }
      const hashedPassword = await bcrypt.hash(password,10)
      const newUser = await User.create({email,password:hashedPassword});
      newUser.save();
      return res.status(200).send("SignUp Successfully");
   }catch(err){
    res.status(500).send(err.message)
   }
};



const SignIn = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user)
      return res.status(404).send("User Doesn't Exists")
    try{
        const match = await bcrypt.compareSync(password, user.password);
        if (!match){
         return res.status(400).send({ message: "Invalid Password" });
        
      }
      const accessToken = jwt.sign({id:user._id},access_key,{expiresIn:"25m"});
      const refreshToken = jwt.sign({id:user._id},refresh_key,{expiresIn:"7d"});
      return res.status(200).send({message:"Logged Successfully",accessToken,refreshToken})
    }catch(err){
        res.status(500).send(err.message)
    }
 };

 module.exports = {SignUp,SignIn};