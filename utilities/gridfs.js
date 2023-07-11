const mongodb = require('mongodb');
const mongoose = require('mongoose');

// Set up Mongoose connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    throw error;
  }
};

// Create a new GridFSBucket instance
const getGridFSBucket = async () => {
  try {
    // Get a reference to the database object
    const db = mongoose.connection.db;

    // Create a new GridFSBucket instance
    const bucket = new mongodb.GridFSBucket(db, {
      bucketName: 'myBucket'
    });

    return bucket;
  } catch (error) {
    throw error;
  }
};

module.exports = { connect, getGridFSBucket };
