
//Cria um objeto com os atributos e métodos da classe Date()
let data = new Date()

//Percorre a árvore DOM e retorna um elemento
let list = document.querySelector('div')

//Busca mais de um elemento na árvore DOM
let lists = document.querySelectorAll();

//Adiciona um evento no qual o primeiro parâmetro é o evento a ser disparado
let click = document.addEventListener("click", () => {
    //Alguma instrução caso o evento ocorra
});

//className se refere ao nome da classe de nossa tag no DOM, baseVal retorna este nome
let btn;
let className = btn.className.baseVal

//Replace troca uma string por outro valor por passagem de parâmetro. Troque btn por button
className.replace("btn", "button");

//Roda a mesma intrução dada no primeiro parâmetro pelo periodo informado no segundo parâmetro
setInterval(() => {
    //Instruções
}, 1000);

//Mesa coisa do setInterval mas este faz somente uma execução e finaliza
setTimeout(()=>{
    //Instruções
}, 10000)