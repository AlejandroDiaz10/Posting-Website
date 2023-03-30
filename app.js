const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 8080;
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// --------------------------------------------------------------- Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Successful connection to Mongo Atlas Cloud");
    app.listen(port, function () {
      console.log(`Server started on -> localhost:${port}`);
    });
  })
  .catch(err => console.log(err));


app.use("/", require("./routes/post"));
app.use("/", require("./routes/userView"));