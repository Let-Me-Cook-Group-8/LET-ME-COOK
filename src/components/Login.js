import React, { useState,useEffect } from 'react';
import imagecover from '../image/imagecover.jpeg';
import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Login() {
    const [allData, setAllData] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchData = async () => {// hàm không đồng bộ
            try {
                const response = await axios.get('http://127.0.0.1:3000/datauser');//lấy dữ liệu từ server
                const data = response.data;
                setAllData(data);
               
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Gọi hàm fetch dữ liệu ngay khi component được tạo ra
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Lấy giá trị từ input
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value.trim(); 
        
        // Kiểm tra xem username và password có tồn tại trong allData không
        const user = allData.find(user => user.username === username && user._password === password);
        console.log(allData);
        if (user) {
            alert("Đăng nhập thành công!");
            navigate('/');
        } else {
            alert("Tên tài khoản hoặc mật khẩu không đúng!");
        }
    };
    return (
        <main>
            <div>
                <img id="imgcover" src={imagecover} alt="Cover" />
            </div>
            <div id="border">
                <div id="title">
                    <div id="login">
                        <h2>Đăng nhập</h2>
                    </div>
                    <div className="hc"></div>
                    <div id="signup">
                        <Link to='/register'><h2>Đăng ký</h2></Link>
                    </div>
                </div>
                <div className="hr"> </div>
                <div id="main-login">
                    <form id="text-login" onSubmit={handleSubmit}>
                        <div>
                            <input id="name" type="text" name="username" placeholder="Nhập tên đăng nhập"  />
                        </div>
                        <div>
                            <input id="passwd" type="password" name="password" placeholder="Nhập mật khẩu"  />
                        </div>
                        <div>
                            <a id="fpw" href="/">Quên mật khẩu</a>
                        </div>
                        <div>
                            <input id="sub" type="submit" value="Đăng nhập" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}