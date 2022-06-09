const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, () => {
    console.log("Servers has been launched on port " + port);
});