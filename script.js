const MAX_VALUE=100;
let i = 1, isEvenNumber;
let evenNumbers = "Los numeros pares entre 1 y 100 son: "

while(i<=MAX_VALUE){
    isEvenNumber = i%2==0;
    if(isEvenNumber) evenNumbers += `${i}, `;
    i++;
    }
console.log(evenNumbers);
    