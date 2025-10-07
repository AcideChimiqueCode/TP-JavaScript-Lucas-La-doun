let valeurEuro = document.getElementById("euro");
let valeurDollarAmericain = document.getElementById("dollar_americain");
let valeurDollarAustralien = document.getElementById("dollar_australien");
let formulaire = document.getElementById("form");

formulaire.onsubmit = (event) => {
    event.preventDefault();
    if(valeurEuro.value === ""){
        console.log("Entrez un nombre s'il vous plaît !\n");
        return;
    }
    let numberEuro = Number(valeurEuro.value);
    if(numberEuro === 0){
        valeurDollarAmericain.value = 0;
        valeurDollarAustralien.value = 0;
        return;
    }
    else if(isNaN(numberEuro)){
        console.log(`Vous avez entrez une valeur interdite => 'NaN'\n`);
        valeurEuro.value = "";
        valeurDollarAustralien.value = "";
        valeurDollarAmericain.value = "";
        return;
    }
    else if(numberEuro < 0){
        console.log("Vous avez entrez une valeur strictement inférieure à 0 !");
        valeurEuro.value = "";
        valeurDollarAustralien.value = "";
        valeurDollarAmericain.value = "";
        return;
    }
    else{
        let numberDollarAmericain = numberEuro * 1.06;
        let numberDollarAustralien = numberEuro * 1.65;
        valeurDollarAmericain.value = numberDollarAmericain.toFixed(2);
        valeurDollarAustralien.value = numberDollarAustralien.toFixed(2);
        console.log(`Résultat : ${numberEuro} € = ${numberDollarAmericain.toFixed(2)} USD et ${numberDollarAustralien.toFixed(2)} AUD`);
    }
};