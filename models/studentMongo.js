const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
});

module.exports = mongoose.model('Student', studentSchema);
