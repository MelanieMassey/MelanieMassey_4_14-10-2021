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
const closeBtn = document.querySelectorAll(".close");
// const closeBtnAfterSubmit = document.getElementById("btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal events
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
//closeBtnAfterSubmit.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Ecoute évènement Submit
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  validate();
})

// Validation formulaire
function validate() {
  
  let error = 0;

  // Message erreur firstName
  const firstName = document.getElementById("first");
  if (firstName.value.length < 2) {
    document.getElementById("first--error").style.display = "inline-block";
    error++;
  } else {
    document.getElementById("first--error").style.display = "none";
  }
  // Message erreur familyName
  const familyName = document.getElementById("last");
  if (familyName.value.length < 2) {
    document.getElementById("last--error").style.display = "inline-block";
    error++;
  } else {
    document.getElementById("last--error").style.display = "none";
  }
  // Message erreur email
  const email = document.getElementById("email");
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regex.test(email.value)) {
    document.getElementById("email--error").style.display = "none";
  } else {
    document.getElementById("email--error").style.display = "inline-block";
    error++;
  }
  // Message erreur birthdate
  const birthdate = document.getElementById("birthdate");
  let regexBirthdate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  if (birthdate.value.length == 0 || !regexBirthdate.test(birthdate.value)) {
    document.getElementById("birthdate--error").style.display = "inline-block";
    error++;
  } else {
    document.getElementById("birthdate--error").style.display = "none";
  }
  // Message erreur tournois quantity
  const quantity = document.getElementById("quantity");
  if (isNaN(quantity.value) || quantity.value <= 0){
    document.getElementById("quantity--error").style.display = "inline-block";
    error++;
  } else {
    document.getElementById("quantity--error").style.display = "none";
  }
  // Message erreur boutons radio
  let validLocation = false;
  let locationArray = document.reservationForm.location;
  for (let i=0;i<locationArray.length;i++){
    if(locationArray[i].checked){
      validLocation = true;
      break;
    }
  }
  if(validLocation){
    document.getElementById("location--error").style.display = "none";
  } else {
    document.getElementById("location--error").style.display = "inline-block";
    error++;
  }
  // Case conditions générales cochée
  if(document.getElementById("checkbox1").checked){
    document.getElementById("conditions--error").style.display = "none";
  } else {
    document.getElementById("conditions--error").style.display = "inline-block";
    error++;
  }

  // Affichage message validation si pas d'erreurs
  if (error == 0){
    document.reservationForm.style.display="none";
    document.getElementById("content-validationMessage").style.display = "inline-block";
  }
}






// NOTES
// element.addEventListener(nomEvenementAEcouter,fonctionAApeller)
// preventDefault() - empeche execution evenement par defaut
// checkVAlidity - vérifier si critères du champ sont valides avec true false
// reportValidity - vérifier + message d'erreur
// setCustomValidity("") - personnalise message erreur
// trim - retire les espaces
// Switch case - pour les cases à cocher ?
// :int - typer variable nombre entier


