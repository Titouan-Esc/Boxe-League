import axios from 'axios';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';



const Card = ({ cards , addCount}) => {

    const [del, setDel] = useState('');
    const history = useHistory();
    

        // ? Fonction asynchrone pour la suppression d'une carte
        async function deleteCard(id) {
            try {
                const res = await axios.delete(`http://localhost:8000/api/cards/${id}`);
                console.log(res.data);
                newOp();
            } catch (error) {
                console.log(error);
            }
        }

        const  updateCard = (id) => {
            console.log(id);
            history.push(`/update/${id}`);
        }


        const newOp = () => {
            addCount();
        }
  

        if(del) {
            return <Redirect to='/champions'/>
        }


    return (
        <>
          {cards.map((c) => {
              const { _id, name, description, image, atk, def } = c;
              return(
                <div className="conteneur_carte" key={_id}>
                    <div className="fond_carte">
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
                    <button className='btn_update' onClick={() => updateCard(c._id)}>Modifier</button>
                    <button className='btn_supr' onClick={() => deleteCard(c._id)}>Supprimer</button>
                 </div>
              )
          })}  
        </>
    )
}

export default Card
