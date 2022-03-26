function calcIMC(Poids,Taille){
    const imc= Poids/(Math.pow(Taille/100,2));
    return imc;
}
const button = document.getElementById(button);
const Taille = document.getElementById(Taille);
const Poids = document.getElementById(Poids);
const result = document.getElementById(result);


document.getElementById(button).addEventListener("click",function(Poids,Taille){
    getElementById(result).calcIMC;
});


