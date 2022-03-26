function calcIMC(Poids,Taille){
    var imc= Poids/(Math.pow(Taille/100,2));
    return imc;
}



document.querySelector('button').addEventListener("click",function(){
    querySelector("h3").imc;
});


