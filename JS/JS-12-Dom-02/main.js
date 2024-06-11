// getElementById
let primeiroTitulo = document.getElementById("primeiroTitulo");

primeiroTitulo.style.color = 'blue';
primeiroTitulo.innerText = 'Lucas';

let pegaClasse = document.getElementsByClassName('getClass');

console.log(pegaClasse);

//getElementsByClassName
pegaClasse[1].style.color = 'blue';

console.log(pegaClasse);

for (i = 0; i < pegaClasse.length; i++) {
    pegaClasse [i].style.color = 'orange';
}

//getElementsByName
let byName = document.getElementsByName("filho");

byName.forEach(funcao);

//[90, 60, 50]
// primeiro parametro é referente aos valores do meu arry
// segundo parametro referente ao indice

function funcao (cont, indice) {
    return byName[indice].style.color = 'pink';
}

console.clear();

//getElementsByTagName
let byTagName = document.getElementsByTagName("p");

for (c = 0; c < byTagName.length; c++) {

    byTagName[c].style.color = 'lightblue';
    byTagName[c].style.fontSize = '30px';
    byTagName[c].style.boxShadow = '5px 2px #000000';
    if (c % 2 == 0) {byTagName[c].style.backgroundColor = 'purple';
    }else {
        byTagName[c].style.backgroundColor = '#fff';
    }
}

    let removendo = document.getElementById('remove1');
    removendo.remove('remove1')

    console.log(byTagName);
    
    let recebeLista = document.getElementById('paiLista')

    recebeLista.style.listStyle = 'none'