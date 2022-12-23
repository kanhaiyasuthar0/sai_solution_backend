const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: String
})

const userModel = mongoose.model("user", UserSchema);

module.exports = userModel