import React, { useState } from 'react';
import imagecover from '../image/imagecover.jpeg';
import '../css/Register.css';
import { Link, useNavigate } from 'react-router-dom'; 

export default function Register() {
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        _password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:3000/datauser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log(result);
            alert("Bạn đã đăng ký thành công !!!");
            navigate('/login');
        } catch (error) {
            console.error('Lỗi:', error);
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
                        <Link to='/login'><h2>Đăng nhập</h2></Link>
                    </div>
                    <div className="hc"> </div>
                    <div id="signup">
                        <h2>Đăng ký</h2>
                    </div>
                </div>
                <div className="hr"> </div>
                <form onSubmit={handleSubmit} >
                    <div id="main-signup">
                        <div id="text-signup">
                            <input className="name" type="text" placeholder="Nhập họ và tên" />
                            <input className="name" type="text" value={formData.username} name="username" placeholder="Nhập tên đăng nhập" onChange={handleChange} />
                            <input className="email" type="email" value={formData.email} name="email" placeholder="Nhập email" onChange={handleChange} />
                            <input className="passwd" type="password" value={formData._password} name="_password" placeholder="Nhập mật khẩu" onChange={handleChange} />
                            <input className="passwd" type="password" placeholder="Xác nhận mật khẩu" />
                            <button type="submit">Đăng ký</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}
