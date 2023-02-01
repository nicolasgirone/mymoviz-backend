var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');


const API_KEY = 'dab965715a882803208ad391580541ce';

router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
 .then(response => response.json())
 .then(data => {
   res.json({ movies: data.results });
 });
});





















module.exports = router;