// "Modifiez le lien de wikipédia pour qu'il pointe vers le site français"

let modifLien = document.querySelector("a");
modifLien.href = "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal";

/*
Lors de l’appui sur le bouton, il faut vérifier que le texte dans l’étiquette (le premier input text)
soit « Oui » ou « Non ». Dans le cas contraire, il faut que le texte de l’étiquette soit « Il faut
mettre Oui ou Non
*/

let valeurBouton = document.getElementById("submit");
let valeurTexte = document.getElementById("text");
let valeurLabelText = document.getElementById("labelText");
valeurBouton.onclick = (event) => {
    if(valeurTexte.value.toLowerCase() !== "oui" && valeurTexte.value.toLowerCase() !== "non"){
        event.preventDefault();
        valeurLabelText.innerHTML = "Il faut mettre Oui ou Non";
    }
};

/*
En utilisant nextSibling (cf cours),modifiez Choix N°1, Choix N°2 et Choix N°3
par respectivement HP, Casque , Bluetooth. Ajoutez des id à l’HTML si nécessaire
*/

let valeurChoix1 = document.getElementById("choix1");
let valeurChoix2 = document.getElementById("choix2");
let valeurChoix3 = document.getElementById("choix3");
valeurChoix1.nextSibling.nextSibling.textContent = "HP";
valeurChoix2.nextSibling.nextSibling.textContent = "Casque";
valeurChoix3.nextSibling.nextSibling.textContent = "Bluetooth";

/*
Dès qu’un choix est réalisé, modifiez en dessous « Volume » en « Volume HP », Volume
Casque» ou Volume Bluetooth».
Aide :
- utilisez input[name="choix"]
- utilisez this.value == "1"
- nextSibling.nextSibling
*/


let valeurVolume = document.getElementById("titreVolume");
valeurChoix1.onclick = () => {
    valeurVolume.innerText = "Volume HP";
};
valeurChoix2.onclick = () => {
    valeurVolume.innerText = "Volume Casque";
};
valeurChoix3.onclick = () => {
    valeurVolume.textContent = "Volume Bluetooth";
};

/*
Modifiez le maximum du volume de 11 à 100.
Affichez la valeur max dans la console.
*/

let modfifVolume = document.getElementById("volume");
let afficheVolume = document.getElementById("afficheVolume");
modfifVolume.max = "100";
console.log(modfifVolume.max);
modfifVolume.oninput = function(){
    afficheVolume.textContent = this.value;
};


/*
 Modifiez « Une case à cocher » en « Mute »
Aide : utilisez querySelector et label[for='ouinon'] si besoin
 Un appui sur la case à cocher à droite de « Mute », désactive ou réactive le volume.
Aide : utilisez les attributs disabled et checked
*/

let modfifLabelUneCase = document.getElementById("labelMaCase");
modfifLabelUneCase.textContent = "Mute";

let checkBoxMute = document.getElementById("maCase");
checkBoxMute.onchange = () => {
    if(checkBoxMute.checked){
        modfifVolume.disabled = true;
        afficheVolume.textContent = "0";
    }
    else{
        modfifVolume.disabled = false;
        afficheVolume.textContent = "";
    }
};


/*
Ajoutez à la fin de la section Lien et images une image.
(src avec par exemple https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg ),
la largeur (200), rechercher l’élément div Lien et images puis insérer un nœud avec appendChild
*/

let sectionLienImage = document.getElementById("liensImages");
let nvImage = document.createElement("img");
nvImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
nvImage.width = 200;
nvImage.alt = "Logo UPHF";
sectionLienImage.appendChild(nvImage);
nvImage.style.marginLeft = "20px";

// e) DÉMARRAGE

document.addEventListener("DOMContentLoaded", function() {
    let sectionFormulaire = document.getElementById("sectionForm");
    let sectionProgression = document.getElementById("sectionProgression");
    sectionLienImage.style.display = "none";
    sectionFormulaire.style.display = "none";
    sectionProgression.style.display = "none";
    let menuCheckbox = document.querySelectorAll("#menu input[type='checkbox']");
    menuCheckbox.forEach((element) => {
        element.onchange = function(){
            let idCible = this.dataset.target;
            let section = document.getElementById(idCible);
            if(this.checked){
                section.style.display = "";
            }
            else{
                section.style.display = "none";
            }
        }
    })
});

/*
Si vous rechargez la page mais que vous avez coché précédemment des cases sont toujours
présentes.
Modifiez le callback du démarrage afin qu’aucun choix soit sélectionné.
*/

let checkboxes = document.querySelectorAll("#menu input[type='checkbox']");
checkboxes.forEach((element) => {
    element.checked = false;
    let idSection = document.getElementById(element.dataset.target);
    idSection.style.display = "none";
})

/*
Récupérer l’année choisie de :<input type="date" et l’afficher dans la console
*/

let valeurDate = document.getElementById("date");
valeurDate.onchange = () => {
    console.log(valeurDate.value);
};

/*
Les deux barres de progression partent de zéro et progressent de 5% toutes les secondes.
*/

// Deux barres <progress id="progressBlue"> et <progress id="progressGreen">

const progressBlue  = document.getElementById("progressBlue");
const progressGreen = document.getElementById("progressGreen");

// état initial
progressBlue.max = 100;
progressGreen.max = 100;
progressBlue.value = 0;
progressGreen.value = 0;

let pBlue = 0;
let pGreen = 0;
const INC = 5;       // +5%
const DELAY = 1000;  // toutes les secondes

// timer pour la barre bleue
const timerBlue = setInterval(() => {
    pBlue = Math.min(pBlue + INC, 100);
    progressBlue.value = pBlue;
    if (pBlue === 100) clearInterval(timerBlue);
}, DELAY);

// timer pour la barre verte
const timerGreen = setInterval(() => {
    pGreen = Math.min(pGreen + INC, 100);
    progressGreen.value = pGreen;
    if (pGreen === 100) clearInterval(timerGreen);
}, DELAY);














