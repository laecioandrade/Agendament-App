const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDb = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    })
    .then(() => console.log("Banco Conectado!"))
    .catch((err) => console.error(err));
};

module.exports = connectToDb;
