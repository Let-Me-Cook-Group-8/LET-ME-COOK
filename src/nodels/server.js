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
    port: 3306,
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
    var data = { username: req.body.username, email: req.body.email, _password: req.body._password }
    var sql = "insert into admin set ?";
    db.query(sql, data, (err, kq) => {
        if (err) throw err;
        console.log(kq);
        //gui kq cho react
        res.send({
            status: "them thanh cong",
            admin_id: null,
            username: req.body.username,
            email: req.body.email,
            _password: req.body._password
        });
    })
})
//chay
app.listen(3000, '172.17.208.1', () => {
    console.log("server dang chay o cong 3000")
})