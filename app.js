const express = require("express");
const mailRoutes = require("./middleware/mailRoutes");
const getSite = require("./middleware/getSiteRoutes");

app = express();

app.use("/api", mailRoutes);
app.use("", getSite);
app.use(express.static("./views"));
app.use(express.json());
app.use(express.json());
module.exports = app;
