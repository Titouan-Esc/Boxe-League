import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


const Creation = () => {

    const [name, setName] = useState('');
    const [atk, setAtk] = useState('');
    const [def, setDef] = useState('');
    const [description , setDescription] = useState('');
    const [image, setImage] = useState('');
    const [submit, setSubmit] = useState(false);
    const [card, setCard] = useState([]);
    const [redirect , setRedirect] = useState(false);

    function uploadData() {
        const cardUrl = 'http://localhost:8000/api/cards';
        axios.post(cardUrl, card).then(function (response) {
            console.log(response);
        });
    }

    useEffect(() => {
        console.log(card);
        uploadData(card);
    }, [card]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmit(true);
        setCard({
            ...{name},
            ...{atk},
            ...{def},
            ...{description},
            ...{image}
        });

        console.log(card);
        setRedirect(true)
    }

    if(redirect){
        return <Redirect to='/champions'/>
    }

    return (
        <main className='creation_personnage'>
            <div className="creation_top">
                <Link to='/champions'><img src="./logo/arrow.png" alt="Retour en arrière"className="return"/></Link>
                <h1>Création du Personnage</h1>
            </div>
            <div className="conteneur_form">
                <form className='form_personnage' onSubmit={handleSubmit}>
                    <div className="form_gauche">
                        <div className="creation_ligne">
                            <label htmlFor="">Nom :</label>
                            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="creation_ligne">
                            <label htmlFor="atk">ATK :</label>
                            <input type="number" name="atk" min="0" max="999" value={atk} onChange={(e) => setAtk(e.target.value)}/>
                        </div>

                        <div className="creation_ligne">
                            <label htmlFor="def">DEF :</label>
                            <input type="number" name="def" min="0" max="999" value={def} onChange={(e) => setDef(e.target.value)}/>
                        </div>

                        <div className="creation_ligne">
                            <label htmlFor="desc">Descirption :</label>
                            <textarea name="desc" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                    </div>

                    <div className="form_droite">
                        <label htmlFor="image">Image du champion :</label>
                        <input type="file" name="image" accept="image/png, image/jpeg" value={image} onChange={(e) => setImage(e.target.value)}/>
                        <button type="submit">Créer Personnage</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Creation
