import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const url = 'http://localhost:8000/api/cards';

const VosChampions = () => {
    const [cards, setCards] = useState([]);
    const [opCount, setOpCount] = useState(0);

    async function fetchCards() {
        try {
            const res = await axios.get(url);
            console.log(res.data);
            setCards(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const addCount = () => {
        setOpCount(opCount+1);
    }

    useEffect(() => {
        fetchCards();
    }, [opCount]);




    return (
        <main className="vos_champions">
            <div className="vos_champions_top">
                <div className="top_top">
                    <Link to='/'><img src="./logo/arrow.png" alt="Retour en arrière" className="return"/></Link>
                    <img src="./logo/logo.png" alt="Logo du site"/>
                </div>

                <div className="top_text">
                    <h1>Vos champions</h1>
                    <p>
                        Créer vos champions que vous désirez tant ! Et faite les combattre dans des tournois ou seules leurs statistiques compterons !
                    </p>
                </div>
            </div>

            <div className="bandeau">
                <h2>Votre collection</h2>
            </div>
            <div className="personnages">
                <div className="personnages_btn">
                    <Link to='/creation'><button>Création du personnage</button></Link>
                    <Link to='/combats'><button>Combattez</button></Link>
                </div>
                <Card cards={cards} addCount={addCount}/>
            </div>
        </main>
    )
}

export default VosChampions
