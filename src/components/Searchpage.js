import React, { useState } from 'react';
import axios from 'axios';
import CardFood from './CardFood';
import '../css/Searchpage.css';

export default function Searchpage() {
    const [filteredData, setFilteredData] = useState([]);
    const [allData, setAllData] = useState([]);

    const handleFilter = async (event) => {
        event.preventDefault();

        // Lấy dữ liệu từ các trường trong form
        const time = event.target.elements.Thoigian.value;
        const ingredient = event.target.elements.Thanhphan.value;
        const search = event.target.elements.search.value.toLowerCase();

        try {
            // Gửi yêu cầu tới server để lấy tất cả dữ liệu
            const response = await axios.get('http://192.168.1.6:3000/data');
            const data = response.data;

            // Cập nhật tất cả dữ liệu vào state
            setAllData(data);

            // Lọc dữ liệu dựa trên các điều kiện
            const filtered = data.filter(food => {
                const matchesTime = time === '' || food.time === parseInt(time);
                const matchesIngredient = ingredient === '' || food.ingredient.toLowerCase().includes(ingredient.toLowerCase());
                const matchesSearch = search === '' || food.name_food.toLowerCase().includes(search);

                return matchesTime && matchesIngredient && matchesSearch;
            });

            // Cập nhật dữ liệu đã lọc vào state
            setFilteredData(filtered);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
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