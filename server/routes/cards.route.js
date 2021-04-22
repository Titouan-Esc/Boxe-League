const router = require('express').Router();
const Cards = require('../models/cards.model');
const multer = require('multer');
const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require("stream").pipeline);

router.get('/', async (req,res) => {
    try {
        const cards = await Cards.find();
        res.json(cards);
    } catch (error) {
        console.warn(error)
        res.send({
            message : error.message
        });
    }

});

router.get('/:id', async (req,res) => {
    try {
        const card = await Cards.findOne({ name : req.body.name });
        res.json(card);
    } catch (error) {
        console.warn(error)
        res.send({
            message : error.message
        });
    }
});















// ? Utiliser multer avec la const upload
const upload = multer();

// ! Upload de l'image avec la fonction .single()
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        
        // ? Condition pour le format des images
        if(
            req.file.detectedMimeType != 'image/jpg' &&
            req.file.detectedMimeType != 'image/png' &&
            req.file.detectedMimeType != 'image/jpeg'
        )
        throw Error("Image invalide");

        // ? Condition pour la taille de l'image
        if(req.file.size > 5000000)
        throw Error('Image trop grande');


    } catch (error) {
        return res.status(201).json({ error });
    }

    const fileName = req.file.originalName;
    console.log(req.file);
    await pipeline(
        req.file.stream,
        // ? Lien de l'image qu'on envoie vers le dossier upload côté client pour le stockage de l'image
        fs.createWriteStream(`${__dirname}/../../client/public/upload/${fileName}`)
    );

    console.log("ok");

    try {
        console.log("ok2");

        // ? Création d'une instance de Cards avec tout les données nécessaire 
        const card = new Cards({
            name : req.body.name,
            image : `./upload/${req.file.originalName}`,
            description : req.body.description,
            atk : req.body.atk,
            def : req.body.def,
        });
        await card.save();
    } catch (error) {
        return res.status(500).send({ message : error});
    }
});


router.post('/', upload.single('file'), (req,res) => {
    
    const card = new Cards({
        name : req.body.name,
        image : req.file.originalName,
        description : req.body.description,
        atk : req.body.atk,
        def : req.body.def,
    });

    try {
        const savedCard =  card.save();
        res.json(savedCard);
    } catch (error) {
        console.warn(error)
        res.send({
            message : error.message
        });
    }
});



















router.put('/:id', async (req,res) => {
    try {
        const cardToUpdate = await Cards.findById({ _id : req.params.id });
        const updatedCard = await Cards.updateOne(
            { _id : req.params.id },
            {
                $set : {
                    name : req.body.name ?? cardToUpdate.name,
                    description : req.body.description ?? cardToUpdate.description,
                    atk : req.body.atk ?? cardToUpdate.atk,
                    def : req.body.def ?? cardToUpdate.def
                },
            }
        );
        res.send(updatedCard);
    } catch (error) {
        console.warn(error)
        res.send({
            message : error.message
        });
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const deletedCard = await Cards.remove({ _id : req.params.id });
        res.json(deletedCard);
    } catch (error) {
        console.warn(error)
        res.send({
            message : error.message
        });
    }
});

module.exports = router;