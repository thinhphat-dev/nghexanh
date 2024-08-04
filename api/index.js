const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json'); // Đảm bảo đường dẫn đúng
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
