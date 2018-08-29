//Declarar variável com LET faz com que ela possua escopo local de onde ela foi criada.
let number = 15;
 
for (let i = 1; i <= 10; i++) {
    //Esta é uma nova forma de concatenar no javascript que por sinal é baita excelente 
    console.log(` ${number} x ${i} = ${number * i} `);
}

//Função anonima
let result = function(n1, n2, operator)
{
    //A função Eval do JS interpreta as operações em Strings passadas para ele
    return eval(`${n1} ${operator} ${n2}`);

}(3,2, "*");

//Arrow function
let sum = (x, y) =>
{
    return x + y;
}

//Exemplo prático de Arrow function
let tabuada = (number) => 
{
    for (let i = 1; i <= number; i++) 
    {
        for (let j = 0; j <= 10; j++) 
        {
           console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

tabuada(50);

