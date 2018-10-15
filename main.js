let map = new Map();

let funcao = () => {};
let object = {};
let array = [];

//Set
map.set('string', 'Sou uma string');
map.set(object, 'Sou um objeto');
map.set(funcao, 'Sou uma função');
map.set(array, 'Sou um array');

//Get
console.log(map.get('string'));
console.log(map.get(array));
console.log(map.get(object));
console.log(map.get(funcao));

//Size
console.log(`Tamanho do mapa: ${map.size}`);

//Has
console.log(map.has(array)) // True
console.log(map.has(1)) // False

//Delete
map.delete('string');
console.log(map.has('string')); // False

for(index of map.keys())
{
    console.log(index);
}

for(element of map.values())
{
    console.log(element);
}

for(entries of map.entries()){
    console.log(entries);
}