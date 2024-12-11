// LISTA HARD 

// 1. Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
// informados	valores	iguais)	e	escrever	o	maior	deles.


// 2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
// escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
// (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).

// 3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
// pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
// seguintes	mensagens:	
// ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
// ACESSO	NEGADO	caso	a	senha	seja	inválida.

// 4. As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
// dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
// programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
// valor	total	da	compra.

// 5. Escreva	 um	 programa	 para	 ler	 3	 valores	 inteiros	 (considere	 que	 	 não	
// serão	lidos	valores	iguais)	e	escrevê-los	em	ordem	crescente.

// let valor1 = Number(prompt("Digite um número"))
// let valor2 = Number(prompt("Digite um número"))
// let valor3 = Number(prompt("Digite um número"))

// if (valor1>valor2 && valor1>valor3 && valor2>valor3) {

//     alert(`${valor1} > ${valor2} > ${valor3}`)
// } else if (valor2>valor1 && valor2>valor3 && valor1>valor3){

//     alert(`${valor2} > ${valor1} > ${valor3}`)
// } else if(valor3>valor1 && valor3>valor2 && valor1>valor2){

//     alert(`${valor3} > ${valor1} > ${valor2}`)

// } else if(valor1 > valor3 && valor1>valor2 && valor3>valor2){

//     alert(`${valor1} > ${valor2} > ${valor3}`)
// }  else if (valor2>valor3 && valor2 > valor1 && valor3>valor1){

//     alert(`${valor2} > ${valor1} > ${valor3}`)
// } else{

//     alert(`${valor3} > ${valor2} > ${valor1}`)
// }

// 6. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
// 1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
// calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
// Fórmulas:	
// - para	homens:	(72.7	*	Altura)	– 58	
// - para	mulheres:	(62.1	*	Altura)	– 44.7	

// let sexo = prompt("Digite sua sexo:")
// let altura = Number(prompt("Digite sua altura:"))

// if(sexo === "feminino"){
//     let pesoIdeal = ((62.1 * altura) - 44.7).toFixed(2)
//     alert (`O peso ideal é: ${pesoIdeal}`)
//     // console.log(`O peso ideal é: ${pesoIdeal}`)
// } else if(sexo === "masculino"){
//     let pesoIdeal = ((72.7 * altura) - 58).toFixed(2)
//     alert (`O peso ideal é: ${pesoIdeal}`)
//     // console.log(`O peso ideal é: ${pesoIdeal}`)
// } else {
//     alert("Digite um valor válido")
//     // console.log("Digite um valor válido")
// }

// 7. Escreva	um	programa	para	ler	o	número	de	lados	de	um	polígono	regular	
// e	a	medida	do	ladoO.	(em	cm).	Calcular	e	imprimir	o	seguinte:	
// − Se	o	número	de	lados	for	igual	a	3	escrever	TRIÂNGULO	e	o	valor	da	
// área
// − Se	o	número	de	lados	for	igual	a	4	escrever	QUADRADO	e	o	valor	da	
// sua	área.	
// − Se	o	número	de	lados	for	igual	a	5	escrever	PENTÁGON

// 8. Acrescente	 as	 seguintes	 mensagens	 à	 solução	 do	 exercício	 anterior	
// conforme	o	caso.	
// − Caso	 o	 número	 de	 lados	 seja	 inferior	 a	 3	 escrever	 NÃO	 É	 UM	
// POLÍGONO.	
// − Caso	o	número	de	lados	seja	superior	a	5	escrever	POLÍGONO	NÃO	
// IDENTIFICADO.

// 9. Escreva	um	programa	para	ler	3	valores	inteiros	e	escrever	o	maior	deles.	
// Considere	que	o	usuário	não	informará	valores	iguais.

// 10. Escreva	 um	 programa que	 leia	 as	 medidas	 dos	 lados	 de	 um	 triângulo	 e	
// escreva	se	ele	é	Equilátero,	Isósceles	ou	Escaleno.	Sendo	que:	
// − Triângulo	Equilátero:	possui	os	3	lados	iguais.	
// − Triângulo	Isóscele:	possui	2	lados	iguais.	
// − Triângulo	Escaleno:	possui	3	lados	diferentes.

// let lado1 = "24"
// let lado2 = "25"
// let lado3 = "23"

// if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3) {
//     console.log("Triangulo Escaleno")
// } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 === lado3) 
// {
//     console.log("Triangulo Escaleno")
// } else {
//     console.log("Triangulo Isóscele")    
// }


// 11. Escreva	 um	 programa	 que	 leia	 o	 valor	 de	 3	 ângulos	 de	 um	 triângulo	 e	
// escreva	 se	 o	 triângulo	 é	 Acutângulo,	 Retângulo	 ou	 Obtusângulo.	 Sendo	
// que:	
// − Triângulo	Retângulo:	possui	um	ângulo	reto.	(igual	a	90º)
// − Triângulo	Obtusângulo:	possui	um	ângulo	obtuso.	(maior	que90º)	
// − Triângulo	Acutângulo:	possui	três	ângulos	agudos.	(menor	que	90º)



// 7. Escreva	um	programa	para	ler	o	número	de	lados	de	um	polígono	regular	
// e	a	medida	do	ladoO.	(em	cm).	Calcular	e	imprimir	o	seguinte:

// − Se	o	número	de	lados	for	igual	a	3	escrever	TRIÂNGULO	e	o	valor	da	
// área
// − Se	o	número	de	lados	for	igual	a	4	escrever	QUADRADO	e	o	valor	da	
// sua	área.	
// − Se	o	número	de	lados	for	igual	a	5	escrever	PENTÁGON


let numeroDeLados = Number(prompt("Digite o numero de lados"))
let medidaDoLado = Number(prompt("Digite a medida do lado"))
if(numeroDeLados === 3){
   let area = ((medidaDoLado*medidaDoLado)* 3**0.5)/4
   alert(`Triangulo de área : ${area}`)
} else if (numeroDeLados === 4){
    let area =  medidaDoLado*medidaDoLado
    alert(`Quadrado de área : ${area}`)

} else if (numeroDeLados===5){
    let area = (5*medidaDoLado*medidaDoLado)/2.906
    alert(`Pentagono de área : ${area}`)
} else {
    alert("Digite um valor valido")
}