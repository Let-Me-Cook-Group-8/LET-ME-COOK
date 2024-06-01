import React from 'react'
import '../css/Content.css'

import imagecover from '../image/imagecover.jpeg'
import intro from '../image/intro.jpeg'

import Pho from '../image/Pho.jpg'
import Banhtrangnuong from '../image/Banh-Trang-Nuong.jpg'
import Banhmi from '../image/Banh-Mi.jpg'
import Footer from './Footer'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Content() {
    return (
        <main>
            <section id="home">
                <div className="messager">
                    <div className="text">
                        <h1>LET ME COOK</h1>
                    </div>
                </div>
                <img id="imagecover" src={imagecover} alt="Cover" />
            </section>
            <section id="about">
                <Row className="about2">
                    <Col lg={6} md={12}>
                        <img id="imgabout" className="mx-auto d-block" src={intro} style={{ height: '300px' }} alt="Introduction" />
                    </Col>
                    <Col id="textabout" lg={6} md={12}>
                        <h2 className="title">GIỚI THIỆU</h2>
                        <p className="discribe">Chào mừng bạn đến với "Letmecook" - nơi chia sẻ niềm đam mê và tình yêu với ẩm thực.
                            Trang web này được tạo ra với mục tiêu mang đến cho bạn những công thức nấu ăn phong phú, dễ làm và hấp dẫn từ khắp nơi trên thế giới,
                            giúp bạn biến những bữa ăn hàng ngày trở nên đặc biệt và đầy màu sắc. Với thiết kế giao diện trực quan và thân thiện, Ẩm Thực Ngon giúp người dùng dễ dàng tìm kiếm
                            và lựa chọn công thức phù hợp với nhu cầu. Chức năng tìm kiếm thông minh cũng giúp bạn nhanh chóng tìm thấy công thức mình cần chỉ với vài từ khóa.</p>
                    </Col>
                </Row>
            </section>
            <div className="divider"></div>

            <section className="wrapper">
                <Row>
                    <ul className="carousel">
                        <Col lg={2} md={3} xs={4}>
                            <li className="food">
                                <a href="https://example.com/bok-kho">
                                    <div className="Image">
                                        <img
                                            src="https://cdn.tgdd.vn/Files/2018/12/13/1137914/cach-nau-bo-kho-tai-nha-bang-goi-gia-vi-bo-kho-don-gian-ngon-dung-dieu-202107211101519924.jpg"
                                            alt="Bò kho" draggable="false" />
                                    </div>
                                    <div className="Title">Bò kho</div>
                                </a>
                            </li>
                        </Col>
                        <Col lg={2} md={3} xs={4}>
                            <li className="food">
                                <a href="https://example.com/tom-ram">
                                    <div className="Image">
                                        <img
                                            src="https://pandafood.com.vn/wp-content/uploads/2019/08/tom-ram-man-1.jpg" alt="Tôm Ram"
                                            draggable="false" />
                                    </div>
                                    <div className="Title">Tôm Ram</div>
                                </a>
                            </li>
                        </Col>
                        <Col lg={2} md={3} xs={4}>
                            <li className="food">
                                <a href="https://example.com/apple-pie">
                                    <div className="Image">
                                        <img
                                            src="https://img-global.cpcdn.com/recipes/376446af6ee515ff/1200x630cq70/photo.jpg"
                                            alt="Apple Pie" draggable="false" />
                                    </div>
                                    <div className="Title">Apple Pie</div>
                                </a>
                            </li>
                        </Col>
                        <Col lg={2} md={3} xs={4}>
                            <li className="food">
                                <a
                                    href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvnexpress.net%2Fca-kho-mang-thom-ngon-nhu-nha-hang-4486717.html&psig=AOvVaw1GkCMc4ToINm5XVp634xA4&ust=1710297482508000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDa--DY7YQDFQAAAAAdAAAAABAJ">
                                    <div className="Image">
                                        <img
                                            src="https://i-giadinh.vnecdn.net/2022/07/12/Thanh-pham-1-6512-1657601877.jpg" alt="Cá kho tộ"
                                            draggable="false" />
                                    </div>
                                    <div className="Title">Cá kho tộ</div>
                                </a>
                            </li>
                        </Col>
                        <Col lg={2} md={3} xs={4}>
                            <li className="food">
                                <a href="https://example.com/thit-kho-tau">
                                    <div className="Image">
                                        <img
                                            src="https://cdn.tgdd.vn/Files/2019/01/07/1143169/cach-nau-thit-kho-tau-trung-cut-thom-ngon-thit-mem-dam-da-202401091518527882.jpg"
                                            alt="Thịt Kho Tàu" draggable="false" />
                                    </div>
                                    <div className="Title">Thịt Kho Tàu
                                    </div>
                                </a>
                            </li>
                        </Col>
                        <Col lg={2} md={3} xs={4}>
                            <li className="food B">
                                <a href="https://example.com/sushi">
                                    <div className="Image">
                                        <img
                                            src="https://www.vinmec.com/s3-images/20210317_143609_055773_sushi.max-800x800.jpg"
                                            alt="Sushi" draggable="false" />
                                    </div>
                                    <div className="Title">Sushi</div>
                                </a>
                            </li>
                        </Col>
                    </ul>
                </Row>
            </section>
            <div className="divider"></div>

            <section id="main-content">
                <div className="container border-bottom">
                    <h2 className="title">CÔNG THỨC NỔI BẬT</h2>
                    <div className="recipe-grid">
                        <Row>
                            <Col lg={4} md={6} xs={12}>
                                <div className="recipe">
                                    <img src={Pho} alt="Pho" className="imgrecipe" />
                                    <h3 className="card-title-text"><a href="./Pho-Recipe.html">Phở</a></h3>
                                    <p className="discribe">Phở là một món ăn truyền thống của Việt Nam, nổi tiếng và được yêu thích
                                        trên toàn thế giới. Được chế biến từ những sợi bánh phở mềm mịn, nằm trong nồi nước dùng
                                        thơm ngon và được thêm các loại thịt, gia vị tùy thích. Món phở kết hợp với rau sống tươi
                                        mát, hành, ngò và chanh tạo nên một hương vị độc đáo và hấp dẫn. Phở không chỉ là một món ăn
                                        ngon mà còn mang trong mình cả một nét văn hóa đậm đà của người Việt. Từ xe phở lưu động đến
                                        những quán phở nổi tiếng, nó đã trở thành một biểu tượng ẩm thực không thể thiếu khi đến
                                        Việt Nam.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} xs={12}>
                                <div className="recipe">
                                    <img src={Banhtrangnuong} alt="Banh-Trang-Nuong" className="imgrecipe" />
                                    <h3 className="card-title-text"><a href="./Banh-Trang-Nuong.html">Bánh tráng nướng</a></h3>
                                    <p className="discribe">Bánh tráng nướng là một món ăn đường phố phổ biến và hấp dẫn của Việt Nam.
                                        Được làm từ một lớp bánh tráng mỏng như giấy, được thoa đều với một hỗn hợp gia vị đặc trưng
                                        và nướng trên lửa than nhanh chóng. Món bánh tráng nướng thường được chế biến với các loại
                                        nhân như trứng gà, chả lụa, tôm khô, hành tây, và các loại gia vị khác tùy theo khẩu vị.
                                        Hương vị của bánh tráng nướng là sự kết hợp hoàn hảo giữa sự giòn tan của bánh tráng, hương
                                        thơm của gia vị và độ ngọt mặn của nhân.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} xs={12}>
                                <div className="recipe">
                                    <img src={Banhmi} alt="Banh-Mi" className="imgrecipe" />
                                    <h3 className="card-title-text"><a href="./Banh-Mi.html">Bánh mì</a></h3>
                                    <p className="discribe">Bánh mì là một món ăn đặc trưng và rất phổ biến của Việt Nam. Món này được
                                        làm từ một ổ bánh mì nóng hổi, với vỏ ngoài giòn tan và bên trong mềm mịn. Bánh mì Việt Nam
                                        thường được chế biến với nhiều loại nhân như thịt heo, gà, xúc xích, pate, trứng, rau sống,
                                        và gia vị như hành, ngò, tương ớt, và sốt mayonnaise. Hương vị của bánh mì Việt Nam là sự
                                        kết hợp hài hòa giữa vị ngọt, mặn và chua, tạo nên một trải nghiệm ẩm thực độc đáo. Bánh mì
                                        Việt Nam không chỉ là một món ăn thường ngày mà còn được xem là một biểu tượng ẩm thực của
                                        nước ta.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

            <div className="devider"></div>
            <Footer />
        </main>
    )
}
