# multi-remote :

- se placer dans le dossier du projet
- on branche un second repo distant, et on l'apelle "correction" : 
`git remote add correction git@github.com:O-clock-Cheesecake/o-kanban-Flore-Oclock.git`
- pour vérifier : `git remote -v` => il doit y avoir 4 lignes (2 "origin", et 2 "correction")
- `git remote update` => pour que les 2 entrées "correction" soient bien prises en compte

## récupérer la correction :

- on se déplace sur master : `git checkout master`
- (pour vérifier : `git status` ou `git branch`)
- pour récupérer la correction : `git pull correction master`

Si on a l'erreur : `refusing to merge unrelated histories` 
=> `git pull --allow-unrelated-histories correction master`
si encore une erreur : niveau max de "forçage" (pour forcer git à prendre la version du prof :
`git reset --hard correction/master`

Autres erreurs possibles :

CAS 1 :
Si vous avez cette erreur : `error: Pulling is not possible because you have unmerged files.`
`git stash` (mettre les changements actuels de côté)

CAS 2 :
Si vous avez un conflict (message : "Automatic merge failed").
- Ouvrir le (ou les) fichier(s) pour lesquels il y a un conflict.
- Cliquez sur "accept incomming" (ou accept "current")
=> Le but est de préciser à git laquelle des deux versions accepter : on choisis celle qui "arrive" du repo correction

## Push votre code :

chaque jour, avant de commencer le challenge :
- on se déplace sur une nouvelle branche `git checkout -b j1` (créer une nouvelle branche, et s'y déplace)
- => ATTENTION : on ne code pas sur master : toujours sur une brtanche (pour éviter les conflits avec la correction)
- on code....
- comme d'hab on fait des commit (add, commit, push...) => par defaut git va push sur le repo distant `origin`, donc le votre