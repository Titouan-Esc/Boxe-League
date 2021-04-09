const CreerUnCompte = () => {
    return (
        <main className='register'>
            <img src="./logo/logo.png" alt="Logo du site"/>
            <div className="conteneur_register">
                <form className='form_register'>
                    <label htmlFor="name">Nom :</label>
                    <input type="text" name="name" id="name"/>

                    <label htmlFor="surname">Prénom :</label>
                    <input type="text" name="surname" id="surname"/>

                    <label htmlFor="email">Email :</label>
                    <input type="text" name="email" id="email"/>

                    <label htmlFor="password">Mot de passe :</label>
                    <input type="text" name="password" id="password"/>

                    <label htmlFor="password-check">Confirmation du mot de passe :</label>
                    <input type="text" name="password-check" id="password-check"/>
                </form>
                <div className="register_btn">
                    <button type="submit">Création</button>
                </div>
            </div>
        </main>
    )
}

export default CreerUnCompte
