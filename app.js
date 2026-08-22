const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Arif DevOps Application</title>
        </head>

        <body>
            <h1>Welcome to Arif DevOps Application</h1>

            <h2>Version: 1.0</h2>

            <p>Environment: Production</p>

            <p>Application deployed using:</p>

            <ul>
                <li>GitHub</li>
                <li>GitHub Actions</li>
                <li>Docker</li>
                <li>Docker Hub</li>
                <li>AWS EC2</li>
            </ul>

        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
