import { kycModel } from "../models/kyc.model.js";
import { userModel } from "../models/user.model.js";

const createKyc = async (req, res) => {
    const payload = req.body;
    const {id} = req.user;

    // check if kyc is existing
    const checkKyc = await kycModel.findOne({user:id})
    if (checkKyc){
        return res.json({message: "kyc already exists"});
    }

    try {
        // create the kyc below
        const newKyc = new kycModel({user:id, ...payload})
        const savedKyc = await newKyc.save();
        // update the user account
        await userModel.findByIdAndUpdate(id, {kyc:savedKyc.id}, {new: true})
        return res.send("kyc added successfully!")
    } catch (error) {
        return res.send("something happened")
    }
};

const getOneKyc = async(req, res) => {
    const {kycId} = req.query;
    try {
        const kyc = await kycModel.findById(kycId).populate("user");
        return res.json(kyc);
    } catch (error) {
        return res.send("something went wrong");
    }
};


export {createKyc, getOneKyc};