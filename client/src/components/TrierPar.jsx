const TrierPar = () => {
    return (
        <div className='trie_par'>
            <h3>Trié par :</h3>
            <div className="conteneur_du_trie">
                <div className="trie">
                    <p>Catégories</p>
                    <form>
                        <select name="categories" id="categories">
                            <option value="">--Choisissez votre catégories--</option>
                            <option value="poids-mouches">Poids Mouches</option>
                            <option value="poids-coqs">Poids Coqs</option>
                            <option value="poids-plumes">Poids Plumes</option>
                            <option value="poids-leger">Poids Léger</option>
                            <option value="poids-mi-moyen">Poids Mi-Moyen</option>
                            <option value="poids-moyen">Poids Moyen</option>
                            <option value="poids-mi-lourd">Poids Mi-Lourd</option>
                            <option value="poids-lourd">Poids Lourd</option>
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
                    <p>Stats</p>
                    <form>
                        <select name="popularite" id="popularite">
                            <option value="">--Stats--</option>
                            <option value="plus_vic">+ de Victoire</option>
                            <option value="moins_def">- de Défaite</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TrierPar
