const User = require("../Models/Users.models")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

//New User registration
const registerUser = () => {
    return async (req, res) => {
        try {
            const checkUser = await User.findOne({ email: req.body.email })
            if (!checkUser && req.body.password) {
                const saltRounds = 10;
                bcrypt.genSalt(saltRounds, function (err, salt) {
                    bcrypt.hash(req.body.password, salt, async function (err, hashedPassword) {
                        req.body.password = hashedPassword
                        const newUser = await User.insertMany([req.body])
                        res.send(newUser).status(201)
                    });
                });


            } else {
                res.send(`${req.body.email} already exist. Please Signin`)
            }
        } catch (error) {
            res.send(error)
        }
    }
}

//User Login
const signinUser = () => {
    return async (req, res) => {
        try {
            const checkUser = await User.findOne({ email: req.body.email })
            if (checkUser) {
                bcrypt.compare(req.body.password, checkUser.password, async function (err, result) {
                    if (result) {
                        const token = jwt.sign({
                            data: req.body.email
                        }, process.env.SECRET, { expiresIn: 60 * 60 });
                        const data = {
                            login: true,
                            user: req.body.email,
                            token: token
                        }
                        res.send(data).status(200)
                    }
                });
            } else {
                res.send(`${req.body.email} already exist. Please Signin`).status(400)
            }
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = {
    registerUser,
    signinUser
}