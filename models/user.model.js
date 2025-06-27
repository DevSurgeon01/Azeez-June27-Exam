import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    gender:{
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    admin:{
        type: Boolean,
        default: false,
    },
    hobbies:{
        type: [String],
    },
    password: {
        type:String,
        required: true,
    },
    married: Boolean,
    age: Number,
    kyc: {
        type: mongoose.Types.ObjectId,
        ref: "Kyc"
    },
    isVerified: Boolean,
    posts: [{type: mongoose.Types.ObjectId,
        ref: "Post"
    }],
},
{timestamps: true}
); 

const userModel = mongoose.model("User", userSchema)

export {userModel};


