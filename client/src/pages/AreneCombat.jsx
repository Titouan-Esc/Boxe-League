import { useParams, Redirect, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AreneCombat = () => {

    const [champions1, setChampions1] = useState({
        name : '',
        image : '',
        description : '',
        atk : '',
        def : ''
    });
    const [champions2, setChampions2] = useState({
        name : '',
        image : '',
        description : '',
        atk : '',
        def : ''
    });
    const [result, setResult] = useState('');


    let { id1, id2 } = useParams();


    async function fetchCards1() {
        try {
            const res = await axios.get(`http://localhost:8000/api/cards/${id1}`);
            setChampions1(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchCards2() {
        try {
            const result = await axios.get(`http://localhost:8000/api/cards/${id2}`);
            setChampions2(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = () => {

        
        if(champions1.atk > champions2.atk || champions1.def > champions2.def) {
            setResult(champions1._id);

        }else if(champions1.atk < champions2.atk || champions1.def < champions2.def) {
            setResult(champions2._id);

        }else if(champions1.atk > champions2.atk || champions1.def < champions2.def) {
            setResult(champions1._id);

        }else if(champions1.atk < champions2.atk || champions1.def > champions2.def) {
            setResult(champions2._id);

        }else if(champions1.atk === champions2.atk || champions1.def === champions2.def) {
            alert('Parfaite égalitée, retourné sur la page combats');
            
        }else if(champions1.atk > champions2.atk || champions1.def === champions2.def) {
            setResult(champions1._id);

        }else if(champions1.atk === champions2.atk || champions1.def < champions2.def) {
            setResult(champions2._id);

        }else if(champions1.atk < champions2.atk || champions1.def === champions2.def) {
            setResult(champions2._id);

        }else if(champions1.atk === champions2.atk || champions1.def > champions2.def) {
            setResult(champions1._id);

        }

    }

    let gagnant;

    if(!result) {
        gagnant = (
            <h3 className='com'>Combatter pour voir qui est le meilleur</h3>
        )
    }else if(result) {
        gagnant = (
            <Link to={`/gagnant/${result}`} className='link'>Gagnant</Link>
        )
    }


    useEffect(() => {
        fetchCards1();
        fetchCards2();
    },[])

    return (
        <main className='arene'>

                    <div className="fond_carte" key={champions1._id}>
                        <div className="carte">
                            <h2>{champions1.name}</h2>
                            <div className="carte_img">
                                <img src={`/${champions1.image}`} alt="champion"/>
                            </div>
                            <div className="carte_desc">
                                <p>{champions1.description}</p>
                            </div>
                            <div className="atk_def">
                                <p>ATK {champions1.atk}</p>
                                <p>DEF {champions1.def}</p>
                            </div>
                        </div>
                    </div>

                    <div className="middle">
                        <h1>VS</h1>
                        <button onClick={handleClick}>Combattez!</button>
                        {gagnant}
                    </div>

                    <div className="fond_carte" key={champions2._id}>
                        <div className="carte">
                            <h2>{champions2.name}</h2>
                            <div className="carte_img">
                                <img src={`/${champions2.image}`} alt="champion"/>
                            </div>
                            <div className="carte_desc">
                                <p>{champions2.description}</p>
                            </div>
                            <div className="atk_def">
                                <p>ATK {champions2.atk}</p>
                                <p>DEF {champions2.def}</p>
                            </div>
                        </div>
                    </div>

            

        </main>
    )
}

export default AreneCombat
