import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const defaultValue = {
    title: '',
    description: ''
};

export default function AddCard() { 

    const [cardData, setCardData] = useState(defaultValue);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:4000/cards', cardData);
            console.log(response.data);

            navigate("/");
        } catch (error) {
            console.error('Error :-', error);
            
        }
    };

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />

                <div className=" mx-auto  p-16 my-[40px] border rounded-lg shadow-md bg-white">
                    <h2 className="text-xl font-semibold mb-4 text-center">Add Card</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name='title'
                                className="w-full p-2 border border-gray-300 rounded"
                                onChange={handleChange}
                                value={cardData.title} 
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                className="w-full p-2 border border-gray-300 rounded"
                                onChange={handleChange}
                                value={cardData.description} 
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            Add Card
                        </button>
                    </form>
                </div>

                <Footer />
            </div>
        </>
    );
}