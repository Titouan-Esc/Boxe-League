import { Link } from 'react-router-dom';
import TrierPar from '../components/TrierPar';

const VosChampions = () => {
    return (
        <main className="vos_champions">
            <div className="vos_champions_top">
                <Link to='/'><img src="./logo/arrow.png" alt="Retour en arrière"className="return"/></Link>
                <img src="./logo/logo.png" alt="Logo du site"/>

                <h1>Vos champions</h1>
                <p>
                    Créer vos champions que vous désirez tant !
                    Et faite les combattre dans des tournois ou seul leurs
                    statistique compterons !
                </p>
            </div>

            <div className="bandeau">
                <h2>Votre collection</h2>
            </div>
            <TrierPar/>

            <div className="personnages">
                <Link to='/creation'><button>Création du personnage</button></Link>
            </div>
        </main>
    )
}

export default VosChampions
