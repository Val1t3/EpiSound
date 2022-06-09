const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/src'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/src/');
});

app.listen(port, () => {
    console.log("Servers has been launched on port " + port);
});
