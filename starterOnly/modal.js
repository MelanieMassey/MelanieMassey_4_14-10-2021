function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementById("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click",closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();
  validate();
})

function validate() {
  const firstName = document.getElementById("first");
    if(firstName.value.length < 2 || firstName.value.length == 0){
    document.getElementById("first--error").style.display="inline-block";
  }
    else{
      document.getElementById("first--error").style.display="none";
    }
}



//Family Name - "minimum de 2 caractères / n'est pas vide"
const familyName = document.getElementById("last");
familyName.addEventListener("input",function(){
  if(familyName.value.length < 2 || firstName.value.length == 0){
    familyName.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    familyName.dispatchEvent(new Event("invalid"));
  }
})

//Email - valide



// NOTES COURS
// element.addEventListener(nomEvenementAEcouter,fonctionAApeller)
// preventDefault() - empeche execution evenement par defaut
// checkVAlidity - vérifier si critères du champ sont valides avec true false
// reportValidity - vérifier + message d'erreur
// setCustomValidity("") - personnalise message erreur


