import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import { UserContext } from '../User.Context';
import { AdminContext } from '../Admin.Context';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MmaCard from "../components/MmaCard";
import axios from "axios";



const HomePage = () => {

    //  ? Inisialisation des stats de nos contexte
    const {user, setUser} = useContext(UserContext);
    const {admin, setAdmin} = useContext(AdminContext);

    // ? Inisialisation du stats de notre data
    const [mma, setMma] = useState([]);
    const [opCount, setOpCount] = useState(0);

    // ? Fonction asynchrone pour le logout de l'utilisateur
    const logout = async () => {
        await fetch('http://localhost:8000/api/user/logout' , {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            credentials : 'include'
        })

        setUser(null);
    }

    // ? Fonction asynchrone pour le logout de l'admin
    const adminLogout = async () => {
        await fetch('http://localhost:8000/api/admin/logout', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            credentials : 'include'
        })

        setAdmin(null);
    }

    // ? Fonction asynchrone pour renvoyer les données des champions de mma
    async function fetchMma() {
        try {
            const res = await axios.get('http://localhost:8000/api/mma');
            console.log(res.data);
            setMma(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const addCount = () => {
        setOpCount(opCount+1);
    }

    // ? Utilisation d'un useEffect pour que notre fonction puisse se lancer à chaque effet
    useEffect(() => {
        fetchMma();
    }, [opCount])

    // ? Condition de l'user pour renvoyer le bouton en fonction de si il est connecté ou non
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

    // ? Condition pour renvoyer le bouton logout si l'administrateur est connecté
    let linkAdmin;

    if(admin) {
        linkAdmin = (
            <button className='logout' onClick={adminLogout}>Se déconnecter</button>
        )
    }

    // ? Condition que si l'admin est connecté alors envoyer un bouton qui puisse créer de nouveaux champion
    let buttonAdmin;

    if(admin) {
        buttonAdmin = (
            <Link to='/create-mma'><button className='create-mma'>Création</button></Link>
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
                {buttonAdmin}
                <MmaCard mma={mma} addCount={addCount}/>
            <Footer/>
        </main>
    )
}

export default HomePage
