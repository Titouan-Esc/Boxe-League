import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import React, { useContext, useState } from 'react';
// ? importation de mon admin context
import { AdminContext } from '../Admin.Context';


const Admin = () => {
    // ? Utilisation de mon useContext pour on AdminContext
    const {admin, setAdmin} = useContext(AdminContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/admin/login', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            credentials : 'include',
            body : JSON.stringify({
                email,
                password
            })
        });

        const response = await fetch('http://localhost:8000/api/admin', {
            headers : {'Content-Type' : 'application/json'},
            credentials : 'include'
        });


        const content = await response.json();

        if(content._id){
            setAdmin(content);
        }

        setRedirect(true);
    }

    if(admin) {
        return <Redirect to='/'/>;
    }

    if(redirect) {
        return <Redirect to='/'/>;
    }
    
    return (
        <main className='admin_connect'>
            <Link to='/'><img src="./logo/arrow.png" alt="Retour en arrière" className="return"/></Link>
            <div className="conteneur">
                <img src="./logo/logo.png" alt="Logo du site"/>

                <form className='form_connect' onSubmit={submit}>
                    <div className="form">
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
                        <Link to="/admin-register">Créer un admin</Link>

                        <button type='submit'>Se connecter</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Admin
