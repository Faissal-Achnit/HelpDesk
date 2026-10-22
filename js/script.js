// Donnees intiales

const demandes = [
  {
    id: 1,
    titre: "Connexion Wi-Fi instable",
    description: "Le réseau se déconnecte régulièrement.",
    categoire: "Resau",
    proirite: "Houte",
  },
  {
    id: 2,
    titre: "Installation d’un logiciel",
    description: "Installer un logiciel sur le poste.",
    categoire: "logicicil",
    proirite: "Normal",
  },
  {
    id: 3,
    titre: "Clavier défectueux",
    description: "Certaines touches ne fonctionnent plus.",
    categoire: "Materiel",
    proirite: "Basse",
  },
];

// function afficher le carte

const cardContainer = document.querySelector(".Cartes");

function AfficherDemandes() {
  cardContainer.textContent = "";
  for (let i = 0; i < demandes.length; i++) {
    const carte = document.createElement("div");
    carte.classList.add("carte");

    const iconeOne = document.createElement("span");
    iconeOne.classList.add("item-one");
    iconeOne.textContent = "⌁";

    const counter = document.createElement("span");
    counter.classList.add("count");

    counter.textContent = `HD-00${i + 1}`;

    const titre = document.createElement("p");
    titre.classList.add("reatisabe");
    titre.textContent = demandes[i].titre;

    const description = document.createElement("p");

    description.textContent = demandes[i].description;

    const categoire = document.createElement("span");
    categoire.classList.add("item-one-r");
    categoire.textContent = demandes[i].categoire;

    const proirite = document.createElement("span");
    proirite.classList = "item1";
    proirite.textContent = demandes[i].proirite;

    const hr = document.createElement("hr");
    hr.classList.add("hr");

    const modifier = document.createElement("span");
    modifier.classList.add("modifier");

    modifier.textContent = "✎ Modifier";

    const supprimer = document.createElement("span");
    supprimer.classList.add("supprimer");
    supprimer.textContent = "♜ Supprimer";

    function SupprimerDemandes() {
      supprimer.addEventListener("click", () => {
        if (confirm("Voulez-vous supprimer cette demande ?")) {
          demandes.splice(i, 1);
          cardContainer.textContent = "";
          AfficherDemandes();
        }
      });
    }

    function SupprimerDemandes() {
      supprimer.addEventListener("click", () => {
        if (confirm("Voulez-vous supprimer cette demande ?")) {
          demandes.splice(i, 1);
          cardContainer.textContent = "";
          AfficherDemandes();
        }
      });
    }

    SupprimerDemandes();

    modifier.addEventListener("click", () => {
      console.log(demandes[i]);
    });

    carte.append(
      iconeOne,
      counter,
      titre,
      description,
      categoire,
      proirite,
      hr,
      modifier,
      supprimer,
    );
    cardContainer.append(carte);
  }
}
AfficherDemandes();

// function ajouter

function ajoutesDemande() {
  const titerProblem = document.querySelector("#titre").value;
  const categoire = document.querySelector("#categories").value;
  const proiRite = document.querySelector("#priorites").value;
  const descRiption = document.querySelector("#descriptions").value;
  if (
    titerProblem.trim() === "" ||
    categoire === "" ||
    descRiption.trim() === ""
  ) {
    return;
  }

  const NouvelleDemandes = {
    id: demandes.length + 1,
    titre: titerProblem,
    categoire: categoire,
    proirite: proiRite,
    description: descRiption,
  };
  demandes.push(NouvelleDemandes);
  AfficherDemandes();
}

// le eventListe de jvascript
const clickAjouter = document.querySelector(".btn");

clickAjouter.addEventListener("click", function (event) {
  event.preventDefault();

  ajoutesDemande();
});
