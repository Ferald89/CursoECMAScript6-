//Es9
//El operador de reposo el cual puede extraer ub objeto que 
//que aún no se ah construido
const obj = {
    name : 'Fernando',
    age : 32,
    country : 'MX',
}

let {name ,...all} = obj
console.log(name,all)