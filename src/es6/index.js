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


