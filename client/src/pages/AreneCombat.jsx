import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
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
    const animation1 = useRef();
    const animation2 = useRef();


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

    const animationCard = () => {
        const animate = animation1.current;
        animate.classList.toggle('animation-card1');

        const animate2 = animation2.current;
        animate2.classList.toggle('animation-card2')

    }

    const onClick = () => {
        handleClick();
        animationCard();
    }

    let gagnant;

    if(!result) {
        gagnant = (
            <div className="middle">
                <h1>VS</h1>
                <button onClick={onClick}>Combattez!</button>
                <h3 className='com'>Combatter pour voir qui est le meilleur</h3>
            </div>
        )
    }else if(result) {
        gagnant = (
            <div className="middle">
                <h1 style={{display : "none"}}>VS</h1>
                <button onClick={onClick} style={{display : "none"}}>Combattez!</button>
                <Link to={`/gagnant/${result}`} className='link'>Voyer qui à gagné !</Link>
            </div>
        )
    }


    useEffect(() => {
        fetchCards1();
        fetchCards2();
    },[])

    return (
        <main className='arene'>

                    <div className="fond_carte1" key={champions1._id} ref={animation1}>
                        <div className="carte1">
                            <h2>{champions1.name}</h2>
                            <div className="carte_img1">
                                <img src={`/${champions1.image}`} alt="champion"/>
                            </div>
                            <div className="carte_desc1">
                                <p>{champions1.description}</p>
                            </div>
                            <div className="atk_def1">
                                <p>ATK {champions1.atk}</p>
                                <p>DEF {champions1.def}</p>
                            </div>
                        </div>
                    </div>
                        {gagnant}
                    <div className="fond_carte2" key={champions2._id} ref={animation2}>
                        <div className="carte2">
                            <h2>{champions2.name}</h2>
                            <div className="carte_img2">
                                <img src={`/${champions2.image}`} alt="champion"/>
                            </div>
                            <div className="carte_desc2">
                                <p>{champions2.description}</p>
                            </div>
                            <div className="atk_def2">
                                <p>ATK {champions2.atk}</p>
                                <p>DEF {champions2.def}</p>
                            </div>
                        </div>
                    </div>

            

        </main>
    )
}

export default AreneCombat
