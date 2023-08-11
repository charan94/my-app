const express = require("express");
const fs = require('fs');
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

app.get('/users', async (req, res, next) => {
    const users = fs.readFileSync(path.join(__dirname, "data/users.json"))
    return res.status(200).send(JSON.parse(users));
});

app.post("/users/add", async (req, res, next) => {
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "data/users.json")));
    const user = req.body;
    if(user.firstName && user.lastName) {
        users.push(user);
        fs.writeFileSync(path.join(__dirname, "data/users.json"), JSON.stringify(users));
    }
    return res.status(200).send(users);
})

app.listen(8080, () => {
    console.log('server started in 8080 port');
});