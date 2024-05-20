const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // tạo express
app.use(bodyParser.json()); // sử dụng để phân tích data json
app.use(cors()); // sử dụng cors để truy cập từ nguồn dữ liệu khác nhau

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0329217749',
    database: 'letmecook'
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
        nguyenlieu: req.body.nguyenlieu
    };

    const sql = "INSERT INTO congthuc (type_food, name_food, time_cook, image_url, rating, main_ingredients, nguyenlieu) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
        data.type_food,
        data.name_food,
        data.time_cook,
        data.image_url,
        data.rating,
        data.main_ingredients,
        data.nguyenlieu
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

app.listen(3000, '192.168.1.6', () => {
    console.log("Server is running on port 3000");
});
