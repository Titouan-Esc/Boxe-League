import { Link } from 'react-router-dom'


const SeConnecter = () => {
    return (
        <main>
            <img src="./logo/arrow.png" alt="Retour en arrière"/>
            <div className="conteneur">
                <img src="./logo/logo.png" alt="Logo du site"/>

                <form>
                    <label htmlFor="identifiant">Identifiant :</label>
                    <input type="text" name="identifiant" id="identifiant"/>

                    <label htmlFor="motdepasse">Mot de passe :</label>
                    <input type="text" name="motdepasse" id="motdepasse"/>

                    <Link to="/register">Se créer un compte</Link>

                    <button type="submit">Se connecter</button>
                </form>
            </div>
        </main>
    )
}

export default SeConnecter
