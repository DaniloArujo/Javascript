/*


+
-
*
/
%
++
--
+=
-+


*/


let num1 = 0
let num2 = 1
//ambas variáveis precisam ser inicializadas
let num3 = 2,num4 = 3
let soma = 0
let subtracao = 0
let divisao = 0
let multiplicacao = 0

console.log("num1 = " + num1)
console.log("num2 = " + num2)
console.log("num3 = " + num3)
console.log("num4 = " + num4)

soma = num1 + num3
console.log("soma de num1 e num3: "+ soma)

//consigo fazer a operação dentro do console:
console.log("consigo fazer a operação dentro do console: " + num1 + num3)

subtracao = num4 - num2
console.log("Subtração de num4 e num2: " + subtracao)

divisao = num4 / num3
console.log("Divisão de num4 e num3: " + divisao)

//a ordem de procedencia matemática é seguida pelo javascript
multiplicacao = (num1 + num4)*2

console.log("(num1 + num2)*2 : " + multiplicacao)

