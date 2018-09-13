//Orientação a objetos no Ecmascript
let celular = () =>
{
    this.cor = "prata";
    this.altura = 40;

    this.ligar = function()
    {
        console.log('Ligação feita');
        return 0;
    }
}

let objeto = new celular();
console.log(objeto.ligar());

//É possível utilizar a criação de classes no novo Ecmascript
class Calculo
{

    //Construtor
    constructor()
    {
        //underline na frente do nome de nosso atributo é o encapsulamento no JS
        this._atribute;
        this.initialize()
    }

    //Método

    initialize()
    {
        //Chamando os métodos getters e setters
        let takeAtribute = this.atribute;
        this.atribute = takeAtribute;
    }

    //Get e Setters (São mágicos, portanto ao chama-los não precisamos colocar dois parentêses no final)
    get atribute()
    {
        return this._atribute;
    }

    set atribute(value)
    {
        this._atribute = value;
    }

}