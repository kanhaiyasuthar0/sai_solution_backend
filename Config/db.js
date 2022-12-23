//mongodb+srv://kanhaiyasuthar0:<password>@cluster0.cih9gt4.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");
const connection = () => {
    mongoose.connect(`mongodb+srv://saisolution:saisolution@cluster0.cih9gt4.mongodb.net/?retryWrites=true&w=majority`).then((res) => {
        console.log("Connected to DB")
    }).catch((err) => {
        console.log(err)
    })
}
mongoose.set('strictQuery', true);
module.exports = connection