const MmaCard = ({ data }) => {
    return (
        <>
          {data.map((c) => {
              const { id, nom, image, totalVic, totalDef, koVic, koDef } = c;
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
                    <button className='show_more'>Voir plus</button>
                  </div>
              )
          })}  
        </>
    )
}

export default MmaCard
