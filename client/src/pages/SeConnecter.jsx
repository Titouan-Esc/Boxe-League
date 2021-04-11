import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../User.Context';



const SeConnecter = () => {

    const {user, setUser} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/user/login', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            credentials : 'include',
            body : JSON.stringify({
                email,
                password
            })
        });

        const response = await fetch('http://localhost:8000/api/user', {
            headers : {'Content-Type' : 'application/json'},
            credentials : 'include'
        })

        const content = await response.json();

        if(content._id) {
            setUser(content);
        }

        setRedirect(true);
    }


    if(user) {
        return <Redirect to='/'/>;
    }

    if(redirect) {
        return <Redirect to='/'/>;
    }



    return (
        <main className='connect'>
            <Link to='/'><img src="./logo/arrow.png" alt="Retour en arrière"className="return"/></Link>
            <div className="conteneur">
                <img src="./logo/logo.png" alt="Logo du site"/>

                <form className='form_connect'>
                    <div className="form" onSubmit={submit}>
                        <div className="input">
                            <label htmlFor="email">Email :</label>
                            <input type="email" name="email" required value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>

                        <div className="input">
                            <label htmlFor="password">Mot de passe :</label>
                            <input type="password" name="password" required value={password} onChange={e=>setPassword(e.target.value)}/>
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
