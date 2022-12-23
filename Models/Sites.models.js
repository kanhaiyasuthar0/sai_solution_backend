const mongoose = require("mongoose");

const SiteSchema = mongoose.Schema({
    site_name: String,
    site_type: String,
    site_location: String,
    date: String,
    yt_link: String,
    images: [String],
    site_description: String,

})

const siteModel = mongoose.model("sites", SiteSchema);

module.exports = siteModel


