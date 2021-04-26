const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.model');

// ? Enregistrer un admin
router.post('/register', async (req,res) => {
    // * Créer un salage pour le password
    const sal = await bcrypt.genSalt();

    // * Hash le password avec le salage
    const hashedPassword = await bcrypt.hash(req.body.password, sal);

    // * Créer une instance de notre model Admin
    const admin = new Admin({
        username : req.body.username,
        email : req.body.email,
        password : hashedPassword
    });

    // * Sauvegarder l'instance de notre Admin
    const result = await admin.save();

    // * Fonction de décomposition pour retire le mot de passe
    const {password, ...data} = await result.toJSON();

    res.send(data);
})


// ? Connection pour un admin déjà enregistré
router.post('/login', async (req,res) => {
    // * Vérifier l'adresse de l'admin
    const admin = await Admin.findOne({email: req.body.email});

    // * Créer une condition pour envoyer une erreur si l'adresse mail n'est pas la bonne
    if(!admin){
        return res.status(404).send({
            message : 'Mauvais Admin'
        });
    }

    // * Vérifier si le password est valide
    if(!await bcrypt.compare(req.body.password, admin.password)) {
        return res.status(404).send({
            message : "Mauvais mot de passe"
        });
    }

    // * Création d'un token de session pour l'admi
    const token = jwt.sign({_id: admin._id}, 'secret');

    // * Conserver le token dans un cookie
    res.cookie('admin', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // TODO 24h en milliseconde
    });

    res.send({
        message : 'Vous êtes bien connecté'
    });
})

// ? Récupérer les infos de l'admin authentifié
router.get('/', async (req,res) => {
    try {
        // * Récupérer le cookie dans l'ordinateur
        const cookie = req.cookies['admin'];

        // * Vérifier le cookie avec la méthode de jwt
        const claims = await jwt.verify(cookie, 'secret');

        // * Condition si le cookie n'est pas valide
        if(!claims) {
            return res.status(401).send({
                message : "Pas d'authentification"
            });
        }

        // * Créer un admin avec l'id de claims
        const admin = await Admin.findOne({_id : claims._id});

        // * Utiliser la fonction de décomposition pour enlever le password
        const {password, ...data} = await admin.toJSON();

        res.send(data);
    } catch (error) {
        return res.status(401).send({
            message : "Pas d'authentification"
        })
    }
})

// ? Mettre fin au cookie donc la déconnection de l'admin
router.post('/logout', async (req,res) => {
    res.cookie('admin', '', {maxAge : 0});

    res.send({
        message : 'Vous êtes bien déconnecté'
    })
})

module.exports = router;