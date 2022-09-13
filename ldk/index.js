const dotenv = require("dotenv");
dotenv.config();
const constants = require("./config/Constants");
const {cl} = require('./api/v1/helpers/html')

const express = require("express");

const app = express();
app.disable("x-powered-by");

const routev1 = require("./api/v1/routes/devRoutes");
app.use("/api/v1", routev1);

app.listen(constants.PUB_PORT, () => console.log("Eledik Ayakta"));
