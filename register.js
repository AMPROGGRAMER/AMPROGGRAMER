const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    "Username": {
        "type": String,
        "required": true
    },
    "Email": {
        "type": String,
        "required": true,
        "unique": true
    },
    "pass": {
        "type": String,
        "required": true
    },
    "cpass": {
        "type": String,
        "required": true
    }
});

const Register = mongoose.model("Eeproject", profileSchema);

module.exports = Register;
