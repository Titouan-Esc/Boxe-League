import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import { UserContext } from '../User.Context';
import { AdminContext } from '../Admin.Context';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import mma from '../Data';
import MmaCard from "../components/MmaCard";



const HomePage = () => {

    const {user, setUser} = useContext(UserContext);
    const {admin, setAdmin} = useContext(AdminContext);

    const [data, setData] = useState(mma);

    const logout = async () => {
        await fetch('http://localhost:8000/api/user/logout' , {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            credentials : 'include'
        })

        setUser(null);
    }

    const adminLogout = async () => {
        await fetch('http://localhost:8000/api/admin/logout', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            credentials : 'include'
        })

        setAdmin(null);
    }


    let linkUser;

    if(!user) {
        linkUser = (
            <Link to='/connect'><button className='btn-login'>Se connecter</button></Link>
        )
    }else{
        linkUser = (
            <button className='logout' onClick={logout}>Se déconnecter</button>
        )
    }

    let linkAdmin;

    if(admin) {
        linkAdmin = (
            <button className='logout' onClick={adminLogout}>Se déconnecter</button>
        )
    }

    return (
        <main>
            <NavBar/>
            <div className="top">
                <h1>Boxe League</h1>
                <p>
                La solution pour se renseigner sur vos combattants préférés tout en prenant part à la création de boxeurs et de les faire combattre entre eux
                </p>
                <div className="user">
                    {user ? (<h3 className='bienvenue'>Bienvenue à toi {user.username}</h3>) : (<h3>Pour plus de combats veuillez vous connecter</h3>)}
                    {linkUser}
                    {linkAdmin}
                </div>
            </div>
            <div className="bandeau">
                <h2>Champions</h2>
            </div>
                <MmaCard data={data}/>
            <Footer/>
        </main>
    )
}

export default HomePage
