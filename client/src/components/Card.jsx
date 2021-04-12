import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


const Card = ({ cards , addCount}) => {

    const [del, setDel] = useState('');

        async function deleteCard(id) {
            try {
                const res = await axios.delete(`http://localhost:8000/api/cards/${id}`);
                console.log(res.data);
                newOp();
            } catch (error) {
                console.log(error);
            }
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
                  <div className="carte" key={_id}>
                      <h2>{name}</h2>
                      <img src={image} alt="Image du champion"/>
                      <p>{description}</p>
                      <p>{atk}</p>
                      <p>{def}</p>

                      <button className='btn_supr' onClick={() => deleteCard(c._id)}>Supprimer</button>
                  </div>
              )
          })}  
        </>
    )
}

export default Card
