# REST API

https://fr.wikipedia.org/wiki/Representational_state_transfer => page Wikipedia.

Une API est dite RESTful si elle respecte les contraintes du style d'architecture REST (Representational State Transfer)

REST est un ensemble de contraintes architecturales. 
Il ne s'agit ni d'un protocole, ni d'une norme. 
Les développeurs d'API peuvent mettre en œuvre REST de nombreuses manières.

Une API RESTful est caractérisée par un certain nombre de critères, qui de toute façon sont rarement tous appliqués !!

Ce qu'il faut comprendre surtout c'est que : 

- REST est une architecture qui tire partie des possibilités du protocole HTTP.
- C'est une ensemble de communications via le protocole HTTP, en JSON (ou autre, mais le + souvent JSON, car, contrairement à ce que son nom indique, il ne dépend pas d'un langage et peut être lu aussi bien par les humains que par les machines)
- c'est une architecture "resource-oriented", et une ressource est représenté par une url. Ex : `/users`
- un "endpoint" est la combinaison d'un VERBE et d'une URL Ex: `GET: /users`.
  
=> Pour l'instant vos conaissez 2 VERBES : `GET` et `POST`, il en existe d'autres, mais on ne va pas tous es utiliser, nous on fait du CRUD:
Create = POST
Read = GET
Update = PATCH
Delete = DELETE
=> Donc sur une même route, avec nos 4 VERBES on va pouvoir manipuler toutes nos entités.


## Bonnes pratiques :


### 1/ Accorder une grande importance à la cohérence des URL choisies :

Par exemple : décider si on emploit des nom au singulier ou au pluriel, et s'y tenir :

Mon avis perso serait le suivant :

Ceci est ok : `GET /user/2` = on veut récupérer les infos de l'user d'id 2.

Mais qu'en est-il alors de `GET /user` ? On récupère le seul et unique utilisateur de la BDD ? ou tous les users ?

Pour éviter toute ambiguité, on peut choisir d'utiliser toujours le pluriel :
`GET /users/:userId` = récupérer un user d'id donné
`GET /users` = récupérer tout les users de la base

=> Chaque entreprise mets en place ses propres règles et tente de s'y tenir afin de créer des API cohérentes.


### 2/ Eviter d'utiliser des verbes dans les URL :

Le verbe HTTP devrait être suffisant pour décrire l'action executée sur les ressources.

Exemple :

NE PAS FAIRE : `POST /users/createNewUser`
FAIRE : `POST /users`


### 3/ Utiliser les querystrings :

Globalement, il est recomandé de s'interroger sur le "design" des url de nos API afin qu'elles soient les plus claires et cohérentes possibles.


Par exemple :
On veut un endpoint pour récupérer la liste des articles écrits par un auteur en particulier, celui d'id 12

NE PAS FAIRE : `GET /authors/12/articles`
FAIRE : `GET /articles?author_id=12`

Pourquoi ??
Parceque dans le premier cas, le type de resource que l'on demande n'est pas clair (on va récupérer un auteur, ou un article ?)
Alors que le second signifie clairement : récupérer tous les articles, de l'auteur d'id 12



On utilise aussi les querystrings pour filtrer et/ou pagniner les résultats :

Par exemple :
On veut un endpoint pour récupérer la liste des utilisateurs dont le profil est validé

NE PAS FAIRE : `GET /users/validated`
FAIRE : `GET /users?validated=true`

Pourquoi ??
Ici c'est encore une question de"design" d'API : "validated" n'est pas une ressource, c'est une caratéristique des données que l'on va récupérer.
Ici on va récupérer une liste de "users", donc on garde notre `/users` et on ajoute une querystring pour préciser notre requete, et ajouter un filtre.

