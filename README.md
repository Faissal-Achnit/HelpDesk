# 🛠️ HelpDesk — Gestion des demandes de support

Application web interactive développée pour **Atlas Solutions**, une entreprise fictive de services numériques, afin de centraliser les incidents informatiques signalés par ses collaborateurs.

Le projet est réalisé en **HTML5, CSS3 et JavaScript Vanilla**, sans backend ni base de données : toutes les données sont gérées dans le navigateur.

---

## 📌 Contexte du projet

Atlas Solutions souhaite disposer d'un outil simple permettant de **consulter, ajouter et supprimer** des demandes de support informatique. En tant que développeur web, j'ai conçu et réalisé individuellement l'application **HelpDesk**.

## 🎯 Objectifs

### Objectif général

Développer une interface web **responsive** permettant de gérer des demandes de support, tout en découvrant la manipulation du DOM, les événements et les formulaires avec JavaScript.

### Objectifs pédagogiques

- **HTML5 / CSS3** : balises sémantiques, formulaire accessible, interface responsive (Flexbox, Grid, Media Queries).
- **JavaScript** : variables, conditions, boucles, fonctions, tableaux et objets.
- **DOM** : `querySelector()`, `getElementById()`, création / modification / suppression d'éléments, mise à jour de l'affichage sans rechargement.
- **Événements et formulaires** : `addEventListener()`, `preventDefault()`, validation des saisies, messages d'erreur et de confirmation.
- **Git / GitHub / Jira** : commits réguliers, organisation en tâches et suivi de l'avancement.

---

## ✨ Fonctionnalités

### 1. Interface principale
- En-tête, formulaire, liste des demandes et compteur total.
- Page responsive (mobile, tablette, desktop).

### 2. Affichage dynamique
- Tableau JavaScript contenant au minimum **3 demandes fictives**.
- Chaque demande possède :
  - un identifiant unique ;
  - un titre ;
  - une description ;
  - une catégorie : `Matériel`, `Logiciel`, `Réseau` ;
  - une priorité : `Basse`, `Normale`, `Haute`.
- Affichage sous forme de cartes ou de liste (titre, catégorie, priorité).

### 3. Ajout d'une demande
- Formulaire avec : **titre**, **description**, **catégorie**, **priorité**.
- Tous les champs sont **obligatoires**.
- Validation JavaScript avec affichage des erreurs.
- Ajout au tableau **sans rechargement** de la page.
- Message de confirmation et **réinitialisation** du formulaire.

### 4. Suppression d'une demande
- Bouton **« Supprimer »** sur chaque demande.
- **Confirmation** demandée avant suppression.
- Mise à jour immédiate de la liste.

### 5. Compteur dynamique
- Affichage du nombre total de demandes.
- Actualisation après chaque ajout ou suppression.
- Message adapté lorsqu'aucune demande n'existe (ex. : « Aucune demande pour le moment »).

---

## 🧰 Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure sémantique de la page |
| CSS3 | Mise en forme, Flexbox, Grid, Media Queries |
| JavaScript (Vanilla) | Logique, manipulation du DOM, événements |
| Git / GitHub | Versionnement du code |
| Jira | Suivi des tâches |

---

## 📁 Structure du projet

```
helpdesk/
├── index.html      # Structure de la page
├── css/
│   └── style.css   # Styles et responsive
├── js/
│   └── script.js   # Logique de l'application
└── README.md       # Documentation du projet
```

---

## 🚀 Installation et lancement

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/<votre-utilisateur>/helpdesk.git
   ```
2. Se déplacer dans le dossier :
   ```bash
   cd helpdesk
   ```
3. Ouvrir le fichier `index.html` dans un navigateur (ou utiliser l'extension **Live Server** de VS Code).

> Aucune installation de dépendances n'est nécessaire.

---

## 🧪 Exemple de données

```js
const demandes = [
  {
    id: 1,
    titre: "Écran qui ne s'allume plus",
    description: "L'écran du poste 12 reste noir au démarrage.",
    categorie: "Matériel",
    priorite: "Haute"
  },
  {
    id: 2,
    titre: "Installation de Visual Studio Code",
    description: "Besoin de VS Code sur le poste du service développement.",
    categorie: "Logiciel",
    priorite: "Normale"
  },
  {
    id: 3,
    titre: "Wi-Fi instable au 2e étage",
    description: "Déconnexions fréquentes de la connexion Wi-Fi.",
    categorie: "Réseau",
    priorite: "Basse"
  }
];
```

---

## ✅ Règles de validation du formulaire

- Le titre, la description, la catégorie et la priorité sont obligatoires.
- Les champs vides (ou ne contenant que des espaces) sont refusés.
- Un message d'erreur s'affiche sous chaque champ invalide.
- Un message de confirmation apparaît après un ajout réussi.

- ## Links
# live demo
- [live demo] (helpdesk-ashen-three.vercel.app)

---

## 🔀 Organisation du travail

- **Git** : commits réguliers avec des messages clairs (ex. `feat: ajout du formulaire`, `fix: validation des champs`).
- **Jira** : fonctionnalités découpées en tâches (interface, affichage, ajout, suppression, compteur) avec suivi de l'avancement.

---

## 📱 Aperçu

*(Ajouter ici des captures d'écran de l'application en version desktop et mobile.)*

---

## 👤 Auteur

Projet réalisé individuellement par **[Votre nom]** dans le cadre d'une formation en développement web.

---

## 📄 Licence

Projet à but pédagogique — Atlas Solutions est une entreprise fictive.
