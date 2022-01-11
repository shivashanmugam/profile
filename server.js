const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.SERVER_PORT || 3005;


// var filePath = {
//     public: {
//         'js': './public/js',
//         'css': './public/css',
//         'images': './public/image',
//         'docs': './public/docs'
//     }
// }

app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/pages'));

// app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use('/docs', express.static(path.join(__dirname, '/public/docs')))
app.use('/blog', express.static(path.join(__dirname, '/client/blog/public')))
app.use('/resume', express.static(path.join(__dirname, '/client/resume-template')))
// app.use('/static', express.static(path.join(__dirname, '/client/build/static')))
app.use('/publicissapient', express.static(path.join(__dirname, '/client/coding-challanges/publicis-sapien/static')))
app.use('/whitespectrecarousel', express.static(path.join(__dirname, '/client/coding-challanges/whitespectre-carousel/static')))
// app.use(express.static(path.join(__dirname, '/client/build')));
// app.use(express.static('client/blog/public'))

// page configuration
// app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/pages/home.html'))) 


app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/blog/public/index.html'));
});

app.get('/publicissapient', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/coding-challanges/publicis-sapien/index.html'));
});

app.get('/whitespectrecarousel', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/coding-challanges/whitespectre-carousel/index.html'));
});


app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/resume-template/index.html'));
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))