# Securité

## injections SQL

L'injection SQL consiste à faire passer des requêtes SQL via la requête (body, params, query) pour interroger la base de donnée à des fins frauduleuses.

Sequelize nous protège nativement contre les injections.

## CORS

[CORS](https://fr.wikipedia.org/wiki/Cross-origin_resource_sharing) nous permet de protéger l'accès à notre API.

Par defaut l'url d'origine de l'API (domaine) est la qeule porte d'entrée.

Il est possible d'ouvrir cette porte à tout le monde (*) ou à un groupe d'origines (nom de domaine ou sous domaine) via le module [cors](https://www.npmjs.com/package/cors)

## XSS

Le [XSS](https://fr.wikipedia.org/wiki/Cross-site_scripting) représente l'action d'injecter via notre API du code HTML, JavaScript dans notre base de donne.

Exemple de méfaits : vol de cookies, téléchargement de script, redirect sur un autre site, afficher un drapeau pirate !!

Premier reflexe : côté front : `innerHTML` est a proscrire ! à la place on utilise `textContent`.

Pour prévenir toutes tentative (via le body, les params ou la query)on va utilser le module [sanitizer](https://www.npmjs.com/package/sanitizer)

Ce module va transformer les caractères qui peuvent poser problème. Ainsi le navigateur ne tentatera pas d'interpréter le code envoyé.


Avant :
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pirate_Flag_of_Jack_Rackham.svg/744px-Pirate_Flag_of_Jack_Rackham.svg.png">

Apres :
&lt;img src=&#34;https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pirate_Flag_of_Jack_Rackham.svg/744px-Pirate_Flag_of_Jack_Rackham.svg.png&#34;&gt;

Démo : Voir les fichiers [intro.html]('./intro.html) et [intro.js]('./intro.js) 

## HTTPS : 

Après les scandales de Snowden et Lustre, il est impératif de chiffrer les communications entre le serveur et le navigateur.

Pour cela on utilise HTTPS (à la place de HTP)

## Sécurité côté front ou back ?

les mesures de sécurité doivent être prises si possible des 2 côtés, mais à choisir il vaut mieux sécuriser le back dans tous les cas !

Les contoles côté front dans les formulaires servent surtout à indiquer précisément à l'utilisateu où il fait des erreurs.

## CSRF 

Démo : Voir le fichier [csrf.html]('./csrf.html)

Fiche recap : https://kourou.oclock.io/ressources/fiche-recap/cross-site-request-forgery-csrf/

## Pour aller plus loin :

Fiches recap : https://kourou.oclock.io/ressources/fiche-recap/securite/
