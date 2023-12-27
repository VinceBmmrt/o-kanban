const Card = require('./card.js');
const List = require('./list.js');
const Tag = require('./tag.js');

// ici on définit les associations

// relation entre les listes et les cartes
// relation 1/N (si on regarde les max)
List.hasMany(Card, {
    as: 'cards', // aveec un "s" puisqu'on est dansle hasMany = les cartes d'une liste
    foreignKey: 'list_id'
});
Card.belongsTo(List, {
    as: 'list', // LA liste d'une carte (singulier)
    foreignKey: 'list_id'
});

// relation entre les cartes et les tags
// si on regarde les max sur le MCD on a une relation : N/N
Card.belongsToMany(Tag, {
    as: 'tags', // LES tags d'une carte (pluriel)
    through: 'card_has_tag', // la table de liaison qui relie les cartes et les tags
    foreignKey: 'card_id',
    otherKey: 'tag_id',
    updatedAt: false
});
Tag.belongsToMany(Card, {
    as: 'cards', // LES cartes d'un tag (pluriel)
    through: 'card_has_tag', // la table de liaison qui relie les cartes et les tags
    foreignKey: 'tag_id',
    otherKey: 'card_id',
    updatedAt: false
});

module.exports = { Card, List, Tag };