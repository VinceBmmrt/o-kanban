BEGIN; 

-- Toujours commencer par détruire une table "si elle existe" avant de tenter de la créer. Cela permet d'executer le fichier sans se soucier des runs précédents.
DROP TABLE IF EXISTS "list", "card", "tag", "card_has_tag";

-- on re-crée les tables comme on le souhaite (comme pré dans le MLD)
-- list(**id**, name, position, created_at, updated_at)
CREATE TABLE "list" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "position" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    -- TIMESTAMPTZ : type avec date + heure + tz (la timezone = le fuseau horaire) 
    -- NOW() : une fonction qui donne le jour et l'heure "maintenant" (donc au moment où ue nouvelle ligne est insérée dans la table)
    "updated_at" TIMESTAMPTZ -- pas de virgune sur la dernière ligne
);

-- card(**id**, title, color, position, #list(id), created_at, updated_at)
CREATE TABLE "card" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#FFF',
    "position" INTEGER NOT NULL DEFAULT 0,
    "list_id" INTEGER NOT NULL REFERENCES "list"("id") ON DELETE CASCADE,
    -- ici on fait référence à la liste parente qui contient cette carte
    -- ON DELETE CASCADE =  si on supprime une liste, ça supprime aussi toutes les cartes qui sont dans cette liste
    -- pas besoin de supprimer toutes les cartes d'une liste avant de pouvoir supprimer la liste elle même.
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- tag(**id**, name, color, created_at, updated_at)
CREATE TABLE "tag" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL, -- on ne précise pas de dault, pour forcer l'utilisateur à choisir un nom pour le label qu'il crée
    "color" TEXT NOT NULL DEFAULT '#FFF',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- card_has_tag(#card(id), #tag(id), updated_at)
CREATE TABLE "card_has_tag" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "card_id" INTEGER NOT NULL REFERENCES "card"("id") ON DELETE CASCADE,
    "tag_id" INTEGER NOT NULL REFERENCES "tag"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
    -- ici pas d'updated_at : une relation ne se metspas à jour : soit on l'ajoute, soit on la supprime.
);

COMMIT;