const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express(); // tạo express
app.use(bodyParser.json()); // sử dụng để phân tích data json
app.use(cors()); // sử dụng cors để truy cập từ nguồn dữ liệu khác nhau

const db = mysql2.createConnection({
    host: "bcnwonve9440dsjzln78-mysql.services.clever-cloud.com",
    user: "u0fs2aeudfv7l8il",
    password: "9BR9e3SW89j0iVelRcF0",
    database: "bcnwonve9440dsjzln78"
});

db.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối đến cơ sở dữ liệu!!!', err);
        return;
    }
    console.log('Đã kết nối đến cơ sở dữ liệu !!!');
});

app.get('/data', (req, res) => {
    const sql = "SELECT * FROM congthuc";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/datamain', (req, res) => {
    const { name_food } = req.query; // Chỉ lấy tham số name_food từ query
    const sql = "SELECT * FROM congthuc WHERE name_food=?";
    const values = [name_food];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log("Lỗi truy vấn cơ sở dữ liệu: ", err);
            res.status(500).send("Đã xảy ra khi truy cập cơ sở dữ liệu");
            return;
        }
        console.log(result);
        res.send(result[0]);
    });
});

app.post('/data', (req, res) => {
    console.log(req.body);
    const data = {
        type_food: req.body.type_food,
        name_food: req.body.name_food,
        time_cook: req.body.time_cook,
        image_url: req.body.image_url,
        rating: req.body.rating,
        main_ingredients: req.body.main_ingredients,
        nguyenlieu: req.body.nguyenlieu,
        huongdan: req.body.huongdan
    };

    const sql = "INSERT INTO congthuc (type_food, name_food, time_cook, image_url, rating, main_ingredients, nguyenlieu) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
        data.type_food,
        data.name_food,
        data.time_cook,
        data.image_url,
        data.rating,
        data.main_ingredients,
        data.nguyenlieu,
        data.huongdan
    ];

    db.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send({
            status: "Thêm thành công",
            ...data
        });
    });
});
app.post('/datauser', (req, res) => {
    console.log(req.body);
    const data = {
        username: req.body.username,
        email: req.body.email,
        _password: req.body._password
    };
    const sql = "INSERT INTO user (username,email,_password) VALUES (?, ?, ?)";
    const values = [
        data.username,
        data.email,
        data._password
    ];
    db.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send({
            status: "Thêm thành công",
            ...data
        });
    });
});

app.get('/datauser', (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.listen(3001, '127.0.0.1', () => {
    console.log("Server is running ");
});
