const bcrypt = require("bcrypt");

const User = require("../models/user");

const register = async (req,res) => {
    try {
        // sign up
        const existingUser = await User.findOne({email:req.body.email});
        if(existingUser) throw new Error('a user with this email already exists');
        const user = new User(req.body);
        await user.save();
        

        // login

        const sessionData =  {
            id: user._id,
            authenticated: true
        };
        
        req.session[user._id] = sessionData;
        res.status(201).json({
            success:true,
            data:user
        })
    
        
    } catch (error) {
        console.log(error.message);
        res.status(403).json({success: false})
    }
}

const getCurrentUser = async (req,res) => {
    try {
        console.log(req.session[req.params.id], req.session);
        if(!req.session[req.params.id]) throw new Error("No User Found");
        res.status(200).json({User: req.session[req.params.id], data: req.session});
    } catch (error) {
        console.log(error.message);
        res.status(403).json({success: false});
    }
}


const login = async (req,res) => {
    try {
        const {email, password} = req.body
    const user = await User.findOne({email:email})
    if(!user) throw new Error('no user with this email exists')
    const valid = await bcrypt.compare(password, user.password)
    if(!valid) throw new Error('invalid password')
    const sessionData =  {
        id: user._id,
        authenticated: true
    }
    req.session[user._id] = sessionData;
    res.status(200).json({
        success:true,
        data:user
    })
    } catch (error) {
        console.log(error);
        res.status(403).json({success: false});
    }
}


const logout = async (req, res) => {
    try {
        delete req.session[req.params.id];
        res.status(200).json({
            success:true,
            data:req.session
        })
    } catch (error) {
        console.log(error);
        res.status(403).json({success: false});
    }
}

// const sendPasswordResetCode = async (req,res)=> {
//     try {
//         const {phone} = req.body;
        
//         let code = null;
//         let codeArray = [];
//         for(let i=0;i<3;i++) {
//             let num = Math.floor(Math.random() * 100);
//             codeArray.push(String(num));
//         }
//         code = codeArray.join('');
//         // sending code to user phone
// // send sms
// let message = `Vet App, Use this code to reset password${code}\n\n`
// new crudNotification().sendNotification(phone, message).then(d=> {
//     res.status(201).json({status:"Message sent to farmer successfully!!",code});
// }).catch(e=> new Error(e));
//         // sending the same code to front end app.
//     } catch (error) {
//         console.log(error);
//         res.status(403).json({success: false});
//     }
// }


// const changePasswordResetCode = async (req,res)=> {
//     try {
//         const {email, password} = req.body;

//         const user  = await User.findByIdAndUpdate({email: email}, {password: password}, {new: true});
//         res.status(203).json({success: true, user});
//     } catch (error) {
//         console.log(error);
//         res.status(403).json({success: false});
//     }
// }

module.exports = {register, getCurrentUser, login, logout}