// Données initiales
const demandes = [
  {
    id: 1,
    titre: "Connexion Wi-Fi instable",
    description: "Le réseau se déconnecte régulièrement.",
    categorie: "Reseau",
    priorite: "Haute",
  },
  {
    id: 2,
    titre: "Installation d’un logiciel",
    description: "Installer un logiciel sur le poste.",
    categorie: "Logiciel",
    priorite: "Normal",
  },
  {
    id: 3,
    titre: "Clavier défectueux",
    description: "Certaines touches ne fonctionnent plus.",
    categorie: "Materiel",
    priorite: "Basse",
  },
];

let indexModification = null; 

const cardContainer = document.querySelector(".Cartes");

 const counteur = document.querySelector(".items")

// Fonction afficher les cartes
function AfficherDemandes() {
  cardContainer.textContent = "";

  counteur.textContent = `${demandes.length} demandes`

  if(demandes.length === 0) {
  counteur.textContent = "Aucune demande n’est disponible actuellement ?"
  }

  for (let i = 0; i < demandes.length; i++) {
    const carte = document.createElement("div");
    carte.classList.add("carte");

    const iconeOne = document.createElement("span");
    iconeOne.classList.add("item-one");
    iconeOne.textContent = "⌁";

    const counter = document.createElement("span");
    counter.classList.add("count");
    counter.textContent = `HD-00${demandes[i].id}`;

    const titre = document.createElement("p");
    titre.classList.add("reatisabe");
    titre.textContent = demandes[i].titre;

    const description = document.createElement("p");
    description.textContent = demandes[i].description;

    const categorie = document.createElement("span");
    categorie.classList.add("item-one-r");
    categorie.textContent = demandes[i].categorie;

    const priorite = document.createElement("span");
    priorite.classList.add("item1");
    priorite.textContent = demandes[i].priorite;

    const hr = document.createElement("hr");
    hr.classList.add("hr");

    const modifier = document.createElement("span");
    modifier.classList.add("modifier");
    modifier.textContent = "✎ Modifier";
    modifier.addEventListener("click", () => {
      ModificationDemandes(i);
    });

    const supprimer = document.createElement("span");
    supprimer.classList.add("supprimer");
    supprimer.textContent = "♜ Supprimer";
    supprimer.addEventListener("click", () => {
      if (confirm("Voulez-vous supprimer cette demande ?")) {
        demandes.splice(i, 1);
        AfficherDemandes();
      }
    });

    carte.append(
      iconeOne,
      counter,
      titre,
      description,
      categorie,
      priorite,
      hr,
      modifier,
      supprimer,
    );

    cardContainer.append(carte);
  }
}

AfficherDemandes();

// Fonction modification : remplit le formulaire
function ModificationDemandes(i) {
  document.querySelector("#titre").value = demandes[i].titre;
  document.querySelector("#descriptions").value = demandes[i].description;
  document.querySelector("#categories").value = demandes[i].categorie;
  document.querySelector("#priorites").value = demandes[i].priorite;
  indexModification = i;
}

// Fonction ajouter / enregistrer la modification
function ajoutesDemande() {
  const titreProbleme = document.querySelector("#titre").value;
  const categorie = document.querySelector("#categories").value;
  const priorite = document.querySelector("#priorites").value;
  const description = document.querySelector("#descriptions").value;

  if (titreProbleme.trim() === "" || categorie === "" || description.trim() === "") {
    return;
  }

  if (indexModification !== null) {
    // Modifier la demande existante
    demandes[indexModification].titre = titreProbleme;
    demandes[indexModification].description = description;
    demandes[indexModification].categorie = categorie;
    demandes[indexModification].priorite = priorite;

    indexModification = null; 
  } else {
    demandes.push({
      id: demandes.length + 1,
      titre: titreProbleme,
      categorie: categorie,
      priorite: priorite,
      description: description,
    });
  }

  document.querySelector("#titre").value = "";
  document.querySelector("#descriptions").value = "";
  document.querySelector("#categories").value = "";
  document.querySelector("#priorites").value = "";

  AfficherDemandes();
}


const clickAjouter = document.querySelector(".btn");

clickAjouter.addEventListener("click", function (event) {
  event.preventDefault();
  ajoutesDemande();
});



