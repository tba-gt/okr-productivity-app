const express = require('express');
const { urlencoded, json } = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express();

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('listening on port: 3000')
});

// middlewares //

// body-parser middlewares
app.use(urlencoded({ extended: true }));
app.use(json());

// make public folder accessible
app.use(express.static('public'))

// 

// database credentials
let user = 'basic_user';
let pass = 'KBpWSHLSRYxcttxN'
let connection_string = `mongodb+srv://${user}:${pass}@cluster0.rxuw6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

MongoClient.connect(connection_string)
    .then(client => {
        console.log('Connected to database.');
        
        const db = client.db('basic_crud_okrs');
        const okrs_collection = db.collection('okrs');
        
        // GET, POST, PUT, DELETE handlers
        app.get('/', (req, res) => {
            const cursor = db.collection('okrs').find();
            cursor.toArray()
                .then(results => {
                    // console.log(results);
                    res.render('index.ejs', { okrs: results });
                }).catch(error => console.error(error));

            // res.sendFile(__dirname + '/index.html');
        });

        app.post('/okrs', (req, res) => {
            console.log("POST request received.");
            // console.log(req.body);
            okrs_collection.insertOne(req.body)
                .then(result => { 
                    // console.log(result);
                    res.redirect('/'); 
                }).catch(error => console.error(error));
        })

        // 6 requests/buffer
        app.put('/okrs', (req, res) => {
            console.log(req.body.okr);
            okrs_collection.findOneAndUpdate(
                { 
                    okr: 'Apple'     // query
                },
                { 
                    $set: {
                        okr: req.body.okr
                    }
                },
                {
                    upsert: true    // insert document if query returns no documents.
                }
            ).then((result) => {
                console.log(result);
            }).catch(error => console.log(error));
        });

    }).catch(error => console.error(error));