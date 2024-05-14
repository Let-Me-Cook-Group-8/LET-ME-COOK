import React from 'react'
import imagecover from '../image/imagecover.jpeg'

import '../css/Register.css'
import { Link } from 'react-router-dom';
export default function Register() {
    return (
        <main>
            <div>
                <img id="imgcover" src={imagecover} />
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
                <div id="main-signup">
                    <div id="text-signup">

                        <input class="name" type="text" placeholder="Nhập họ và tên" />


                        <input className="name" type="text" placeholder="Nhập tên đăng nhập" />


                        <input id="email" type="email" placeholder="Nhập email" />

                        <input className="passwd" type="password" placeholder="Nhập mật khẩu" />


                        <input className="passwd" type="text" placeholder="Xác nhận mật khẩu" />

                        <button type="submit">Đăng ký</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
