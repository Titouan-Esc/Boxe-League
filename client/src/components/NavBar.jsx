import { Link } from 'react-router-dom';
import {UserContext} from '../User.Context';
import React, {useContext} from 'react';


const NavBar = () => {

    const {user} = useContext(UserContext);
    
    return (
        <header>
            <nav>
                {!user ? (
                    <>
                        <Link to="/champions">Champions</Link>
                        <Link to="/"><img src="./logo/logo.png" alt="Logo du site"/></Link>
                        <Link to="/connect">Se connecter</Link>
                    </>
                ) : (
                    <>
                        <Link to='/champions'>Champions</Link>
                        <Link to='/vos%20champions'>Vos Champions</Link>
                        <Link to='/combats'>Combats</Link>
                        <Link to='/'><img src="./logo/logo.png" alt="Logo du site"/></Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default NavBar
