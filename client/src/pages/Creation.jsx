import { Link } from 'react-router-dom';

const Creation = () => {
    return (
        <main className='creation_personnage'>
            <div className="creation_top">
                <Link to='/champions'><img src="./logo/arrow.png" alt="Retour en arrière"className="return"/></Link>
                <h1>Création du Personnage</h1>
            </div>
            <div className="conteneur_form">
                <form className='form_personnage'>
                    <div className="form_gauche">
                        <div className="creation_ligne">
                            <label htmlFor="">Nom :</label>
                            <input type="text" name='name'/>
                        </div>

                        <div className="creation_ligne">
                            <label htmlFor="atk">ATK :</label>
                            <input type="number" name="atk" min="0" max="999"/>
                        </div>

                        <div className="creation_ligne">
                            <label htmlFor="def">DEF :</label>
                            <input type="number" name="def" min="0" max="999"/>
                        </div>

                        <div className="creation_ligne">
                            <label htmlFor="desc">Descirption :</label>
                            <textarea name="desc" cols="30" rows="10"></textarea>
                        </div>
                    </div>

                    <div className="form_droite">
                        <label htmlFor="image">Image du champion :</label>
                        <input type="file" name="image" accept="image/png, image/jpeg"/>
                        <button type="submit">Créer Personnage</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Creation
