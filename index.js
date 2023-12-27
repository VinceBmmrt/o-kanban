// ce fichier est le point d'entrée de mon application, donc ici on require dotenv en tout premier
// comme ça c'est fait pour toute l'application
require("dotenv").config();
const express = require('express');
const router = require('./app/router.js');
const cors = require('cors');
const bodySanitizer = require('./app/middlewares/body-sanitizer.js');

const multer  = require('multer');
const upload = multer();

const app = express();

// comme on a fait des routes en POST, on a besoin de pouvoir récupérer le body : on ajoute donc un body-parser
app.use(express.urlencoded({extended: true}));

// informer express que le contenu sera du json
app.use(express.json());

// ajout du multer pour gérer le multipart/formdata
app.use(upload.none());

// SECURITE :

// avant le routeur on configure la CORS policy
// on précise entre les parenthèses les origines des requêtes que l'on accepte
// nous on va accepter toutes les requêtes qui viennent de partout ( * = all )
app.use(cors('*'));

// on utilise le body sanitizer qui nous protège des failles XSS
app.use(bodySanitizer);

app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});