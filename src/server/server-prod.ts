import path from 'path';
import express from 'express';

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
});
