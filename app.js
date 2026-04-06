const http = require('http');

// Sửa dòng này: Lấy cổng từ hệ thống (process.env.PORT) hoặc mặc định là 3000
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('Chào bạn! Server Node.js của mình đã lên Cloud thành công! 🚀hehehe');
});

server.listen(port, () => {
  console.log(`Server đang chạy tại cổng: ${port}`);
});
