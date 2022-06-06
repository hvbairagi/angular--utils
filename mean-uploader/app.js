var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var galleryRouter = require("./routes/gallery");
var acade = require("./routes/acade");

mongoose
  .connect("mongodb://localhost/mean-upload", {
    promiseLibrary: require("bluebird"),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/gallery", galleryRouter);
app.use("/acade", acade);

module.exports = app;
