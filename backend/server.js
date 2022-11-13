require("dotenv").config();
const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./Models/userModel");
const cors = require("cors");
const passport = require("passport");
require("./Google_oAuth/google_oauth");
const connectDB = require("./ConnectDB/db");
const port = process.env.PORT || 8080;
const userRouter = require("./Routers/userRoute");
const furnitureRouter = require("./Routers/furnitureRoute");
const furniturecolorRouter = require("./Routers/furnitureColorsRoute");
const access_key = process.env.access_secret_key;
const nodemailer = require('nodemailer');

const cors = require("cors")
const connectDB = require("./ConnectDB/db")
const port = 8080;
const userRouter = require("./Routers/userRoute");
const furnitureRouter = require("./Routers/furnitureRoute");
const furniturecolorRouter = require("./Routers/furnitureColorsRoute");
const cartRouter = require("./Routers/cartRoute");

const notFoundURL = require("./Middlewares/notFoundURL");



const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    successStatus: 200,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.use("/", userRouter);
app.use("/furniture", furnitureRouter);
app.use("/furniture-color", furniturecolorRouter);

//Google Login

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login',session:false }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     // console.log(req.user)
//     // const name=req.user.name;
//     // const email=req.user.email;
//     // const profile=req.user.url;
//     // const token=req.user.url;

//     if (req.user) {
//         console.log(req.user)
// 		res.status(200).send({
// 			error: false,
// 			message: "Successfully Loged In",
// 			user: req.user,
// 		});
// 	} else {
// 		res.status(403).json({ error: true, message: "Not Authorized" });
// 	}
//   });

app.get("/login/success", (req, res) => {
  console.log("User", req.user);
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login/failed",
  })
);

//Forgot Password

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.status(404).json({ status: "User Doesn't Exist" });
    }
    let secret = access_key + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5min",
    });
    const link = `http://localhost:7000/reset-password/${oldUser._id}/${token}`;
    console.log(link);



    //    var transporter = nodemailer.createTransport({
    //       service: 'gmail',
    //       auth: {
	// 		user: "adarsh438tcsckandivali@gmail.com",
	// 		pass: "rmdklolcsmswvyfw",
    //       }
    //     });

    //     var mailOptions = {
    //       from: 'youremail@gmail.com',
    //       to: 'shabaz@gmail.com',
    //       subject: 'Password Reset',
    //       text: 'link'
    //     };

    //     transporter.sendMail(mailOptions, function(error, info){
    //       if (error) {
    //         console.log(error);
    //       } else {
    //         console.log('Email sent: ' + info.response);
    //       }
    //     });

	
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.status(404).json({ status: "User Doesn't Exist" });
  }
  let secret = access_key + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
    //return res.send("verified")
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.post("/reset-password/:id/:token",async(req,res)=>{
	const {id,token} = req.params;
	const {password} = req.body;
	const oldUser = await User.findOne({_id:id});
	if(!oldUser){
	   return res.status(404).json({status:"User Doesn't Exist"})
	}
	let secret = access_key+oldUser.password;
	try{
	  const verify = jwt.verify(token,secret);
	  const encryptedPassword = await bcrypt.hash(password, 10);
	  await User.updateOne(
	    {
	      _id: id,
	    },
	    {
	      $set: {
	        password: encryptedPassword,
	      },
	    }
	  );
	  
  
	  res.render("index", { email: verify.email, status: "verified" });
	}catch(err){
	   res.status(500).send(err.message)
	}
  })




//Port is listening

app.use("/",userRouter);
app.use("/api/furniture",furnitureRouter);
app.use("/api/furniture-color",furniturecolorRouter);
app.use("/api/cart",cartRouter);


app.use(notFoundURL);


app.listen(port, async () => {
  await connectDB();
  console.log(`Server Running on http://localhost:${port}`);
});
