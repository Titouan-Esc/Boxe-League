const router = require('express').Router();
const Cards = require('../models/cards.model');

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

router.get('/:name', async (req,res) => {
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

router.post('/', async (req,res) => {

    const card = new Cards({
        name : req.body.name,
        image : req.body.image,
        description : req.body.description,
        atk : req.body.atk,
        def : req.body.def,
    });

    try {
        const savedCard = await card.save({
            // user : User._id
        });
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
                    image : req.body.image ?? cardToUpdate.image,
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