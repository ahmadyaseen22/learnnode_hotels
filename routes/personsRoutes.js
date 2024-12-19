const express = require ('express');
const router = express.Router();
const Person = require('../models/person');


router.post('/', async (req, res) => {
    try {
      const data = req.body; // Extract data from the request body
  
      // Create a new instance of the Person model
      const newPerson = new Person(data);
  
      // Save the new person to the database
      const savedPerson = await newPerson.save();
      console.log('Data Saved', savedPerson);
  
      // Send a successful response with the saved data
      res.status(200).json(savedPerson);
  
    } catch (err) {
      console.error(err);
  
      // Handle the error response
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const data = await Person.find();
      console.log('Data Fetched')
      res.status(200).json(data);
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })


  router.get ('/:workType', async (req,res) =>{
    try{
      const workType = req.params.workType;
      if(workType == 'chef' || workType ==  'manager' || workType || 'waiter'){
        
  
  const response = await Person.find({work : workType});
  console.log('response fetched');
  res.status(200).json(response);
  
  
  
      }else{
        res.status(404).json({error: 'invalid work type'}); 
      }
    }catch(err){
      console.error(err);
  
      // Handle the error response
      res.status(500).json({ error: "Internal server error" });
    }
  })

  router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        });

        if (!response) {
            return res.status(404).json({ error: 'Person Not Found' });
        }

        console.log('Data Updated');
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

  
  module.exports = router;