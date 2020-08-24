/* EX1) Programar para que o usuário digite 5 números e caso sejam
pares, mostre a média deles. Se algum número digitado não for par,
ao final não será mostrada a média e sim uma mensagem “Um dos
números digitados era ímpar”*/

function calcularMedia() {
    //pegar inputs do DOM
    var n1 = Number(document.getElementById("num1").value)
    var n2 = Number(document.getElementById("num2").value)
    var n3 = Number(document.getElementById("num3").value)
    var n4 = Number(document.getElementById("num4").value)
    var n5 = Number(document.getElementById("num5").value)
    var resFinalMediaPares = document.getElementById("resultadoMediaPares")

    if (n1 % 2 == 0 && n2 % 2 == 0 && n3 % 2 == 0 && n4 % 2 == 0 && n5 % 2 == 0) {
        console.log("soma=" + (n1 + n2 + n3 + n4 + n5) / 5)
        resFinalMediaPares.innerHTML = `Média calculada: ${(n1 + n2 + n3 + n4 + n5) / 5}.`
    } else {
        resFinalMediaPares.innerHTML = `Um dos números digitados é ímpar.`
    }
}


/* EX2) Joãozinho mede 1,75m de altura e cresce 1 cm por ano,
enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3 cm
por ano. Faça um programa que calcule e mostre em quantos anos
Pedrinho será mais alto que Joãozinho.*/

function calcularAltura() {
    //pegar id para imprimir resultado
    var resultadoFinalAltura = document.getElementById("resultadoAltura")
    var alturaJoao = 175
    var alturaPedro = 160
    var contadorAnos = 0

    while (alturaPedro <= alturaJoao) {
        alturaJoao += 1
        alturaPedro += 3
        contadorAnos++
    }
    resultadoAltura.innerHTML = `Pedrinho irá ultrapassar a altura de Joãozinho após ${contadorAnos} anos. Após este período, Pedrinho terá ${alturaPedro / 100}m, e Joãozinho terá ${alturaJoao / 100}m.`
}


/* EX3) Fazer um programa no qual o usuário deve montar uma salada
de frutas com uma cereja no final. Deve ser perguntado em
sequência “Qual fruta adicionar? “. Quando for adicionado a cereja,
finalizar com a frase “Sua salada de frutas está pronta!” */
// Ex3 --> solucao com promp e alert
// function adicionarFruta() {
//     var encontraCereja = 0
//     for (i = 0; encontraCereja != 1; i++) {
//         var fruta = window.prompt("Adicione uma fruta")
//         if (fruta == "cereja") {
//             encontraCereja++
//             window.alert("Você adicionou cereja. Sua salada de frutas está pronta!")
//         } else if (fruta !== "cereja") {
//             window.prompt("Proxima fruta")
//         }
//     }
// }

// Ex3 --> solucao com inputs do html
function adicionarFruta() {
    var resultadoSalada = document.getElementById("resultadoSaladaFrutas")
    var encontraCereja = false
    for (i = 0; encontraCereja == false; i++) {
        var fruta = document.getElementById("frutaAdicionada").value
        if (fruta !== "cereja") {
            resultadoSalada.innerHTML = "Qual fruta você quer agora?"
            document.getElementById("frutaAdicionada").value = ""
            break
        } else if (fruta == "cereja") {
            resultadoSalada.innerHTML = "Você adicionou cereja. Sua salada de frutas está pronta!"
            encontraCereja = true
            break
        }
    }
}

/* EX4) Desenvolver um programa no qual o usuário digite o número de
multas que deseja cadastrar e para cada multa deve colocar o valor
em reais e os pontos perdidos na carteira de habilitação. Ao final,
mostrar o somatório das multas e dos pontos, caso os pontos
passem de 21, exibir a mensagem “Você está irregular”, senão,
exibir “Você está regular”. */

function getNumMultas() {
    let totalMultas = document.getElementById("numMultas").value
    let contadorMultas = 0
    let somaValorMultas = 0
    let somaTotalPontos = 0

    while (totalMultas > contadorMultas) {
        somaValorMultas += Number(prompt("Valor da multa em reais: "))
        somaTotalPontos += Number(prompt("Número de pontos perdidos na CNH: "))
        totalMultas--
    }

    let resFinalMultas = document.getElementById("resultadoMultas")
    resFinalMultas.innerHTML = `Valor total devido em multas: R$${somaValorMultas} reais.  Total de pontos perdidos na CNH: ${somaTotalPontos}. `

    if (somaTotalPontos > 21) {
        resFinalMultas.innerHTML += `Você está IRREGULAR.`
    } else {
        resFinalMultas.innerHTML += `Você está REGULAR.`

    }
}