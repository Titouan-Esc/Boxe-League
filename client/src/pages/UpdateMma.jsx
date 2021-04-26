import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect, useParams } from 'react-router-dom';

const UpdateMma = () => {

    // ? Inisialisation des states
    const [submit, setSubmit] = useState(false);
    const [mma, setMma] = useState({
        name : '',
        pays : '',
        naissance : '',
        taille : '',
        categorie : '',
        totalVic : '',
        koVic : '',
        totalDef : '',
        koDef : ''
    });
    const [redirect, setRedirect] = useState(false);

    // ? Utilisation de useParams pour récupérer l'id de la carte qui est dans l'url
    let { id } = useParams();
    console.log(id);

    // ? Fonction pour update la carte
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/mma/${id}`, mma)
        .then(res => {
            console.log(res.data);
            console.log("ok");
        })
        .catch(err => {
            console.log(err);
        });

        setSubmit(true);

        console.log(mma);

        setRedirect(true);
    }

    // ? Fonction pour récupérer les données d'une seule carte pour la mettre dans le formulaire
    async function fetchMma() {
        try {
            const result = await axios.get(`http://localhost:8000/api/mma/${id}`, mma);
            console.log(result.data);
            setMma(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    // ? useEffect pour le lancement de ma fonction fetchMma()
    useEffect(() => {
        fetchMma();
    },[submit]);

    // ? Function pour le e.target.value
    const handleChange = (e) => {
        setMma({...mma, [e.target.name]: e.target.value});
    }

    // ? Redirection vers la HomePage
    if(redirect) {
        return <Redirect to='/'/>
    }
    return (
        <main className='update_mma'>
            <form className='form_update_mma' onSubmit={handleSubmit}>
                <div className="contenen_update_mma">

                    <label htmlFor="name">Nom :</label>
                    <input type="text" name='name' value={mma.name} onChange={handleChange}/>

                    <label htmlFor="pays">Pays :</label>
                    <input type="text" name='pays' value={mma.pays} onChange={handleChange}/>

                    <label htmlFor="naissance">Date de naissance :</label>
                    <input type="text" name='naissance' value={mma.naissance} onChange={handleChange}/>

                    <label htmlFor="taille">Taille :</label>
                    <input type="text" name='taille' value={mma.taille} onChange={handleChange}/>

                    <label htmlFor="categorie">Catégorie :</label>
                    <input type="text" name='categorie' value={mma.categorie} onChange={handleChange}/>
                </div>
                <div className="contenen_update_mma">

                    <label htmlFor="totalVic">Total de Victoires :</label>
                    <input type="text" name='totalVic' value={mma.totalVic} onChange={handleChange}/>

                    <label htmlFor="koVic">Victoires par KO :</label>
                    <input type="text" name='koVic' value={mma.koVic} onChange={handleChange}/>

                    <label htmlFor="totalDef">Total de défaites :</label>
                    <input type="text" name='totalDef' value={mma.totalDef} onChange={handleChange}/>

                    <label htmlFor="koDef">Défaites par KO :</label>
                    <input type="text" name='koDef' value={mma.koDef} onChange={handleChange}/>
                </div>
                <button type='submit'>Modifier</button>
            </form>
        </main>
    )
}

export default UpdateMma
