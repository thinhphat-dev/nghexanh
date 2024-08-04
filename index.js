const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Cấu hình kết nối SQL Server
const config = {
    user: 'sa',
    password: '123',
    server: 'localhost', // e.g., 'localhost' or 'your_server.database.windows.net'
    database: 'nghexanh',
    options: {
        encrypt: true, // Sử dụng cho Azure
        trustServerCertificate: true // Sử dụng cho môi trường phát triển
    }
};

// Kết nối với SQL Server
sql.connect(config, (err) => {
    if (err) console.log(err);
    else console.log('Connected to SQL Server');
});

// API chèn dữ liệu vào bảng app_user
app.post('/insert', async (req, res) => {
    const { fullName, age, gender, email, comment } = req.body;

    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('fullName', sql.NVarChar, fullName)
            .input('age', sql.Int, age)
            .input('gender', sql.NVarChar, gender)
            .input('email', sql.NVarChar, email)
            .input('comment', sql.NVarChar, comment)
            .query('INSERT INTO app_user (full_name, age, gender, email, comment) VALUES (@fullName, @age, @gender, @email, @comment)');

        res.send('Data inserted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error inserting data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
