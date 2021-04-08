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
                    <p>Titres</p>
                    <form>
                        <select name="titres" id="titres">
                            <option value="">--Titres--</option>
                            <option value="champion-sa-catg">Champion de sa catégorie</option>
                            <option value="champion-deux-catg">Champion deux catégories</option>
                            <option value="champion-plus-catg">Champion de plusieurs catégories</option>
                            <option value="champion-monde">Champion du Monde</option>
                        </select>
                    </form>
                </div>
                <div className="trie">
                    <p>Popularitée</p>
                    <form>
                        <select name="popularite" id="popularite">
                            <option value="">--Popularitée--</option>
                            <option value="apprecie">Apprécié</option>
                            <option value="neutre">Neutre</option>
                            <option value="haie">Haïe</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TrierPar
