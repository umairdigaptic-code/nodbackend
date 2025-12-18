const  mongoose =require("mongoose")
 const mongodburl='mongodb://localhost:27017/hotel'

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