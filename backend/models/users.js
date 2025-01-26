const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Users Schema
const usersSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, // Ensure email is unique
        },
        password: {
            type: String,
            required: true,
        },
        userId: {
            type: Number,
            required: true,
            unique: true, // Ensure userId is unique
        },
    },
    { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Export the model
module.exports = mongoose.model('User', usersSchema); // Corrected the model name to 'User' for clarity
