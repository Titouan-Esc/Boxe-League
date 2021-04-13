import TrierPar from "../components/TrierPar";
import NavBar from "../components/NavBar";
import { UserContext } from '../User.Context';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';



const HomePage = () => {

    const {user, setUser} = useContext(UserContext);

    const logout = async () => {
        await fetch('http://localhost:8000/api/user/logout' , {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            credentials : 'include'
        })

        setUser(null);
    }


    let link;

    if(!user) {
        link = (
            <Link to='/connect'><button className='btn-login'>Se connecter</button></Link>
        )
    }else {
        link = (
            <button className='logout' onClick={logout}>Se déconnecter</button>
        )
    }

    return (
        <main>
            <NavBar/>
            <div className="top">
                <h1>Boxe League</h1>
                <p>
                    La solution pour se renseigner sur vos combattants préférer tout en
                    prenant part à la création de boxeurs et de les faire combattre entre eux 
                </p>
                <div className="user">
                    {user ? (<h3 className='bienvenue'>Bienvenue à toi {user.username}</h3>) : (<h3>Pour plus de combats veuillez vous connecter</h3>)}
                    {link}
                </div>
            </div>
            <div className="bandeau">
                <h2>Champions</h2>
            </div>
            <TrierPar/>
            <div className="champions">
                
            </div>
        </main>
    )
}

export default HomePage
