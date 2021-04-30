import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gagnant = () => {

    const [gagnant, setGagnant] = useState({
        name : '',
        image : '',
        descriptio : '',
        atk : '',
        def : ''
    })

    let { id } = useParams();
    console.log(id);

    async function fetchChampion() {
        try {
            const result = await axios.get(`http://localhost:8000/api/cards/${id}`);
            console.log(result.data);
            setGagnant(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchChampion();
    },[])


    return (
        <main className='gagnant'>
            <Link to='/combats'><img src="../logo/arrow.png" alt="Retour en arrière" className="return"/></Link>
            <div className="top_gagnant">
                <h1>Et voici votre Gagnant !!</h1>
            </div>

            <div className="fond_carte" key={gagnant._id}>
                <div className="carte">
                    <h2>{gagnant.name}</h2>
                    <div className="carte_img">
                        <img src={`/${gagnant.image}`} alt="champion"/>
                    </div>
                    <div className="carte_desc">
                        <p>{gagnant.description}</p>
                    </div>
                    <div className="atk_def">
                        <p>ATK {gagnant.atk}</p>
                        <p>DEF {gagnant.def}</p>
                    </div>
                </div>
            </div>            
        </main>
    )
}

export default Gagnant
