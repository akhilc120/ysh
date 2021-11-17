const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    phone: { type: "string", required: true, unique: true },
    state: { type: "string", required: true },
    district: { type: "string", required: true },
    pincode: { type: "string", required: true },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;