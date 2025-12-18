const  mongoose =require("mongoose")
const dotenv = require('dotenv').config();


//  const mongodburl='mongodb://localhost:27017/hotel'
// const mongodburl='mongodb+srv://umairdigaptic_db_user:umair123@cluster0.rfqj5wp.mongodb.net/'
const mongodburl=process.env.db_url;
 
// Set up MongoDB connection
mongoose.connect(mongodburl);

// Get the default connection
// Mongoose maintains a default connection object
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
  console.log('Connected to MongoDB server');
});


module.exports =db;