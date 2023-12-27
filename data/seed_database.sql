-- une fois les tables crées, on va les remplir

BEGIN;

-- insérer des données dans la table "list"
INSERT INTO "list" ("name", "position")
VALUES  ('Liste des meilleurs jeux', 0), -- id 1
        ('Mes fromages préférés', 1); -- id 2

-- insérer des données dans la table "card"
INSERT INTO "card" ("title", "color", "position", "list_id")
VALUES  ('Final Fantasy', '#94D5E6', 0, 1), -- id 1
        ('Lea passion vétérinaire', '#DB7B9D', 1, 1), -- id 2
        ('Maroil', '#F2BB7C', 0, 2), -- id 3
        ('Babybel', '#DC6C6C', 1, 2); -- id 4

-- insérer des données dans la table "tag"
INSERT INTO "tag" ("name", "color")
VALUES  ('A acheter', '#F3E3AF'), -- id 1
        ('Beurk', '#D4EACF'); -- id 2

-- on n'oublie par la table de liaison : card_has_tag
INSERT INTO "card_has_tag" ("card_id", "tag_id")
VALUES  (2, 1), -- on associe le tag d'id 1 (à acheter) sur la carte d'id 2 (lea passion)
        (3, 2); -- tag d'id 2 sur la carte d'id 3

COMMIT;