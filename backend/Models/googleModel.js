const {Schema,model}=require("mongoose");

//authSchema is in camel case formate
const GoogleauthSchema=new Schema({
    //Add your schema data here 
 
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:["Customer"]},
   

},{
    timestamps:true
});


// UserModel in Pascal case formate
const GoogleAuthModel=model("googleauth",GoogleauthSchema);



module.exports={GoogleAuthModel}