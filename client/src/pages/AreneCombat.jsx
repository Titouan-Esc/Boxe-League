import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AreneCombat = () => {

    let [champions1, setChampions1] = useState({
        name : '',
        image : '',
        description : '',
        atk : '',
        def : ''
    });
    let [champions2, setChampions2] = useState({
        name : '',
        image : '',
        description : '',
        atk : '',
        def : ''
    });


    let { id1, id2 } = useParams();


    async function fetchCards() {
        try {
            const res = await axios.get(`http://localhost:8000/api/cards/${id1}`);
            const result = await axios.get(`http://localhost:8000/api/cards/${id2}`);
            setChampions1(res.data);
            setChampions2(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(champions1);
    console.log(champions2);

    useEffect(() => {
        fetchCards();
    },[])

    return (
        <main className='arene'>

                    <div className="fond_carte">
                        <div className="carte">
                            <h2>{champions1.name}</h2>
                            <div className="carte_img">
                                <img src={champions1.image} alt="Image du champion"/>
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

                    <div className="fond_carte">
                        <div className="carte">
                            <h2>{champions2.name}</h2>
                            <div className="carte_img">
                                <img src={champions2.image} alt="Image du champion"/>
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
