# MCD

## Liste des tables dans notre BDD :

- List
- Card
- Tag 

## Les colonnes de chaque table :

- List :
  - name
  - position (on peut déplacer les listes)


- Card : 
  - title
  - color
  - position
  - (tag ?? => non, car si on fait ça on ne peut avoir qu'un seul label par carte => donc on ajoute la table tag)


- Tag :
  - name
  - color 

## Les associations entre les tables :

- list / card
    - une liste peut avoir combien de cartes (min/max) ? => 0,N
    - une carte peut appartenir à combiende listes (min/max) ? => 1,1

- card / tag
  - un tag peut être lié à combien de cartes (min/max) ? => 0,N
  - une carte peut contenir combien de tag (min/max) ? => 0,N

=> là on a une relation n/n entre card et tag (si on regarde les max) => donc on va devoir créer une `table de liaison` (elle n'apparaît pas dans le MCD, mais on l'ajoute par la suite dans le MLD)

Rappel : dans le MCD on ne mets pas les id, ni les clé étrangères, ni les tables de liaison