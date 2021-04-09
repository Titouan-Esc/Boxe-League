import { Link } from 'react-router-dom';


const CreerUnCompte = () => {
    return (
        <main className='register'>
            <Link to='/'><img src="./logo/logo.png" alt="Logo du site"/></Link>
            <div className="conteneur_register">
                <form className='form_register'>
                    <div className="input_register">
                        <label htmlFor="name">Nom :</label>
                        <input type="text" name="name" id="name"/>
                    </div>

                    <div className="input_register">
                        <label htmlFor="surname">Prénom :</label>
                        <input type="text" name="surname" id="surname"/>
                    </div>

                    <div className="input_register">
                        <label htmlFor="email">Email :</label>
                        <input type="text" name="email" id="email"/>
                    </div>

                    <div className="input_register">
                        <label htmlFor="password">Mot de passe :</label>
                        <input type="text" name="password" id="password"/>
                    </div>

                    <div className="input_register">
                        <label htmlFor="password-check">Confirmation du mot de passe :</label>
                        <input type="text" name="password-check" id="password-check"/>
                    </div>
                </form>
                <div className="register_btn">
                    <button type="submit">Création</button>
                </div>
            </div>
        </main>
    )
}

export default CreerUnCompte
