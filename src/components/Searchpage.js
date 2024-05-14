import React, { useState } from 'react';
import axios from 'axios';
import CardFood from './CardFood';
import '../css/Searchpage.css'
export default function Searchpage() {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = async (event) => {
        event.preventDefault();

        // Lấy dữ liệu từ các trường trong form
        const time = event.target.elements.Thoigian.value;
        const ingredient = event.target.elements.Thanhphan.value;
        const search = event.target.elements.search.value;

        try {
            // Gửi yêu cầu tới server để lấy dữ liệu đã lọc
            const response = await axios.get('http://192.168.1.6:3000/data', {
                params: {
                    time: time,
                    ingredient: ingredient,
                    search: search
                }
            });

            // Cập nhật dữ liệu đã lọc vào state
            setFilteredData(response.data);
        } catch (error) {
            console.error('Error fetching filtered data:', error);
        }
    };

    return (
        <div>
            <form className="filter" onSubmit={handleFilter}>
                <div className="item">
                    <label for="">Thời gian</label>
                    <select name="Thoigian">
                        <option value="">Tất cả</option>
                        <option value="5-10">5-10 phút</option>
                        <option value="10-15">10-15 phút</option>
                        <option value="20-30">20-30 phút</option>
                        <option value="30-60">30-60 phút</option>
                    </select>
                </div>
                <div className="item">
                    <label for="">Thành phần</label>
                    <select name="Thanhphan">
                        <option value="">Tất cả</option>
                        <option value="Gà">Gà</option>
                        <option value="Bò">Bò</option>
                        <option value="Lợn">Lợn</option>
                        <option value="Hải sản">Hải sản</option>
                    </select>
                </div>
                <div className="item">
                    <label for="">Tên món</label>
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
