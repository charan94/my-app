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
    if (user.firstName && user.lastName) {
        users.push(user);
        fs.writeFileSync(path.join(__dirname, "data/users.json"), JSON.stringify(users));
    }
    return res.status(200).send(users);
})

app.get("/user/{id}", async (req, res, next) => {
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "data/users.json")));
    const id = req.params.id;
    const user = users.find(user => user.id === id) ?? null;
    if (!user) {
        return res.status(400).send(`User with id - ${id} not found`);
    }
    return res.status(200).send(user);
})

app.put("/user/update/{id}", async (req, res, next) => {
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "data/users.json")));
    const id = req.params.id;
    const body = req.body;
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(400).send(`User with id - ${id} not found`);
    }
    const filteredUsers = users.filter(user => user.id !== id);
    fs.writeFileSync(path.join(__dirname, "data/users.json"), JSON.stringify([...filteredUsers, { body }]));
});

app.post("/user/remove/{id}", (req, res, next) => {
    const id = req.params.id;
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "data/users.json")));
    const filteredUsers = users.filter(r => r.id !== id);
    fs.writeFileSync(path.join(__dirname, "data/users.json"), JSON.stringify(filteredUsers));
})

app.listen(8080, () => {
    console.log('server started in 8080 port');
});