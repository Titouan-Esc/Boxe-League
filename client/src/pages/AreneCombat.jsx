import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AreneCombat = () => {

    const [champions, setChampions] = useState([]);


    let { id1, id2 } = useParams();


    async function fetchCards() {
        try {
            const res = await axios.get(`http://localhost:8000/api/cards/${id1}`);
            const result = await axios.get(`http://localhost:8000/api/cards/${id2}`);
            console.log(res.data);
            console.log(result.data);
            setChampions(result.data, res.data);
        } catch (error) {
            console.log(error);
        }
    }

    

    useEffect(() => {
        fetchCards();
    },[champions])

    return (
        <main className='arene'>
            
            {champions.map((val) => {
                const {_id, name, description, image, atk, def} = val;

                return(
                    <div className="fond_carte" key={_id}>
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
                )
            })}
        </main>
    )
}

export default AreneCombat
