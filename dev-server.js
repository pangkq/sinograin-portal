const http = require('http')
const fs = require('fs')
const path = require('path')
const { URL } = require('url')

const rootDir = __dirname
const port = 8887
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg'
}

http.createServer((request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname)
  const relativePath = requestPath === '/' ? 'index.html' : requestPath.replace(/^\/+/, '')
  const filePath = path.resolve(rootDir, relativePath)

  if (filePath !== rootDir && !filePath.startsWith(rootDir + path.sep)) {
    response.writeHead(403)
    response.end('Forbidden')
    return
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/plain; charset=utf-8' })
      response.end(error.code === 'ENOENT' ? 'Not Found' : 'Internal Server Error')
      return
    }

    response.writeHead(200, {
      'Cache-Control': 'no-store',
      'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream'
    })
    response.end(content)
  })
}).listen(port, '127.0.0.1', () => {
  console.log(`sinograin-portal is running at http://localhost:${port}/`)
})
