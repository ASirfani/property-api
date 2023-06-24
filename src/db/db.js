const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb+srv://as-irfani:naGoijyEu4a2Wlt0@cluster0.xlrmevr.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection successful");
  } catch (error) {
    console.log(`No Connection ${error}`);
  }
}

connectToDatabase();