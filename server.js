const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express()
const port = 3005


var filePath = {
    public: {
        'js': './public/js',
        'css': './public/css',
        'images': './public/image'
    }
}

app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/pages'));

// app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, '/client/build/static')))
app.use('/blog', express.static(path.join(__dirname, '/client/blog/public')))
// app.use(express.static(path.join(__dirname, '/client/build')));
// app.use(express.static('client/blog/public'))

// page configuration
// app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/pages/home.html'))) 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))