import express from 'express';
import path from 'path';
import open from 'open';

const PORT = 8080;
const app = express();

app.use(express.static('build'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(process.env.PORT || 5000);
