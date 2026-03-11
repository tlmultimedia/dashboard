// Cette fonction est pour changer la couleur de l'input
function changerCouleur() {
  document.getElementById("tache").style.backgroundColor = "#A7C7E7";
}

let boutonCreer = false;
let toutSuprimer; // accessible partout

// Récupérer la liste HTML
const ul = document.getElementById("listeTaches");

// Fonction pour ajouter une tâche
function myAjouter() {
  const texte = document.getElementById("tache").value;
  if (texte === "") return;

  const li = document.createElement("li");

  const spanTexte = document.createElement("span");
  spanTexte.textContent = texte;
  li.appendChild(spanTexte);

  spanTexte.addEventListener("click", function() {
    spanTexte.classList.toggle("complete");
  });

  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.textContent = "x";
  li.appendChild(boutonSupprimer);

  boutonSupprimer.addEventListener("click", function() {
    li.remove(); 

    // Si la liste est vide après suppression, retire le bouton "Tout supprimer"
    if (ul.children.length === 0 && boutonCreer) {
      toutSuprimer.remove();
      boutonCreer = false;
    }
  });

  ul.appendChild(li);

  // Créer le bouton "Tout supprimer" si ce n'est pas déjà fait
  if (!boutonCreer) {
    toutSuprimer = document.createElement("button"); // ici pas const
    toutSuprimer.textContent = "Tout supprimer";
    ul.after(toutSuprimer);

    toutSuprimer.addEventListener("click", function() {
      ul.innerHTML = "";
      toutSuprimer.remove();
      boutonCreer = false;
    });

    boutonCreer = true;
  }

  document.getElementById("tache").value = "";
  document.getElementById("tache").style.backgroundColor = "white";
}