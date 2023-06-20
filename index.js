let express = require(`express`);
let app = express();
let port = 3005;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

// Настройка CORS
let cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }));


// Настройка POST-запроса — JSON
app.use(express.json());

// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project-template');

let performSchema = new mongoose.Schema({
    title: String,
    date: Date,
    actors: [{
        ref: "actors",
        type: mongoose.ObjectId
    }],
    image: String,
    description: String,
    type: String
})

let Performance = mongoose.model('performances', performSchema);

let actSchema = new mongoose.Schema({
    name: String,
    born: Date,
    performances: [{
        ref: "performances",
        type: mongoose.ObjectId
    }],
    image: String
})

let Actor = mongoose.model('actors', performSchema);


