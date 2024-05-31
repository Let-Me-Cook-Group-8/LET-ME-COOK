import React from 'react'
import '../css/Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Footer() {
    return (
        <footer id="contact">
            <div className="footer-main">
                <Row>
                    <Col lg={3} xs={6}>
                        <div className="footer-tag">
                            <h2 className="footer-title">Top Food</h2>
                            <p className="footer-discri">Bún bò</p>
                            <p className="footer-discri">Bò kho</p>
                            <p className="footer-discri">Trứng chiên</p>
                            <p className="footer-discri">Giả cầy</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={6}>
                        <div className="footer-tag">
                            <h2 className="footer-title">Liên kết</h2>
                            <p className="footer-discri">Trang chủ</p>
                            <p className="footer-discri">Giới thiệu</p>
                            <p className="footer-discri">Menu</p>
                            <p className="footer-discri">Tìm kiếm</p>
                            <p className="footer-discri">Blog</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={6}>
                        <div className="footer-tag">
                            <h2 className="footer-title">Liên hệ</h2>
                            <p className="footer-discri">01237456788</p>
                            <p className="footer-discri">03456234567</p>
                            <p className="footer-discri">letmecook1122@gmail.com</p>
                            <p className="footer-discri">webnhom8123@gmail.com</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={6}>
                        <div className="footer-tag">
                            <h2 className="footer-title">Theo dõi</h2>
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-square-instagram"></i>
                            <i className="fa-brands fa-square-twitter"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </Col>
                </Row>
            </div>


        </footer>
    )
}
