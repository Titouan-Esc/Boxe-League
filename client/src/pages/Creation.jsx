import { Link } from 'react-router-dom';

const Creation = () => {
    return (
        <main className='creation_personnage'>
            <div className="creation_top">
                <Link to='/champions'><img src="./logo/arrow.png" alt="Retour en arrière"className="return"/></Link>
                <h1>Création du Personnage</h1>
            </div>
            <form className='form_personnage'>
                
            </form>
        </main>
    )
}

export default Creation
