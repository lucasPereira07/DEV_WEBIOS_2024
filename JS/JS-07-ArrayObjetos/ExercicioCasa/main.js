var arObj = [
    {
        nome: "Ana",
        idade: 17,
        nota: 8,
        ano: "2B"
    },
    {
        nome: "Bruno",
        idade: 16,
        nota: 6,
        ano: "2C"
    },
    {
        nome: "Veronica",
        idade: 16,
        nota: 9,
        ano: "2B"
    },
    {
        nome: "Marta",
        idade: 15,
        nota: 5,
        ano: "3C"
    },
    {
        nome: "Brenno",
        idade: 19,
        nota: 8,
        ano: "3C"
    },
    {
        nome: "Maria",
        idade: 14,
        nota: 4,
        ano: "1F"
    },
];

console.log (arObj);
console.log (arObj[1]);
console.log (arObj[3].nota);

var jason = JSON.stringify(arObj);
console.log (jason);