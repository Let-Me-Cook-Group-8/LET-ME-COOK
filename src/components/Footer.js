import React from 'react'
import '../css/Footer.css'
export default function Footer() {
    return (
        <footer id="contact">
            <div className="footer-main">
                <div className="footer-tag">
                    <h2 className="footer-title">Top Food</h2>
                    <p className="footer-discri">Bún bò</p>
                    <p className="footer-discri">Bò kho</p>
                    <p className="footer-discri">Trứng chiên</p>
                    <p className="footer-discri">Giả cầy</p>
                </div>

                <div className="footer-tag">
                    <h2 className="footer-title">Liên kết</h2>
                    <p className="footer-discri">Trang chủ</p>
                    <p className="footer-discri">Giới thiệu</p>
                    <p className="footer-discri">Menu</p>
                    <p className="footer-discri">Tìm kiếm</p>
                    <p className="footer-discri">Blog</p>
                </div>
                <div className="footer-tag">
                    <h2 className="footer-title">Liên hệ</h2>
                    <p className="footer-discri">01237456788</p>
                    <p className="footer-discri">03456234567</p>
                    <p className="footer-discri">letmecook1122@gmail.com</p>
                    <p className="footer-discri">webnhom8123@gmail.com</p>
                </div>
                <div className="footer-tag">
                    <h2 className="footer-title">Theo dõi</h2>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>


        </footer>
    )
}
