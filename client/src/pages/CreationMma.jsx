import { Link, matchPath } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const CreationMma = () => {

    const [submit, setSubmit] = useState(false);
    const [mma, setMma] = useState({
        name : '',
        image : '',
        pays : '',
        naissance : '',
        taille : '',
        categorie : '',
        totalVic : '',
        koVic : '',
        totalDef : '',
        koDef : ''
    });
    const [redirect , setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', mma.name);
        formData.append('file', mma.image);
        formData.append('pays', mma.pays);
        formData.append('naissance', mma.naissance);
        formData.append('taille', mma.taille);
        formData.append('categorie', mma.categorie);
        formData.append('totalVic', mma.totalVic);
        formData.append('koVic', mma.koVic);
        formData.append('totalDef', mma.totalDef);
        formData.append('koDef', mma.koDef);

        axios.post('http://localhost:8000/api/mma/upload', formData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

        setSubmit(true);

        console.log({mma, formData});

        setRedirect(true);
    }

    const handleChange = (e) => {
        setMma({...mma, [e.target.name]: e.target.value});
    }

    const handleImage = (e) => {
        setMma({...mma, image: e.target.files[0]});
    }

    if(redirect) {
        return <Redirect to='/'/>
    }
    return (
        <main className='creation-mma'>
            <div className="creation_mma_top">
            <Link to='/'><img src="./logo/arrow.png" alt="Retour en arrière"className="return"/></Link>
            <h1>Création Mma</h1>
            <div className="conteneur_form_mma">
                <form className='form_mma' onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className="contenen_mma_gauche">

                        <label htmlFor="name">Nom :</label>
                        <input type="text" name='name' value={mma.name} onChange={handleChange}/>

                        <label htmlFor="file">Image :</label>
                        <input type="file" name='file'accept='.png, .jpg, .jpeg' onChange={handleImage}/>

                        <label htmlFor="pays">Pays :</label>
                        <input type="text" name='pays' value={mma.pays} onChange={handleChange}/>

                        <label htmlFor="naissance">Date de naissance :</label>
                        <input type="text" name='naissance' value={mma.naissance} onChange={handleChange}/>

                        <label htmlFor="taille">Taille :</label>
                        <input type="text" name='taille' value={mma.taille} onChange={handleChange}/>
                    </div>
                    <div className="contenen_mma_droite">

                        <label htmlFor="categorie">Catégorie :</label>
                        <input type="text" name='categorie' value={mma.categorie} onChange={handleChange}/>

                        <label htmlFor="totalVic">Total de Victoires :</label>
                        <input type="text" name='totalVic' value={mma.totalVic} onChange={handleChange}/>

                        <label htmlFor="koVic">Victoires par KO :</label>
                        <input type="text" name='koVic' value={mma.koVic} onChange={handleChange}/>

                        <label htmlFor="totalDef">Total de défaites :</label>
                        <input type="text" name='totalDef' value={mma.totalDef} onChange={handleChange}/>

                        <label htmlFor="koDef">Défaites par KO</label>
                        <input type="text" name='koDef' value={mma.koDef} onChange={handleChange}/>
                    </div>

                    <button type='subrmit'>Créer</button>
                </form>
            </div>
            </div>
        </main>
    )
}

export default CreationMma
