require("dotenv").config();
const express = require("express");
const cors = require("cors")
const passport = require("passport")
require('./Google_oAuth/google_oauth');
const connectDB = require("./ConnectDB/db")
const port = process.env.PORT || 8080;
const userRouter = require("./Routers/userRoute");


const app = express();
app.use(cors({
    origin:"http://localhost:3000",
    successStatus:200,
}))
app.use("/",userRouter);


app.get("/",(req,res)=>{
    // Ypu can use use status also for sending res
    res.status(200).send("OverStock Home Page")
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    // console.log(req.user)
    // const name=req.user.name;
    // const email=req.user.email;
    // const profile=req.user.url;
    // const token=req.user.url; 
    
    res.redirect('/');
  });


app.listen(port,async()=>{
    await connectDB();
    console.log(`Server Running on http://localhost:${port}`)
})