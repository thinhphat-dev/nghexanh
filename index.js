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

// API chèn dữ liệu vào bảng
app.post('/insert', async (req, res) => {
    const { name, age } = req.body;

    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('name', sql.VarChar, name)
            .input('age', sql.Int, age)
            .query('INSERT INTO your_table (name, age) VALUES (@name, @age)');

        res.send('Data inserted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error inserting data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
