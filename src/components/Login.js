import React from 'react'
import imagecover from '../image/imagecover.jpeg'
import '../css/Login.css'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <main>
            <div>
                <img id="imgcover" src={imagecover} />
            </div>
            <div id="border">
                <div id="title">
                    <div id="login">
                        <h2>Đăng nhập</h2>
                    </div>
                    <div className="hc"></div>
                    <div id="signup">
                        <Link to='/Register'><h2>Đăng ký</h2></Link>
                    </div>
                </div>
                <div className="hr"> </div>
                <div id="main-login">
                    <from id="text-login">
                        <div>

                            <input id="name" type="text" placeholder="Nhập tên đăng nhập" />
                        </div>
                        <div>

                            <input id="passwd" type="password" placeholder="Nhập mật khẩu" />
                        </div>
                        <div><a id="fpw" href="" />Quên mật khẩu</div>
                        <div>
                            <input id="sub" type="submit" value="Đăng nhập" />
                        </div>
                    </from>
                </div>
            </div>
        </main>
    );
}
