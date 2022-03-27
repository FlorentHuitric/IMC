const button = document.getElementById("button");
const taille = document.getElementById("taille");
const poids = document.getElementById("poids");
const result = document.getElementById("result");
const cheerUp = document.getElementById("cheerUp");
const URL = "https://www.ameli.fr/finistere/assure/sante/themes/surpoids-obesite-adulte/definition-causes-risques";
const URL2 = "https://solidarites-sante.gouv.fr/prevention-en-sante/preserver-sa-sante/nutrition/article/prevention-des-troubles-du-comportement-alimentaire-chez-les-jeunes"

const calcIMC = (poids, taille) => (poids/(Math.pow(taille/100,2))).toFixed(1);

button.addEventListener("click",function(){

    const imc = calcIMC(poids.value, taille.value);
    result.innerHTML=`Votre IMC est de `+(imc);
/*   utilisation du switch/case préférable
    if (imc<=18.5 || imc>=24.9){
        result.style.backgroundColor="#e55039";
    } else{
        result.style.backgroundColor="#78e08f";
    };
*/   
    switch(true) {
        case imc < 18.5:
            cheerUp.innerHTML="Tu es en sous poids !".link(URL2);
            result.style.backgroundColor="#e55039";
            break;
        case imc>24.9:
            cheerUp.innerHTML="Tu es en surpoids !".link(URL);
            result.style.backgroundColor="#e55039";
            break;
        case (imc>=18.5 && imc<=24.9):
            cheerUp.innerText=("Tu tiens la forme, super !")
            result.style.backgroundColor="#78e08f";
            break;    
    }
});