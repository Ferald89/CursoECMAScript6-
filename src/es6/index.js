function newfunction(name,age,country){
    var name = name || 'oscar';
    var age = age || 35;
    var country = country || 'MX';
    console.log(name,age,country);

};
// es6 
function newfunction2(name= 'oscar',age=32,country='MX'){
    console.log(name,age,country);
};

let hello = "Hello";
let world = "World";
let epicPrhase = hello + ' '+ world;
console.log(epicPrhase);
let epicPrhase2 = `${hello} ${world}`
console.log(epicPrhase2)



newfunction2();
newfunction2('Ricardo','23','CO');

let lorem = "quiero escribir una frase epica cuando termine este curso \n "
+"otra frase epica"

let lorem2 = `quiero crear otra frase epica
esta la segunda parte de la frase epica`

console.log(lorem)
console.log(lorem)

let person = {
    'name':'oscar',
    'age':32,
    'country':'MEX'
}

console.log(person.name,person.age)

let {name,age}= person

console.log(name,age)

let team1 = ['Oscar','Julian','Ricardo']
let team2 = ['Valeria','Yesica','Camila']
// esto se hace para crear un elementos asignar elementos de un lugar a otro
let education = ['David',...team1,...team2]

console.log(education)

//La diferencia entre let y var es que let se ejectura solo en el bloque 
//del programa y var se puede ocuparar en diferente parte de progrma

{
    var globalvar = "Global var"
}
{
    let globallet = "Global let"
}

console.log(globalvar);
console.log(globallet);


