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
// let Schema = mongoose.Schema;

let performSchema = new mongoose.Schema({
    title: String,
    date: Date,
    actors: [{
        ref: 'Actor',
        type: mongoose.ObjectId
        // type: Schema.Types.ObjectId
    }],
    image: String,
    description: String,
    type: String
})

let Performance = mongoose.model('performances', performSchema);

let actSchema = new mongoose.Schema({
    name: String,
    born: Date,
    performances: [
        {
        ref: 'Performance',
        type: mongoose.ObjectId
        // type: Schema.Types.ObjectId
        }
    ],
    image: String
})

let Actor = mongoose.model('actors', actSchema);

app.get('/performances/all', async function (req, res) {
    let response = await Performance.find()
    res.send(response)
})

app.get('/musicals/all', async function (req, res) {
    let response = await Performance.find({type: 'Мюзикл'})
    res.send(response)
})

app.get('/plays/all', async function (req, res) {
    let response = await Performance.find({type: 'Спектакль'})
    res.send(response)
})

app.get('/onepage', async function (req, res) {
    let perform1 = req.query.perform_id;
    // console.log('1', perform1);
    let perform2 = await Performance.findOne({_id: perform1}).populate("actors");
    console.log(perform2, perform2 );
    res.send(perform2);
})

app.post('/performances/find/data', async function (req, res) {
    let dataFind = req.body.dataFind;
    
    let perform = await Performance.find({data: dataFind}).populate("actors");

    res.send(perform);
});

app.post('/performances/find/title', async function (req, res) {
    let titleFind = req.body.titleFind;
    
    let perform = await Performance.find().populate("actors");
    let perform2 = [];
    for (i=0; i< perform.length; i++){
        if (perform[i].title.toLowerCase().includes(titleFind.toLowerCase())){
            perform2.push(perform[i])
        }
    }
    console.log(perform2)
    res.send(perform2);
});

