const express = require('express');
const router = express.Router();
const card = require("../model/cardModel");


router.post('/cards', async (req, res) => {
  try {
      const { title, description } = req.body;

   
      const existingCard = await card.findOne({ title });
      if (existingCard) {
          return res.status(400).json({ message: 'this title already exists.' });
      }

      const newCard = new card({ title, description });
      const addCard = await newCard.save();
      console.log(addCard);
      res.status(201).json(addCard);
  } catch (error) {
      console.log("error :- ", error);
      res.status(400).json({ message: error.message });
  }
});
  

  router.get('/cards', async (req, res) => {
    try {
      const getCard = await card.find();
      res.json(getCard);
    } catch (error) {
        console.log("error :- ", error)
        res.status(500).json({ message: error.message });
    }
});


router.get('/cards/:title', async (req, res) => {
    try {
        const getCard = await card.findOne({ title: req.params.title });
        if (!getCard) {
            return res.status(404).json({ message: 'Card not found' });
        }
        res.json(getCard);
    } catch (error) {
        console.log("error :- ", error)
      res.status(500).json({ message: error.message });
    }
  });
  
  module.exports = router;
  