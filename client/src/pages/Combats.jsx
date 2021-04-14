import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CardsFight from '../components/CardsFight';

const url = 'http://localhost:8000/api/cards';

const Combats = () => {

    const [cards, setCards] = useState([]);

    async function fetchCards() {
        try {
            const res = await axios.get(url);
            console.log(res.data);
            setCards(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCards();
    }, []);


    return (
        <main className='combat'>
            <div className="combat_top">
                <img src="./logo/logo.png" alt="Logo du site"/>

                <div className="top_text">
                    <h1>Boxe League</h1>
                    <p>
                        Quoi de mieux que de participer un tournoi avec
                        les personnages que vous venais de créer !
                    </p>
                </div>
            </div>

            <div className="middel_combat">
                <h2>Combats</h2>
                <p>Sélectionner vos combattans</p>
                <button className='btn_fight'>combattez !</button>
            </div>

            <div className="select_champions">
                <CardsFight cards={cards}/>
            </div>
        </main>
    )
}

export default Combats
