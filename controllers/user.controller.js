import {userModel} from "../models/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"



const createUser = async (req, res) => {
    const {email, password, ...others} = req.body; 
    // check if email and password exists
    if (!email || !password){
        return res.json({message:"Please provide valid registration credentials"})
    }
    //check if user exists in our database
    const isUser = await userModel.findOne({email})
    if (isUser){
        return res.send("User already exists, please login to your account")
    }

    // now create a hashpassword
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt)

    console.log(hashPassword)

    // continue with registration
    try {
        const newUser = new userModel({email, password: hashPassword, ...others});
        const savedUser = await newUser.save();
        return res.json(savedUser);
    } catch (error) {
        console.log(error.message
        );
        return res.send("Something went wrong, create user");
    }

};


const getUser = async (req, res) => {
    const {id} = req.user 
    const allUsers = await userModel
        .findById(id)
        .populate("kyc")
        .populate("posts")
    return res.json(allUsers)
};

const updateUser = async (req, res) => {
    const {id} = req.query; 
    const payload = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(id, 
        {...payload}, 
        {new:true}
    ); 
    return res.json(updatedUser);
};

const deleteUser = async (req, res) => {
    const {id} = req.query;
    const deletedUser = await userModel.findByIdAndDelete(id);
    return res.send(deletedUser);
};

//login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    // get the user from the database
    const user = await userModel.findOne({email});
    if (!user){
        return res.send("This account does not exist, create account!");
    };
    // compare the password
    const isValid = bcrypt.compareSync(password, user.password)
    if (!isValid){
        return res.send("Invalid password!")
    }

    // create a token first
    const token = jwt.sign(
        { id: user.id, admin: user.admin},
        process.env.JWT_SECRET,
        {expiresIn: "2hr", 
        }
    ); 
    console.log(token)
    res
    .cookie(
        "token", token, {
        maxAge: 1000 * 60 * 60, 
        secure: true, 
        httpOnly:true,
    });

    return res.json({message: "this was successful"});

};

export { getUser, createUser, updateUser, deleteUser, loginUser};