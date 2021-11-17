const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cors = require("cors");

app.use(cors())


app.use("/api", authRoutes);

process.on('uncaughtException', function(err) {
    // Handle the error safely
    console.log(err);
    process.exit();
})

async function startApp() {
    try {
        await mongoose.connect("mongodb://localhost/laundry");
        app.listen(5000, () => console.log("Server stated on Port 5000"));
    } catch(e) {
        console.log(e);
        process.exit();
    }
}

startApp();