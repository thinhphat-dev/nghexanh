const express = require('express');
const data = require('./data');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
});

app.use(express.json());

app.get('/api', (req, res) => {
    res.json(data);
});

app.post('/api', (req, res) => {
    const newUser = req.body;
    if (!newUser.fullName || !newUser.age || !newUser.gender || !newUser.email) {
        return res.status(400).json({ message: 'Thiếu thông tin bắt buộc' });
    }

    // Add new user to data
    data.users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
