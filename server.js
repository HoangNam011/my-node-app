const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Nếu khách vào trang chủ (/) thì đưa file index.html
    let url = req.url === '/' ? '/index.html' : req.url;
    let filePath = path.join(__dirname, url);
    let extname = path.extname(filePath);

    // Xác định kiểu file để trình duyệt đọc đúng
    let contentType = 'text/html';
    if (extname === '.css') contentType = 'text/css';
    if (extname === '.svg') contentType = 'image/svg+xml';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Không tìm thấy file này rồi!');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, "0.0.0.0", () => {
    console.log(`Server chạy tại port ${port}`);
});
