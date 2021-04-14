import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


const Creation = () => {

    const [submit, setSubmit] = useState(false);
    const [card, setCard] = useState({
        name : '',
        atk : '',
        def : '',
        description : '',
        image : ''
    });
    const [redirect , setRedirect] = useState(false);


    // function uploadData() {
    //     const cardUrl = 'http://localhost:8000/api/cards';
    //     axios.post(cardUrl, card).then(function (response) {
    //         console.log(response);
    //     });
    // }


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', card.name);
        formData.append('atk', card.atk);
        formData.append('def', card.def);
        formData.append('description', card.description);
        formData.append('image', card.image);

        axios.post('http://localhost:8000/api/cards', formData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });

        setSubmit(true);

        console.log({card, formData});


        // setRedirect(true)
    }

    const handleChange = (e) => {
        setCard({...card, [e.target.name]: e.target.value});
    }

    const handleImage = (e) => {
        setCard({...card, image: e.target.files[0]});
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
                <form className='form_personnage' onSubmit={handleSubmit} enctype='multipart/form-data'>
                    <div className="form_gauche">
                        <div className="creation_ligne">
                            <label htmlFor="">Nom :</label>
                            <input type="text" name='name' value={card.name} onChange={handleChange}/>
                        </div>

                        <div className="creation_ligne">
                            <label htmlFor="atk">ATK :</label>
                            <input type="number" name="atk" min="0" max="999" value={card.atk} onChange={handleChange}/>
                        </div>

                        <div className="creation_ligne">
                            <label htmlFor="def">DEF :</label>
                            <input type="number" name="def" min="0" max="999" value={card.def} onChange={handleChange}/>
                        </div>

                        <div className="creation_ligne">
                            <label htmlFor="description">Descirption :</label>
                            <textarea name="description" cols="30" rows="10" value={card.description} onChange={handleChange}></textarea>
                        </div>
                    </div>

                    <div className="form_droite">
                        <label htmlFor="image">Image du champion :</label>
                        <input type="file" name="image" accept='.png, .jpg, .jpeg' onChange={handleImage}/>

                        <button type="submit">Créer Personnage</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Creation
