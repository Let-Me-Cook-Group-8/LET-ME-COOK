import React, { Component } from 'react';
import '../css/Header.css';
import Letmecook from '../image/Letmecook.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { click } from '@testing-library/user-event/dist/click';

//export default function Header() {
class Header extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    render() {
        return (

            <header class="sticky-top" onClick={this.handleClick}>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-branch" href="#logo" id="logo">
                            <img src={Letmecook} style={{ height: '60px' }} alt="Logo" />
                        </a>
                        <div class="collapse navbar-collapse" id="navbarResponsive" className={this.state.clicked ? "#navbarResponsive active" : "#navbarResponsive"}>
                            <ul class="navbar-nav ms-auto">
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
                        <div id="mobile" onClick={this.handleClick}>
                            <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                    </div>
                </nav>
            </header>

        );
    }
}
export default Header;