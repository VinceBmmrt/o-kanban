# O'Kanban - E02 - Atelier Sequelize

=> Idée générale :

- Définir la base de données
- Définir les models de données Sequelize
- Se connecter à la BDD avec Sequelize
- Et tester !


## De "concept" à "logique"

En se basant sur le MCD et en utilisant [les règles basiques de transformation en MLD](https://kourou.oclock.io/ressources/fiche-recap/mld/), créer le MLD de la base de donnée dans le fichier `DOCS/mld.md`.

Ne pas oublier de typer chaque champ de chaque table ! [Ici, la liste des types supportés par postgresl](https://www.postgresql.org/docs/9.2/datatype.html#DATATYPE-TABLE).

Vous pouvez préciser les types dirrectement dans le MLD, ou les garder pour les mettre dans le fichier `sql`.

## Pas de fondations, pas de palais

Commencer par créer un utilisateur et une base de données pour notre projet.

[La fiche récap est ici](https://kourou.oclock.io/ressources/fiche-recap/postgresql/).

## Fichier de Création des tables

Une fois les tables listées, il est temps d'écrire un fichier SQL (`data/create_tables.sql`) qui va contenir toutes les instructions pour créer ces tables!

Garder la [fiche récap SQL](https://kourou.oclock.io/ressources/fiche-recap/le-langage-sql/) sous le coude est une bonne idée :wink:

Quelques règles de base :

- Un seul fichier pour créer toutes les tables !
- Toujours commencer par détruire une table "si elle existe" avant de tenter de la créer. Cela permet d'executer le fichier sans se soucier des runs précédents.
- rangez vos instructions dans une bloc `BEGIN;` / `COMMIT;`
- On peut (on doit?) écrire des commentaires en SQL avec `--` ou `/* comme ceci */`

## Seeding

Le seeding est une opération qui consiste à insérer des données fictive dans la base de données afin de pouvoir tester son bon fonctionnement et mettre la logique de notre conception à l'épreuve du feu.

Dans un fichier `data/seed_database.sql`, écrire des instructions SQL pour insérer des données cohérentes dans toutes les tables. Ne pas oublier de remplir AUSSI les tables de liaison !!

## Run SQL, run !

Une fois le fichier complet, il est temps de l'executer. (On peut se servir du terminal, ou d'un outil graphique type DBeaver, du CLI psql (`\i`), peu importe....)

Rappel : pour executer un fichier SQL en ligne de commande : `psql -U user -f chemin/vers/fichier.sql`

## Initialiser le projet npm

- Vous connaissez la chanson 🎶
- Ajouter 3 scripts :
  - `npm run db:create` pour créer les tables dans la BDD
  - `npm run db:seed` pour insérer les enregistrements dans les tables
  - `npm run db:reset` pour faire les 2 opérations l'une après l'autre !

## Models

Maintenant que la base de données est prête et qu'elle contient des données de test, on peut créer nos modèles Sequelize.

- Installer les packages nécessaires (note: `sequelize` nécessite `pg` !)
- Créer les dossier habituels (`app` et `app/models`)
- Créer les modèles "façon Sequelize" (s'inspirer des projets précédents - OQuizz)
- Ne pas oublier les **associations** !

## Test

C'est l'heure de jouer ! 

Créer un fichier `sandbox/connect-db-tests.js`, y importer les modèles, et faire quelques requêtes pour vérifier que tout fonctionne !