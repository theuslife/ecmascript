//Window nós manipulamos toda a aplicação e janela
window.addEventListener("focus", event => {
    console.log("Foi focado");
});

//Document nós mexemos em toda estrutura HTML
document.addEventListener("click", event =>{
    console.log("Click!");
});

//Timestamp é a quantidade de segundos desde 1970
let agora = new Date();

//Mostrando a data local brasileira
console.log(agora.toLocaleDateString("pt-br"));

//Foreach no Javascript
let carros = ["palio 98", "fiat", "uno", "chevrolet", "corsa"];
carros.forEach(function(elemento, indice){
    console.log(indice, elemento);
});

//Usando Arrows functions no forEach
let arrowFunction;
carros.forEach(arrowFunction = (indice, elemento) => {
    console.log(elemento, indice);
});



