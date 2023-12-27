# O'Kanban - E04 - Atelier API (suite)

(Vous avez cette aprèm et demain aprèm pour tout faire !!)

Pour chacune des tâches suivantes, créer un nouveau controller.

### Cartes

Mettre en place les routes suivantes :

- GET `/lists/:id/cards` : renvoie toutes les cartes d'une liste. Chaque carte doit porter les tags qui lui sont associés.
- GET `/cards/:id` : renvoie les détails de la carte demandée, avec les tags qui lui sont associés.
- POST `/cards` : crée une nouvelle carte (attention à bien valider les paramètres)
- PATCH `/cards/:id` : modifie une carte (ou 404)
- DELETE `/cards/:id` : supprimer ou carte (ou 404)

### Tags

Mettre en place les routes suivantes

- GET `/tags` : renvoie tous les tags
- POST `/tags` : crée un nouveau tag (attention aux paramètres)
- PATCH `/tags/:id` : modifie le tag ciblé (ou 404, ou 400, bref on commence à avoir l'habitude)
- DELETE `/tags/:id` : supprime un tag. (Pas besoin de toucher à la table de liaison, on en reparlera en cockpit!)

Les associations :

- POST `/cards/:id/tag` : associe un tag à la carte ciblée. L'id du tag doit se trouver dans les paramètres POST (sous le nom "tag_id")
- DELETE `/cards/:card_id/tag/:tag_id` : supprime l'association entre le tag et la carte.

Indice : vous trouverez ce qu'il vous faut dans cette partie de la doc : 
https://sequelize.org/docs/v6/core-concepts/assocs/#special-methodsmixins-added-to-instances


### BONUS (chaud bouillant même pour du piment)

On remarque que certaines routes sont très répétitives (List/Card/Tag).

Réfléchissez à un moyen de factoriser ces routes, afin de simplifier la vie d'un développeur qui voudrait éventuellement ajouter de nouveaux modèles avec encore une fois un Get, un POST, un PATCH, un DELETE ! 

(les 2 routes pour les associations ne sont pas factorisables)