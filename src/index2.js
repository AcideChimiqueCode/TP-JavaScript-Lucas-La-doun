let valeurEuro = document.getElementById("euro");
let valeurDollarAmericain = document.getElementById("dollar_americain");
let valeurDollarAustralien = document.getElementById("dollar_australien");

let maj = false;

// CALCUL EURO

valeurEuro.oninput = () => {
    if(maj === true){
        return;
    }
    else{
        maj = true;
        if(isNaN(valeurEuro.value)){
            console.log("Entrez une valeur valide s'il vous plaît !");
            valeurEuro.value = "";
            valeurDollarAmericain.value = "";
            valeurDollarAustralien.value = "";
            maj = false;
            return;
        }
        let numberOfEuro = Number(valeurEuro.value);
        if(numberOfEuro === 0){
            console.log("Entrez une valeur différente de 0 s'il vous plaît !");
            valeurDollarAmericain.value = 0;
            valeurDollarAustralien.value = 0;
            maj = false;
            return;
        }
        else if(numberOfEuro < 0){
            console.log("Entrez une valeur strictement supérieur à 0 s'il vous plaît !");
            valeurEuro.value = "";
            valeurDollarAmericain.value = "";
            valeurDollarAustralien.value = "";
            maj = false;
            return;
        }
        else{
            valeurDollarAmericain.value = (numberOfEuro * 1.06).toFixed(2);
            valeurDollarAustralien.value = (numberOfEuro * 1.65).toFixed(2);
            maj = false;
            return;
        }
    }
};


// CALCUL DOLLAR AMERICAIN


valeurDollarAmericain.oninput = () => {
    if(maj === true){
        return;
    }
    else{
        maj = true;
        if(isNaN(valeurDollarAmericain.value)){
            console.log("Entrer une valeur valide s'il vous plaît !");
            valeurEuro.value = "";
            valeurDollarAmericain.value = "";
            valeurDollarAustralien.value = "";
            maj = false;
            return;
        }
        let numberOfDollarAmericain = Number(valeurDollarAmericain.value);
        if(numberOfDollarAmericain === 0){
            console.log("Entrez une valeur différente de 0 s'il vous plaît !");
            valeurEuro.value = 0;
            valeurDollarAustralien.value = 0;
            maj = false;
            return;
        }
        else if(numberOfDollarAmericain < 0){
            console.log("Entrez une valeur strictement supérieur à 0 s'il vous plaît !");
            valeurEuro.value = "";
            valeurDollarAmericain.value = "";
            valeurDollarAustralien.value = "";
            maj = false;
            return;
        }
        else{
            valeurEuro.value = (numberOfDollarAmericain / 1.06).toFixed(2);
            valeurDollarAustralien.value = (numberOfDollarAmericain * (1.65 / 1.06)).toFixed(2);
            maj = false;
            return;
        }
    }
};


// CALCUL DOLLAR AUSTRALIEN


valeurDollarAustralien.oninput = () => {
    if(maj === true){
        return;
    }
    else{
        maj = true;
        if(isNaN(valeurDollarAustralien.value)){
            console.log("Entrer une valeur valide s'il vous plaît !");
            valeurEuro.value = "";
            valeurDollarAmericain.value = "";
            valeurDollarAustralien.value = "";
            maj = false;
            return;
        }
        let numberOfDollarAustralien = Number(valeurDollarAustralien.value);
        if(numberOfDollarAustralien === 0){
            console.log("Entrez une valeur différente de 0 s'il vous plaît !");
            valeurDollarAmericain.value = 0;
            valeurEuro.value = 0;
            maj = false;
            return;
        }
        else if(numberOfDollarAustralien < 0){
            console.log("Entrez une valeur strictement supérieur à 0 s'il vous plaît !");
            valeurEuro.value = "";
            valeurDollarAmericain.value = "";
            valeurDollarAustralien.value = "";
            maj = false;
            return;
        }
        else{
            valeurEuro.value = (numberOfDollarAustralien / 1.65).toFixed(2);
            valeurDollarAmericain.value = (numberOfDollarAustralien * (1.06 / 1.65)).toFixed(2);
            maj = false;
            return;
        }
    }
};