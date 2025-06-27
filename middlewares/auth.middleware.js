import jwt from "jsonwebtoken";

const authentication = async(req, res, next)=>{

    // check if token exist / user login
    const { token } = req.cookies;
    if (!token){
        return res.json({message: "please login to create post"})
    }
    jwt.verify(token, process.env.JWT_SECRET, (error, payload)=> {
        if(error){
            return res.json({message: "session expired"})
        }
        req.user = {id:payload.id, admin:payload.admin}
    })

    next();
}


export { authentication };
