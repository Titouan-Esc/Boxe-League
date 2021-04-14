import React, { useState } from 'react';


const MmaCard = ({ data }) => {

    const [search, setSearch] = useState('');


    return (
        <div className='champions'>
            <form>
                <input type="text" placeholder='Cherchez...' onChange={(e) => setSearch(e.target.value)}/>
            </form>
          {data.filter((val) => {

              const { nom } = val;

              if(search === '') {
                  return val;
              }else if(nom.toLowerCase().includes(search.toLocaleLowerCase())) {
                return val;
              }

          }).map((c) => {
              const { id, nom, image, totalVic, totalDef, koVic, koDef, pays, naissance, taille, categorie } = c;
              return(
                <div className="mma_card" key={id}>
                        <h3>{nom}</h3>
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
                </div>
              )
          })}  
        </div>
    )
}

export default MmaCard
