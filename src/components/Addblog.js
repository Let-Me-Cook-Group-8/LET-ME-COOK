import React, { useState } from 'react';
import '../css/Addblog.css';

export default function Addblog() {
    const [formData, setFormData] = useState({
        type_food: '',
        name_food: '',
        time_cook: '',
        image_url: '',
        rating: '',
        main_ingredients: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://192.168.1.4:3000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className='addblog-body'>
            <div className="addblog-container">
                <h1>Đóng góp món ăn của bạn</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="type_food"
                                placeholder="Type-food"
                                value={formData.type_food}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="name_food"
                                placeholder="Name-food"
                                value={formData.name_food}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="time_cook"
                                placeholder="Time-cook"
                                value={formData.time_cook}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="image_url"
                                placeholder="Image-url"
                                value={formData.image_url}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="rating"
                                placeholder="Rating"
                                value={formData.rating}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="main_ingredients"
                                placeholder="Main-ingredients"
                                value={formData.main_ingredients}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}
