import React, { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:8000/api/cards';

const Combats = () => {

    const [cards, setCards] = useState([]);
    const [combat, setCombat] = useState(false);
    const [checked, setChecked] = useState('');

    let history = useHistory();

    console.log(checked);

    async function fetchCards() {
        try {
            const res = await axios.get(url);
            console.log(res.data);
            setCards(res.data);
        } catch (error) {
            console.log(error)
        }
        
    }

    const submit = (e) => {
        e.preventDefault();

        
    }

    useEffect(() => {
        fetchCards();
    }, []);


    if(combat) {
        return <Redirect to='/arene'/>
    }


    return (
        <main className='combat'>
            <div className="combat_top">
                <Link to='/'><img src="./logo/logo.png" alt="Logo du site"/></Link>

                <div className="top_text">
                    <h1>Boxe League</h1>
                    <p>
                    Quoi de mieux que de participer à un tournoi avec les personnages que vous venais de créer !
                    </p>
                </div>
            </div>

            <div className="middel_combat">
                <h2>Combats</h2>
                <p>Sélectionner vos combattans</p>
            </div>

            <div className="select_champions">
                <form className='form-combat' onSubmit={submit}>
                    <div className="form_top">
                        <button className='btn_fight' type='submit'>combattez !</button>
                    </div>
                    <div className="form_bottom">
                    {cards.map((c) => {
                        const { _id, name, description, image, atk, def } = c;
                        return(
                            <div className="conteneur_carte" key={_id}>
                                <form className='check_form'>
                                    <div className="fond_carte">
                                        <div className="carte">
                                            <h2>{name}</h2>
                                            <div className="carte_img">
                                                <img src={image} alt="Image du champion"/>
                                            </div>
                                            <div className="carte_desc">
                                                <p>{description}</p>
                                            </div>
                                            <div className="atk_def">
                                                <p>ATK {atk}</p>
                                                <p>DEF {def}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="checkbox" onChange={() => setChecked(c._id)}/>
                                </form>
                            </div>
                        )
                    })}  
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Combats
