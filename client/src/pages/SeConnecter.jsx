import { Link } from 'react-router-dom'


const SeConnecter = () => {
    return (
        <main className='connect'>
            <Link to='/'><img src="./logo/arrow.png" alt="Retour en arrière"className="return"/></Link>
            <div className="conteneur">
                <img src="./logo/logo.png" alt="Logo du site"/>

                <form className='form_connect'>
                    <div className="form">
                        <div className="input">
                            <label htmlFor="identifiant">Identifiant :</label>
                            <input type="text" name="identifiant" id="identifiant"/>
                        </div>

                        <div className="input">
                            <label htmlFor="motdepasse">Mot de passe :</label>
                            <input type="text" name="motdepasse" id="motdepasse"/>
                        </div>
                    </div>
                    <div className="liens">
                        <Link to="/register">Se créer un compte</Link>

                        <button type="submit">Se connecter</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default SeConnecter
