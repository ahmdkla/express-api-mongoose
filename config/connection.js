const mongoose = require("mongoose")
const {DATABASE_HOST, DATABASE_HOST_LIVE_MONGOOSE} = require("./environment")

mongoose.connect(DATABASE_HOST_LIVE_MONGOOSE || DATABASE_HOST , {
    useUnifiedTopology: true,
    useNewUrlParser : true
}

).then(() => {
    console.log("Connected to database mongoose");
}).catch(error => {
    console.log("Error cant connect to database");
    
});

const db  = mongoose.connection
module.exports = db