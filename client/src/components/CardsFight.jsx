const CardsFight = ({ cards }) => {
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
                    <form className='check_form'>
                        <input type="radio" id='check'/>
                    </form>
                 </div>
              )
          })}  
        </>
    )
}

export default CardsFight

