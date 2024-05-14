const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // tạo đối tượng mới
app.use(bodyParser.json()); //sử dụng json để chuyển dữ liệu
app.use(cors());// su dung thu vien cors

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0329217749',
    database: 'letmecook'

});
db.connect();


app.get('/data', (req, res) => {
    var sql = "select * from congthuc";
    db.query(sql, (err, kq) => {
        if (err) throw err;
        console.log(kq);
        res.send(kq);
    })
})
//insert
app.post('/data', (req, res) => {
    console.log(req.body);
    var data = {
        recipe_id: req.body.recipe_id,
        type_food: req.body.type_food,
        name_food: req.body.name_food,
        time_cook: req.body.time_cook,
        image_url: req.body.image_url,
        rating: req.body.rating,
        main_ingredients: req.body.main_ingredients
    };
    var sql = "insert into congthuc set ?";
    db.query(sql, data, (err, kq) => {
        if (err) throw err;
        console.log(kq);
        res.send({
            status: "them thanh cong",
            ...data
        });
    });
});
//chay
app.listen(3000, '192.168.1.6', () => {
    console.log("server dang chay o cong 3000")
})