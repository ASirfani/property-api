const mongoose = require('mongoose')
const DB = process.env.DB;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection successful")
}).catch((e) => { console.log(`No Connection ${e}`) })
