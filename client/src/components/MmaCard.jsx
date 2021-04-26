import React, { useState, useContext } from 'react';
import { AdminContext } from '../Admin.Context';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


const MmaCard = ({ mma, addCount }) => {

    const {admin, setAdmin} = useContext(AdminContext);

    const [search, setSearch] = useState('');
    const [del, setDel] = useState('');

    // ? Fonction asynchrone qui permet de supprimer une carte
    async function deleteMma(id) {
        try {
            const res = await axios.delete(`http://localhost:8000/api/mma/${id}`);
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
        return <Redirect to='/'/>
    }
    
    return (
        <div className='champions'>
            <form>
                <input type="text" placeholder='Cherchez...' onChange={(e) => setSearch(e.target.value)}/>
            </form>
          {mma.filter((val) => {

              const { name } = val;

              if(search === '') {
                  return val;
              }else if(name.toLowerCase().includes(search.toLocaleLowerCase())) {
                return val;
              }

          }).map((c) => {
              const { _id, name, image, totalVic, totalDef, koVic, koDef, pays, naissance, taille, categorie } = c;

              let mmaDelete;

                if(admin) {
                    mmaDelete = (
                        <button className='btn-mma-delete' onClick={() => deleteMma(c._id)}>Supprimer</button>
                    )
                }

                let modifyMma;

                if(admin) {
                    modifyMma = (
                        <Link to={`/update-mma/${_id}`} className='btn-update'>Modifier</Link>
                    )
                }
                
              return(
                <div className="mma_card" key={_id}>
                        <h3>{name}</h3>
                        <img src={image} alt="Image du champion"/>
                        <div className="def_vic">
                            <div className="def">
                                <p className='top_def'>{totalDef}</p>
                                <p>{koDef}</p>
                            </div>
                            <div className="vic">
                                <p className='top_vic'>{totalVic}</p>
                                <p>{koVic}</p>
                            </div>
                        </div>
                            <p>{pays}</p>
                            <p>{naissance}</p>
                            <p>{taille}</p>
                            <p>{categorie}</p>
                        <div className="supr_upd">
                            {modifyMma}
                            {mmaDelete}
                        </div>
                </div>
              )
          })}  
        </div>
    )
}

export default MmaCard
