import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:8000/api/cards';

const Combats = () => {

    const [cards, setCards] = useState([{
        name : '',
        image : '',
        description : '',
        atk : '',
        def : ''
    }]);
    const [combat, setCombat] = useState(false);
    const [select, setSelect] = useState('');



    async function fetchCards() {
        try {
            const res = await axios.get(url);
            console.log(res.data);
            setCards(res.data);
        } catch (error) {
            console.log(error)
        }
        
    }


    const handleChange = (e) => {

        setSelect(e.target.value);

    }


    console.log(select);


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
                <form className='form-combat'>
                    <div className="form_top">
                        <Link to={`/arene/${cards._id}/${cards._id}`}><button className='btn_fight'>combattez !</button></Link>
                    </div>
                    <div className="form_bottom">
                        {cards.map((c) => {
                            
                            return(
                                <div className="conteneur_carte" key={c._id}>
                                        <div className="fond_carte">
                                            <div className="carte">
                                                <h2>{c.name}</h2>
                                                <div className="carte_img">
                                                    <img src={c.image} alt="Image du champion"/>
                                                </div>
                                                <div className="carte_desc">
                                                    <p>{c.description}</p>
                                                </div>
                                                <div className="atk_def">
                                                    <p>ATK {c.atk}</p>
                                                    <p>DEF {c.def}</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            )
                        })}  
                    </div>
                    
                    <div className="form_select">

                        <select id='select' onChange={handleChange}>
                            {cards.map((c) => {

                                return(
                                    <>
                                        <option value={c._id}>{c.name}</option>
                                    </>
                                )
                            })}
                        </select>
                        <h1>VS</h1>
                        <select id='select' onChange={handleChange}>
                            {cards.map((c) => {

                                return(
                                    <>
                                        <option value={c._id}>{c.name}</option>
                                    </>
                                )
                            })}
                        </select>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Combats
