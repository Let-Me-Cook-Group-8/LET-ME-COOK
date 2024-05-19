const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // create a new instance of Express
app.use(bodyParser.json()); // use body-parser to parse JSON data
app.use(cors()); // use CORS

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0329217749',
    database: 'letmecook'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.get('/data', (req, res) => {
    var sql = "SELECT * FROM congthuc";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/data', (req, res) => {
    console.log(req.body);
    var data = {
        type_food: req.body.type_food,
        name_food: req.body.name_food,
        time_cook: req.body.time_cook,
        image_url: req.body.image_url,
        rating: req.body.rating,
        main_ingredients: req.body.main_ingredients
    };

    // Constructing the SQL query with specific columns
    var sql = "INSERT INTO congthuc (type_food, name_food, time_cook, image_url, rating, main_ingredients) VALUES (?, ?, ?, ?, ?, ?)";
    
    // Extracting values in the same order as columns
    var values = [
        data.type_food,
        data.name_food,
        data.time_cook,
        data.image_url,
        data.rating,
        data.main_ingredients
    ];

    // Executing the query
    db.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send({
            status: "them thanh cong",
            ...data
        });
    });
});

// Start the server
app.listen(3000, '192.168.1.4', () => {
    console.log("Server is running on port 3000");
});
