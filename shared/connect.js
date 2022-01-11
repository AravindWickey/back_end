const mongoose = require("mongoose");
exports.connect = () => {
  try {
    mongoose.connect(
      "mongodb+srv://aravindwickey:ptnYdO8esz1RLjAW@clusterone.3quf8.mongodb.net/integra?retryWrites=true&w=majority"
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};
