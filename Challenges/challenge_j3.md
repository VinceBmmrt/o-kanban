# O'Kanban - E03 - Atelier API

### Architecture

Mettre en place l'architecture "classique" d'une projet `Express` :

- installer les dépendances nécessaires avec npm.
- point d'entrée `index.js`.
- dossier `app/controllers`.
- fichier `app/router.js`.

### Le Train-train Express

Mettre en place le fichier `index.js`. Oui c'est vrai, c'est un peu toujours la même chose...

Note: pensez qu'on va faire des routes POST ! (donc avec des body ...)

### Premiers controller, premières routes

En respectant au maximum les principes de l'architecture REST, et le tableau de routes fait ensemble (DOCS/routes_REST.md), implémentez tout ce que vous pouvez !

Indice : Donc dans les Controllers :
- au lieu de faire `res.render` pour envoyer les données à la vue comme on faisait avant,
- maintenant on va faire : `res.json`, et renvoyer un objet JSON !
[Doc](http://expressjs.com/en/api.html#res.json)

- Vous pouvez commencer par les routes `/list`
- Ou bien vous pouvez faire d'abbord toutes les routes `/GET`, puis les `POST`, les `PATCH` et enfin les `DELETE`

### On teste nos routes 

Pour tester toutes ces routes, il existe plusieurs solutions :

- [Insomnia](https://support.insomnia.rest/article/23-installation#ubuntu)
- [POSTMAN](https://www.getpostman.com/)
- [VSCode extention: REST client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- N'oubliez pas que les routes GET sont facilement testables depuis n'importe quel navigateur en tapant simplement la route dans la barre d'URL 😉

