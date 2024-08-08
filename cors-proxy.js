const corsAnywhere = require('cors-anywhere');

const host = '0.0.0.0';
const port = 8080;

corsAnywhere.createServer({
    originWhitelist: [], // Cho phép tất cả các nguồn
}).listen(port, host, () => {
    console.log(`Máy chủ CORS Anywhere đang chạy trên ${host}:${port}`);
});
