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
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState('');



    async function fetchCards() {
        try {
            const res = await axios.get(url);
            console.log(res.data);
            setCards(res.data);
        } catch (error) {
            console.log(error)
        }
        
    }


    const handleChange1 = (e) => {

        setSelect1(e.target.value);

    }


    console.log(select1);

    const handleChange2 = (e) => {

        setSelect2(e.target.value);

    }


    console.log(select2);


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

                        <select id='select' onChange={handleChange1}>
                            <option>---Choissier votre champions---</option>
                            {cards.map((c) => {

                                return(
                                    <>
                                        <option value={c._id}>{c.name}</option>
                                    </>
                                )
                            })}
                        </select>
                        <h1>VS</h1>
                        <select id='select' onChange={handleChange2}>
                            <option>---Choissier votre champions---</option>
                            {cards.map((c) => {

                                return(
                                    <>
                                        <option value={c._id}>{c.name}</option>
                                    </>
                                )
                            })}
                        </select>
                    </div>
                    <Link to={`/arene/${select1}/${select2}`}><button className='btn_fight'>combattez !</button></Link>
                </form>
            </div>
        </main>
    )
}

export default Combats
