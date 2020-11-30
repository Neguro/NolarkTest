/**
 * Fonction qui retorune l'alcool pur ingéré en fonction du nombre de verre
 * 
 * @param {int} nbVerres
 * @returns {int}
 */
function getAlcoolPur(nbVerres){
    const uniteAlcool = 10;
    return nbVerres * uniteAlcool;    
}

function getCoefDiffusion(sexe){
    if (sexe === 'homme'){
        return 0.7;
    } else {
        return 0.6;
    }
}