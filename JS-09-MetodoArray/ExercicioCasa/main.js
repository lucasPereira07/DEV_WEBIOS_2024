console.log("Exercício 1")
var exercicio1 = [20, 11, 40, 7, 33, 8, 44];
exercicio1.forEach(verificar);
function verificar(array){
    if (array % 2 === 0){
        console.log(`o numero ${array} é par`);
    } else{
        console.log(`o numero ${array} é impar`);
    }
}

console.log("----------/----------")
console.log("Exercício 2")
var exercicio2 = [20, 11, 40, 7, 33, 8, 44, 8, 23, 10, 99, 80, 57];
var filtrar = exercicio2.filter((valor) => {
    return valor > 20 && valor  < 80
})
console.log(filtrar);