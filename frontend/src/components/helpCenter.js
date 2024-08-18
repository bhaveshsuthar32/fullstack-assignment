import React, { useState, useEffect } from 'react'
import Header from './header'
import Footer from './footer'

import axios from 'axios';


export default function HelpCenter() {

    const [cards, setCards] = useState([]);

    const [search, setSearch] = useState('');

    useEffect(() => {
        getCards();
    }, []);

    const getCards = async () => {
        try {
            const response = await axios.get('http://localhost:4000/cards');

            setCards(response.data);
            console.log(response)
        } catch (error) {
            console.error('Error fetching cards:', error);

        }
    };

    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />

                <div className="flex-grow bg-purple-200 pt-16 px-6">
                    <h1 className="text-6xl font-bold mb-12 text-center">How can we help?</h1>
                    <div className="max-w-2xl mx-auto mb-16 px-14">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full p-3 pr-12 rounded-lg border border-gray-300 text-lg"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-grow bg-white py-16 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {filteredCards.map(card => (
                            <div key={card.id} className="bg-slate-100 p-6 rounded-lg border-[1px]  shadow-md">
                                <h2 className="text-2xl font-semibold mb-3 border-b-[1px] border-slate-300">{card.title}</h2>
                                <p className="text-gray-600 text-lg">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <Footer />
            </div>
        </>
    );
}
