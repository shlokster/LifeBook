const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path))
console.log(path.join(__dirname));
app.get("/",(req, res) => {
    res.send("Hello from the backend")
}) ;

app.listen(port,() => {
    console.log(`Server is running at port no ${port}`);
})