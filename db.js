const mongoose = require('mongoose');

// URL for linking DB
const mongoURL = 'mongodb://localhost:27017/hotels'; // Fixed typo in 'mongodb'

// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

// Check if the connection is successful
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

// Handle connection errors
db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', error);
});

// Optional: Notify when the connection is disconnected
db.on('disconnected', () => {
    console.log('MongoDB connection disconnected');
});

module.exports = db;
