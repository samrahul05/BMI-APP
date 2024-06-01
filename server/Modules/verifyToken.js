// const jwt = require('jsonwebtoken');

// const verifyToken = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//    console.log("authHeader =",authHeader)
//     if (!authHeader) {
//         return res.status(401).json({ message: 'Authentication required' });
//     }

//     const token = authHeader.split(' ')[1]; // Extracting the token part after 'Bearer'
//   console.log("token =",token);
//     jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
//         if (err) {
//             return res.status(403).json({ message: 'Failed to authenticate token' });
//         }
//         req.User = decoded; // Store decoded user information in request object
//         console.log("verifytoken",req.User);
//         next();
//     });
// };

// module.exports = verifyToken;



const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next) =>{
    const token = req.cookies.jwt;
    console.log("verifyToken",token)

    if(!token)
    {
        return res.status(401).json({ message: 'Authentication required' });
    }
    jwt.verify(token,process.env.secretkey,(err,decoded) =>{
        if(err)
        {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }
        req.User = decoded;
        // console.log(req.user)
        // console.log(req.User);
        // res.json('Authentication successfull')
        next()
    })
}
module.exports=verifyToken;  