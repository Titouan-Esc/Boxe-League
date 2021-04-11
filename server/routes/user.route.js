const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// ? Enregistrement d'un utilisateur
router.post('/register', async (req,res) => {
    // * Créer du salage pour le password
    const sal = await bcrypt.genSalt();
    // * Hash le password avec le salage
    const hashedPassword = await bcrypt.hash(req.body.password, sal);

    // * Créer une instance de User avec les données suivantes plus le password Hashé
    const user = new User({
        username : req.body.username,
        email : req.body.email,
        password : hashedPassword
    });

    // * Sauvegarde l'instance de User
    const result = await user.save();

    // * Utilise la fonction de decomposition pour retirer le password
    const {password, ...data} = await result.toJSON();

    res.send(data);
})

// ? La connexion d'un utilisateur déjà enregistré
router.post('/login', async (req,res) => {
    // * Vérifie l'adresse de l'user
    const user = await User.findOne({email: req.body.email});

    // * Créer une condition que si il n'y a pas d'user renvoyer une erreur 404
    if(!user) {
        return res.status(404).send({
            message : 'Aucun utilisateur trouvé'
        });
    }

    // * Vérifier que le password est valide
    if(!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(404).send({
            message : "Le mot de passe n'est pas valide"
        });
    }

    // * Créer un token de session pour l'utilisateur
    const token = jwt.sign({_id: user._id}, 'secret');

    // * Conserver le token dans un cookie
    res.cookie('user', token, {
        httpOnly : true,
        maxAge : 24 * 60 * 60 * 1000 // TODO Ce qui est équivaut à une journée
    });

    res.send({
        message : 'Vous êtes bien connecté'
    });
})

// ? Sert de page qui récupère les infos de l'utilisateur authentifié
router.get('/', async (req,res) => {
    try {
        // * Récupère le cookie sur la machine
        const cookie = req.cookies['user'];

        // * Vérifie le cookie avec la méthods de jwt
        const claims = await jwt.verify(cookie, 'secret');

        // * Si mon cookie n'est pas valide il me renvoie une erreur
        if(!claims) {
            return res.status(401).send({
                message : "Pas d'authentification"
            });
        };

        // * Créer un utilisateur avec l'id de claims
        const user = await User.findOne({_id: claims._id});

        // * Utilise la décomposition pour enlever le password dans la nouvelle variable data
        const {password, ...data} = await user.toJSON();

        res.send(data);
    } catch (error) {
        return res.status(401).send({
            message : "Pas d'authentification"
        })
    }
})

// ? Mettre fin au cookie
router.post('/logout', async (req,res) => {
    res.cookie('user', '', {maxAge : 0});

    res.send({
        message : 'Vous êtes bien déconnecté'
    })
})




module.exports = router;