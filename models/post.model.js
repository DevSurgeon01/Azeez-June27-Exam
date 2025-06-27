import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    desc: {
        type:String,
        required: true,
    },
    previewPix: {
        type:String,
        required: true,
    },
    detailedPix: {
        type:String,
        required: true,
    },
    likes: Number,
    creator:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
},
{timestamps: true}
); 

const postModel = mongoose.model("Post", postSchema)

export {postModel};


