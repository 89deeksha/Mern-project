import user from './Usermodel.js';

import bcrypt from 'bcryptjs'//for password privacy in data base


export const Signup = async (req, res) => {
  try {
    const { Fullname, Email, password } = req.body;

    const existingUser = await user.findOne({ Email }); // ✅ variable renamed

    if (existingUser) {
      return res.status(400).json({ mssg: "User already exists" });
    }
const hashpassword=await bcrypt.hash(password,10)
    const createUser = new user({
      Fullname:Fullname,

      Email:Email,

      password:hashpassword
    });

    await createUser.save();
    res.status(200).json({ mssg: "User created successfully" });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ mssg: "Internal server error" });
  }
};


//for login controller
import UserModel from './Usermodel.js';

export const Signin= async(req, res)=>{
  try{
const {Email,password}=req.body
//after getting Email, password will find inside the database
const user=await UserModel.findOne({Email})
//for existing password match
const Ispassmatch=await bcrypt.compare(password, user.password)
if(!user || !Ispassmatch){
  return res.status(400).json({mssg:"please insert the correct password"})
}else{
  res.status(200).json({mssg:"Login successfully",user:{
    Fullname:user.Fullname,Email:user.Email,id:user._id

  }})
}

  }catch(err){
console.log("err",err)
res.status(500).json({mssg:"Internal server error"})
  }
}
