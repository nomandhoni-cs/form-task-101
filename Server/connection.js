const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.set('autoIndex', true);
require("dotenv").config();
const connectionParams = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
};
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@formcluster.aqaouh0.mongodb.net/usersList?retryWrites=true&w=majority`;
const connection = mongoose.connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
module.exports = connection;