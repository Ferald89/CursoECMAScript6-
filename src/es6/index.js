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

//EMPIEZA CLASE 4
let name = 'oscar'
let age = 32
//Así se crean los objetos en javascript
//es5
obj = {name : name,age:age}
//es6
obj1 = {name,age}
console.log(obj);
console.log(obj1);

const names = [
    {name:'Fernando', age:26},
    {name:'Yesica', age:27}
]
//Con es5 Para recorrer la lista se ejecuta un función
//anonima
let listOfName=names.map(function(item){
    console.log(item.name)
})
//Con es6 se pueden acceder a las arrow function
let listOfName1 = names.map(items=>console.log(items.name))
//Arrow functions

const squeare = num => num*num
const decirHola = (name,age)=>{
    console.log(`Hello my name is ${name} and I am ${age}`);
    
}

decirHola(names[1].name,names[1].age)

//PROMESAS
//Promesas necesitan dos elementos resolver o rechazar
const helloPromise = () => {
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Hey.!')
        }else{
            reject('Algo salio mal.!')
        }
    })
}

helloPromise()
 .then(response => console.log(response))
 .catch(error => console.log(error))