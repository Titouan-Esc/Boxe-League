const router = require('express').Router();
const Mma = require('../models/mma.model');
const multer = require('multer');
const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require("stream").pipeline);

// ? Requête .get pour afficher l'ensemble des champions de mma que j'ai dans ma base de donnée
router.get('/', async (req,res) => {
    try {
        const mma = await Mma.find();
        res.json(mma);
    } catch (error) {
        console.warn(error);
        res.send({
            message : error.message
        });
    }
})

// ? Utiliser multer pour l'upload de mon image
const upload = multer();

// ? Requête pour l'upload de l'image
router.post('/upload', upload.single('file'), async (req,res) => {
    try {
        // TODO Condition pour le formatage de l'image
        if(
            req.file.detectedMimeType != 'image/jpg' &&
            req.file.detectedMimeType != 'image/jpeg' &&
            req.file.detectedMimeType != 'image/png' 
        )
        throw Error('Image invalide');

        // TODO Condition pour la taille de l'image
        if(req.file.size > 5000000)
        throw Error('Image trop grande');

    } catch (error) {
        return res.status(201).json({ error });
    }

    const fileName = req.file.originalName;
    console.log(req.file);
    await pipeline(
        req.file.stream,
        // ? Lien qui va enregistrer notre image dans le dossier que nous allons spécifier
        fs.createWriteStream(`${__dirname}/../../client/public/imageMma/${fileName}`)
    );

    console.log('ok');

    try {
        console.log('ok2');

        // TODO Création d'une instance de Mma avec les données
        const mma = new Mma({
            name : req.body.name,
            image : `./imageMma/${req.file.originalName}`,
            pays : req.body.pays,
            naissance : req.body.naissance,
            taille : req.body.taille,
            categorie : req.body.categories,
            totalVic : req.body.totalVic,
            koVic : req.body.koVic,
            totalDef : req.body.totalDef,
            koDef : req.body.koDef
        });
        await mma.save();
    } catch (error) {
        return req.status(500).send({ message : error });
    }
});


// ? Requête pour la création d'une carte comportant notre reoute upload
router.post('/', upload.single('file'), (req,res) => {
    const mma = new Mma({
        name : req.body.name,
        image : req.file.originalName,
        pays : req.body.pays,
        naissance : req.body.naissance,
        taille : req.body.taille,
        categorie : req.body.categorie,
        totalVic : req.body.totalVic,
        koVic : req.body.koVic,
        totalDef : req.body.totalDef,
        koDef : req.body.koDef
    });

    try {
        const savedMma = mma.save();
        req.json(savedMma);
    } catch (error) {
        console.warn(error);
        res.send({
            message : error.message
        });
    }
});


// ? Requête pour l'update de notre carte
router.put('/:id', async (req,res) => {
    try {
        const mmaToUpdate = await Mma.findById({ _id : req.params.id });
        const updatedMma = await Mma.updateOne(
            { _id : req.params.id},
            {
                $set : {
                    name : req.body.name ?? mmaToUpdate.name,
                    pays : req.body.pays ?? mmaToUpdate.pays,
                    naissance : req.body.naissance ?? mmaToUpdate.naissance,
                    taille : req.body.taille ?? mmaToUpdate.taille,
                    categorie : req.body.categorie ?? mmaToUpdate.categorie,
                    totalVic : req.body.totalVic ?? mmaToUpdate.totalVic,
                    koVic : req.body.koVic ?? mmaToUpdate.koVic,
                    totalDef : req.body.totalDef ?? mmaToUpdate.totalDef,
                    koDef : req.body.koDef ?? mmaToUpdate.koDef
                },
            }
        );
        res.send(updatedMma);
    } catch (error) {
        console.warn(error);
        res.send({
            message : error.message
        });
    }
});


// ? Requête pour la suppression d'une carte
router.delete('/:id', async (req,res) => {
    try {
        const deletedMma = await Mma.remove({ _id : req.params.id });
        res.json(deletedMma);
    } catch (error) {
        console.warn(error);
        res.send({
            message : error.message
        });
    }
});

module.exports = router;