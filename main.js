const button = document.getElementById("button");
const taille = document.getElementById("taille");
const poids = document.getElementById("poids");
const result = document.getElementById("result");
const result1 = "votre IMC est ";

function calcIMC(Poids,Taille){
    return imc=(Poids/(Math.pow(Taille/100,2))).toFixed(1);
}



button.addEventListener("click",function(){
    const imc = calcIMC(poids.value, taille.value);
    result.innerHTML=result1 + imc;
    console.log(imc);
    if (imc<=18.5 || imc>=24.9){
        result.style.backgroundColor="#e55039";
    } else{
        result.style.backgroundColor="#78e08f";
    };
});


