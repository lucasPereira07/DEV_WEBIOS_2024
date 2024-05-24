//FUNCAO
// function soma(num1, num2, num3) { //parametros
  

//    return num1 + num2 + num3;
// }

// console.log(soma(2, 3, 4)); // com

function media(n1, n2, n3, n4) {
    
    return (n1 + n2 + n3 + n4) / 4;
}

console.log(media(2, 7, 6, 9));
console.clear()

const media2 = (n1, n2, n3, n4) => {
    return (n1 + n2 + n3 + n4) / 4;
}

console.log(media2(5,9,7,8));
console.clear()

function onloadTela() {
    alert("Sua tela está carregada Bem-Vindo");
    console.log("Recarregou a tela");
}
console.clear()

const clique = () => {
    // alert("Bem-vindo você clicou em mim");
    console.log("Você clicou em um botão");
}