const express = require("express");
const mailRoutes = require("./middleware/mailRoutes");

app = express();

app.use("/api", mailRoutes);
app.use(express.static("./views"));
app.use(express.json());
app.get("/", (req, res) => {
	res.sendFile("index.html");
});
module.exports = app;
