import React from 'react';
import '../css/Header.css';
import Letmecook from '../image/Letmecook.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div id="header">
                <div id="top-left">
                    <a href="" id="logo" >
                        <img src={Letmecook} style={{ height: '7vh' }} alt="Logo" />
                    </a>
                </div>

                <div id="top-right">
                    <div id="nav">
                        <Link className="nav-link" to="/">Trang Chủ</Link>
                        <a className="nav-link" href="#about">Giới thiệu</a>
                        <a className="nav-link" href="#vertical-list">Danh mục</a>
                        <a className="nav-link" href="#main-content">Nổi bật</a>
                        <Link className="nav-link" to="/search">Tìm kiếm</Link>
                        <a className="nav-link" href="#contact">Liên hệ</a>
                        <Link className="nav-link" to="/login">Đăng nhập</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
