import { Link } from 'react-router-dom';

const VosChampions = () => {
    return (
        <main className="vos_champions">
            <div className="vos_champions_top">
                <div className="top_top">
                    <Link to='/'><img src="./logo/arrow.png" alt="Retour en arrière" className="return"/></Link>
                    <img src="./logo/logo.png" alt="Logo du site"/>
                </div>

                <div className="top_text">
                    <h1>Vos champions</h1>
                    <p>
                        Créer vos champions que vous désirez tant !
                        Et faite les combattre dans des tournois ou seul leurs
                        statistique compterons !
                    </p>
                </div>
            </div>

            <div className="bandeau">
                <h2>Votre collection</h2>
            </div>
            <div className='trie_par'>
            <h3>Trié par :</h3>
            <div className="conteneur_du_trie">
                <div className="trie">
                    <p>Forces</p>
                    <form>
                        <select name="forces" id="forces">
                            <option value="plus_atk">+ ATK</option>
                            <option value="moins_atk">- ATK</option>
                            <option value="plus_def">+ DEF</option>
                            <option value="moins_def">- DEF</option>
                        </select>
                    </form>
                </div>
                <div className="trie">
                    <p>Nom</p>
                    <form>
                        <input type="search"/>
                    </form>
                </div>
                <div className="trie">
                    <p>Filtres</p>
                    <form>
                        <select name="filtres" id="filtres">
                            <option value="ajout-recent">Ajout récent</option>
                            <option value="dernier_ajout">Dernier ajout</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>

            <div className="personnages">
                <Link to='/creation'><button>Création du personnage</button></Link>
            </div>
        </main>
    )
}

export default VosChampions
