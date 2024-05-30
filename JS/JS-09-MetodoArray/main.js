// metodo ForEach
let frutas = ['maracujá','laranja','amora','limão', 'melão', 'abacate'];


frutas.forEach(retornaInfo);
function retornaInfo(nomeFruta, indice){
    console.log(`nomeFruta: ${nomeFruta}`)
    console.log(`Indice: ${indice}`)
};

//exibir o nome e o indice
//formato com for
for(var i = 0; i < frutas,length; i++) {
    console.log(`Nome:${frutas[i]}`);
    console.log(`Indice:${[i]}`);
};
console.clear();
frutas.forEach(teste = ( nomeFruta, indice) =>{
    console.log(`nomeFruta:${nomeFruta}`);
    console.log(`Indice:${indice}`);

})

frutas.forEach((teste, indice) => console.log(teste, indice));
//ele vai retornar apenas o nome e não va retornar o indice
console.clear();


let tarefas = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
    },
    {
        id: 2,
        isPronta: false,
        nomeTarefa: "Ir pra Casa"
    },
    {
        id: 3,
        isPronta: false,
        nomeTarefa: "Dormir"
    }
];

//ARROW FUNCTION
tarefas.forEach((tarefa) => console.log(tarefa.nomeTarefa));
console.clear();

//METODO MAP
let numeros = [2,4,12,34,79];
let novoArray = numeros.map(Math.sqrt);

console.log("Array antigo" + numeros);
console.log("Novo array" + novoArray);

let mapText = tarefas.map((retornaText) => {
console.log(retornaText.nomeTarefa)
});
console.clear();

//METODO FILTER
let numeros2 = [3,13,24,36,37,50,60,78,89];

let resultado = numeros2.filter(retornaFiltro);

function retornaFiltro(num){
    return num > 30;
}
console.log(resultado);
console.clear();

let tarefaFiltro = tarefas.filter((resultadoFiltro) =>{
    return resultadoFiltro.isPronta === false
})
console.log(tarefaFiltro);





//METODO FIND 
let sapatos = [
    {marca: "Nike", quantidade: 3},
    {marca: "Adidas", quantidade: 5},
    {marca: "Puma", quantidade: 7}
]

sapatos.find((retornaFind) => {
    console.log (retornaFind.marca == "Puma")
});
