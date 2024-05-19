import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardFood from './CardFood';
import '../css/Searchpage.css';

export default function Searchpage() {
    const [filteredData, setFilteredData] = useState([]);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.1.4:3000/data');
                const data = response.data;
                setAllData(data);
                setFilteredData(data); // Lọc dữ liệu mặc định là tất cả dữ liệu
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Gọi hàm fetch dữ liệu ngay khi component được tạo ra
    }, []); // Tham số thứ hai của useEffect là một mảng rỗng, đảm bảo hàm chỉ chạy một lần sau khi component được render

    const handleFilter = (event) => {
        event.preventDefault();

        // Lấy dữ liệu từ các trường trong form
        const time = parseInt(event.target.elements.Thoigian.value); // Chuyển đổi thời gian sang số nguyên
        const ingredient = event.target.elements.Thanhphan.value.toLowerCase(); // Chuyển đổi thành phần thành chữ thường
        const search = event.target.elements.search.value.toLowerCase();

        // Lọc dữ liệu dựa trên các điều kiện
        const filtered = allData.filter(food => {
            const matchesTime = isNaN(time) || food.time_cook === time; // Kiểm tra nếu không chọn thời gian hoặc thời gian trùng khớp
            const matchesIngredient = ingredient === '' || food.main_ingredients.toLowerCase().includes(ingredient); // Kiểm tra nếu không chọn thành phần hoặc thành phần trùng khớp
            const matchesSearch = search === '' || food.name_food.toLowerCase().includes(search);

            return matchesTime && matchesIngredient && matchesSearch;
        });

        // Cập nhật dữ liệu đã lọc vào state
        setFilteredData(filtered);
    };

    return (
        <div>
            <form className="filter" onSubmit={handleFilter}>
                <div className="item">
                    <label>Thời gian</label>
                    <select name="Thoigian">
                        <option value="">Tất cả</option>
                        <option value="10">10 phút</option>
                        <option value="15">15 phút</option>
                        <option value="30">30 phút</option>
                        <option value="45">45 phút</option>
                        <option value="60">60 phút</option>
                    </select>
                </div>
                <div className="item">
                    <label>Thành phần</label>
                    <select name="Thanhphan">
                        <option value="">Tất cả</option>
                        <option value="Gà">Gà</option>
                        <option value="Bò">Bò</option>
                        <option value="Lợn">Lợn</option>
                        <option value="Hải sản">Hải sản</option>
                    </select>
                </div>
                <div className="item">
                    <label>Tên món</label>
                    <input type="text" name="search" />
                </div>
                <div className="item">
                    <button type="submit">Lọc</button>
                </div>
            </form>
            <div className="gridContainer">
                {filteredData.map((food) => (
                    <CardFood
                        key={food.recipe_id}
                        typeFood={food.type_food}
                        nameFood={food.name_food}
                        imgSrc={food.image_url}
                    />
                ))}
            </div>
        </div>
    );
}
