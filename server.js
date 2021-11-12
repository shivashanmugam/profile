const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express()
const port = 3005
// page configuration
app.get('/', (req, res) => res.sendFile('./pages/home.html'))
app.get('/karthi', (req, res) => res.sendFile('./pages/karthi.html'))
app.get(`/client`, (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
app.get(`/blog`, (req, res) => {
    res.sendFile(path.join(__dirname + '/client/blog/public/index.html'));
});

var filePath = {
    public: {
        'js': './public/js',
        'css': './public/css',
        'images': './public/image'
    }
}

app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/pages'));
app.use(express.static('client/blog/public'))
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/client/build')));
app.use('/static', express.static(path.join(__dirname, '/client/build/static')))
app.use('/blog', express.static(path.join(__dirname, '/client/blog/public/index.html')))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))