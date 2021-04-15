import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Update = () => {
    const [submit, setSubmit] = useState(false);
    const [card, setCard] = useState({
        name : '',
        atk : '',
        def : '',
        description : ''
    });
    const [redirect , setRedirect] = useState(false);

    // const id = useParams;
    // console.log(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', card.name);
        formData.append('atk', card.atk);
        formData.append('def', card.def);
        formData.append('description', card.description);

        axios.put(`http://localhost:8000/api/cards/`, formData)
        .then(res => {
            console.log(res);
            console.log("ok");
        })
        .catch(err => {
            console.log(err);
        });

        setSubmit(true);

        console.log({card, formData});

        setRedirect(true)
    }

    const handleChange = (e) => {
        setCard({...card, [e.target.name]: e.target.value});
    }

    if(redirect){
        return <Redirect to='/champions'/>
    }

    return (
        <div className='update'>
                <form className='form_personnage' onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className="form_gauche">
                        <div className="creation_ligne">
                            <label htmlFor="name">Nom :</label>
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
                        <button type="submit">Modifier le Personnage</button>
                    </div>
                </form>
        </div>
    )
}

export default Update
