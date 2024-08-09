const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./nghexanh-3f1bd-firebase-adminsdk-4ssv4-19eb6a297c.json');

const app = express();
const port = process.env.PORT || 3000;

// Khởi tạo Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://nghexanh-3f1bd-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.firestore();

// Middleware để thiết lập header CORS
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

app.get('/api', async (req, res) => {
    try {
        const snapshot = await db.collection('users').get();
        if (snapshot.empty) {
            return res.status(404).json({ message: 'No users found' });
        }
        const usersList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(usersList);
    } catch (error) {
        console.error('Error getting documents: ', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api', async (req, res) => {
    const newUser = req.body;
    if (!newUser.fullName || !newUser.age || !newUser.gender || !newUser.email) {
        return res.status(400).json({ message: 'Thiếu thông tin bắt buộc' });
    }

    try {
        const docRef = await db.collection('users').add(newUser);
        res.status(201).json({ id: docRef.id, ...newUser });
    } catch (error) {
        console.error('Error adding document: ', error);
        res.status(500).send('Internal Server Error');
    }
});
app.delete('/api/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const docRef = db.collection('users').doc(userId);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        await docRef.delete();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting document: ', error);
        res.status(500).send('Internal Server Error');
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
