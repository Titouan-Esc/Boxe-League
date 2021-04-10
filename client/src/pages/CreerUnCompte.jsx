import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';



const CreerUnCompte = () => {


    const [username, setUsername] = useState('');
    const [usersurname, setUsersurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/user/register' , {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                username,
                usersurname,
                email,
                password
            })
        });

        setRedirect(true);
    }

    if(redirect) {
        return <Redirect to='/'/>;
    }

    return (
        <main className='register'>
            <Link to='/'><img src="./logo/logo.png" alt="Logo du site"/></Link>
            <div className="conteneur_register">
                <form className='form_register'onSubmit={submit}>
                    <div className="input_register">
                        <label htmlFor="name">Nom :</label>
                        <input type="text" name="name" id="name"required value={username} onChange={e=>setUsername(e.target.value)}/>
                    </div>

                    <div className="input_register">
                        <label htmlFor="surname">Prénom :</label>
                        <input type="text" name="surname" id="surname" required value={usersurname} onChange={e=>setUsersurname(e.target.value)}/>
                    </div>

                    <div className="input_register">
                        <label htmlFor="email">Email :</label>
                        <input type="email" name="email" required value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>

                    <div className="input_register">
                        <label htmlFor="password">Mot de passe :</label>
                        <input type="password" name="password" required value={password} onChange={e=>setPassword(e.target.value)}/>
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
