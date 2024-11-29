# Ma Liste Vue.js Application

Il s'agit d'une application simple avec Vue.js qui permet aux utilisateurs d'ajouter et de retirer des noms d'une liste. Elle comprend un formulaire avec des champs pour entrer un prénom et un nom de famille, et la liste est mise à jour dynamiquement en fonction des entrées.

## Fonctionnalités

- **Ajouter des noms** : Les utilisateurs peuvent ajouter un prénom et un nom de famille à une liste.
- **Retirer des noms** : Les utilisateurs peuvent retirer le dernier nom ajouté à la liste.
- **Gestion des erreurs** : Affichage des messages d'erreur si l'utilisateur n'a pas rempli les deux champs (prénom et nom de famille).
- **Basculer la visibilité** : Le formulaire peut être caché ou affiché en cliquant sur le titre.

## Structure du projet

Le projet est composé de trois fichiers principaux :

- **index.html** : Le fichier HTML qui contient la structure du formulaire et de la liste.
- **config.js** : Le fichier JavaScript où l'application Vue est initialisée et les méthodes sont définies.
- **styles.css** : Le fichier CSS qui définit le style de l'application.

### 1. `index.html`
Le fichier HTML contient la mise en page de l'application et lie les fonctionnalités de Vue.js, telles que la liaison des données avec `v-model` et la gestion des événements avec `@click`.

### 2. `config.js`
Ce fichier JavaScript contient l'instance Vue avec les propriétés de données, les méthodes pour ajouter/retirer des noms et la logique pour basculer la visibilité du formulaire.

### 3. `styles.css`
Le fichier CSS pour styliser l'application avec une interface moderne et épurée, y compris les éléments du formulaire, les boutons et le style des messages d'erreur.
