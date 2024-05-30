// Class
// Objetos é compostos por duas coisas propriedades = Caracteristicas e metodos = Funcionalidades
class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
        
    };
        anoCarro(anoAtual) {
            return anoAtual - this.ano;
            // anoAtual = 2024
            // this.ano = 2012
        }
};


//criar uma nova cópia da classe = instacie
// funcionalidade para savber quantos anos o carro; ano atual - ano da criação
// Metodos
// anoCarro(anoAtual){
//     return anoAtual - this.ano;
// }

let carro1 = new Carro("Kwid", 2012);
let carro2 = new Carro("Mobi", 2015);
let carro3 = new Carro("HB20", 2020);

console.log(Carro);
console.log(carro1)
console.log(carro2);

let anoAtual = new Date();
console.log(anoAtual);

let recebeAno = anoAtual.getFullYear();
console.log(anoAtual);
console.log(recebeAno);

console.log(carro1);
console.log(carro1.anoCarro(recebeAno));

