import React from 'react';
import '../css/Header.css';
import Letmecook from '../image/Letmecook.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (

        <header>
            <nav class="header navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div class="container-fluid">
                    <a class="navbar-branch" href="#home" id="logo">
                        <img src={Letmecook} style={{ height: '50px' }} alt="Logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="nsavbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="ms-auto navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link" to="/">Trang Chủ</Link>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#about">Giới thiệu</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#main-content">Nổi bật</a>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/search">Tìm kiếm</Link>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#contact">Liên hệ</a>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/login">Đăng nhập</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/Addblog">Viết blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}
