const express = require('express');
const axios = require('axios');
const router = express.Router(); //crear las instancias del crud

// Endpoint para cargar datos de una API filtrado por nombre
router.get('/:name', async (req, res) => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds'); 
      const { name } = req.params; // Obtiene el nombre de la raza desde la URL
      const breeds = response.data;
      
      const breed = breeds.find(b => b.name.toLowerCase() === name.toLowerCase());
    
       // Si la raza se encuentra, envíala como respuesta
    if (breed) {
        res.json(breed);
      } else {
        res.status(404).send('Raza no encontrada');
      }

    } catch (error) {
      console.error(error);
      res.status(500).send('Error al cargar datos de la API');
    }
  });

  // Endpoint para cargar todos los datos de los gatitos 
router.get('/gatitos/todoslosgatitos', async (req, res) => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds'); 
      res.status(200).json(response.data);
      console.log(response);

    } catch (error) {
      console.error(error);
      res.status(500).send('Error al cargar datos de la API');
    }
  });

  module.exports = router; // Exporta el router