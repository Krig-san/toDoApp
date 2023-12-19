# TODO APP

## recap github

### INIT (création)

- `git init` => crée un repository(dossier git) git en local

### COMMIT (ajout et envoie)

- `git add .` => ajoute tous les changements locaux à git
- `git add -p`` => ajoute les changements un par un (attention, n'ajoute pas les fichiers/dossiers crées, il faut les ajouter à la main avec git add nomdufichier)
- `git status` => permet de vérifier les changement ajoutés et prêts à être commit
- `git commit -m "feat: blabla"` => commit les changement (les changement prêts à être envoyés dans le cloud)
- ` git push`` => envoie les changement sur la branche vers la branche du repository qui est dans le cloud ( `git push -f`` pour forcer un push)

### LOG (vérifications, infos)

- `git log` => permet de lister les derniers commits du repository

### REBASE (mise à jour avec la version du cloud)

- `git fetch` => récupère le contenu du repository dans le cloud
- `git rebase origin/nom-de-la-branche` => applique le contenu récupéré sur notre branche locale
- `git fetch && git rebase origin/master` (master ou nom de la branche)
- `git pull --rebase origin master` (autre version de git fetch && git rebase origin/master)

### CONFLICT

- si conflit (versions différentes entre celle du cloud et locale)
- copier/coller le nom du fichier sur lequel il y a un conflit
- valider la version du cloud ou locale (current = version du cloud, en vert VS incoming = ta version, en bleu) en cliquant sur l'option de son choix (au-dessus des zones vertes ou bleues)
- `git add nomdufichier`
- une fois tous les fichiers "rebased" => `git rebase --continue`
- il est possible d'avoir plusieurs rebase à la suite. Il y a un rebase par commit de retard.

- si on est dans un editeur de texte bizarre (VIM) faire :wq pour en sortir

### STASH

- `git stash` => ajoute tous les changements dans une "planque" (en général on fait git add . && git stash)
- `git stash` apply => applique les changements de la planque sur la branche, et garde en mémoire les changements dans la planque
- `git stash drop` => efface la planque
- `git stash pop` => comme git stash apply MAIS efface la planque après

### BRANCHES

- `git checkout -b name-of-branch` => crée une nouvelle branche et nous ammène dessus
- `git checkout name-of-branche` => nous emmène sur la branche désirée
- `git branch -D name-of-branch` => efface la branche souhaitée
