const button = document.getElementById("button");
const taille = document.getElementById("taille");
const poids = document.getElementById("poids");
const result = document.getElementById("result");


function calcIMC(Poids,Taille){
    return imc=(Poids/(Math.pow(Taille/100,2))).toFixed(1);
}



button.addEventListener("click",function(){
    const imc = calcIMC(poids.value, taille.value);
    console.log(imc);
});


