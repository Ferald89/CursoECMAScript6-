//es10
//Para interactuar en niveles de los arregos
let array = [1,2,3,[1,2,3,[1,2,3]]]
console.log(array.flat(2))
//para mapear los datos de un arreglo
let array2 = [1,2,3,4,5]
console.log(array2.flatMap(value =>[value,value*2]))
//Quitar los Espacios 
let hello = '    HEllo World'
console.log(hello)
console.log(hello.trimStart())