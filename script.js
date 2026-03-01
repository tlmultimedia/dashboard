
// Cette fonction est pour changer la couleur de Id Tache  
function changerCouleur() {
    document.getElementById("tache").style.backgroundColor = "#A7C7E7";

  }
// Cette Fonction est pour ajouter un élément dans la liste de tache 
function myAjouter() {

//Va chercher l’élément HTML qui a l’id
   const texte = document.getElementById("tache").value;

//Arrête la fonction ici Ne fais rien d’autre, si rien est écrit dedans 
  if (texte === "") {
      return;
    }
  
  //Crée un nouvel élément HTML <li>
    const li = document.createElement("li");


 // Crée un span pour le texte de la tâche
 const spanTexte = document.createElement("span");
 spanTexte.textContent = texte;
 li.appendChild(spanTexte);

// Ajoute l'événement pour barrer/débarrer le texte
 spanTexte.addEventListener("click", function() {
  spanTexte.classList.toggle("complete"); // barre ou débarrer le texte
});

 // Crée le bouton supprimer
 const boutonSupprimer = document.createElement("button");
 boutonSupprimer.textContent = "x";
 li.appendChild(boutonSupprimer);

 boutonSupprimer.addEventListener("click", function() {
   li.remove();
 });
  
    //Récupérer la liste HTML pour pouvoir y ajouter des tâches.
    const ul = document.getElementById("listeTaches");

  //Ajouter un élément à l’intérieur d’un autre élément
    ul.appendChild(li);

  //Vide le champ de texte après avoir ajouté la tâche.
    document.getElementById("tache").value = "";

//change la couleur en blanc aprais tout 
    document.getElementById("tache").style.backgroundColor = "white";
  
  }
