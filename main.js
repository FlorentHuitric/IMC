const button = document.getElementById("button");
const taille = document.getElementById("taille");
const poids = document.getElementById("poids");
const result = document.getElementById("result");

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
            console.log("Tu es en sous poids !");
            result.style.backgroundColor="#e55039";
            break;
        case imc>24.9:
            console.log("Tu es en surpoids !")
            result.style.backgroundColor="#e55039";
            break;
        case (imc>=18.5 && imc<=24.9):
            console.log("Tu tiens la forme, super !")
            result.style.backgroundColor="#78e08f";
            break;    
    }
});


