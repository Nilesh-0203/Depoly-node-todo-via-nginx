const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Static todo page available at http://localhost:${port}`);
});
