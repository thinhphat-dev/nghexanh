const express = require('express');
const data = require('./data'); // Đảm bảo rằng bạn đã tạo file data.js với dữ liệu tĩnh
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
