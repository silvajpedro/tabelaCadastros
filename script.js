let nomes = []
let idade = []
let telefone = []
let email = []
alert("Bem Vindo ao Sistema de Cadastros CRD")
let yesOrNo = confirm("Deseja fazer o cadastro de alguém?")

if (yesOrNo == true) {
    let quantity = Number(prompt("Deseja cadastrar quantas pessoas?"))
    for (let i = 1; i <= quantity; i++) {
        nomes[i] = prompt(`Digite o ${i}° nome a ser cadastrado`)
        idade[i] = Number(prompt(`Digite a idade referente a ${i}° pessoa `))
        telefone[i] = Number(prompt(`Digite o telefone referente a ${i}° pessoa `))
        email[i] = prompt(`Digite o email referente a ${i}° pessoa `)
    }
    let lastConfirm = confirm("Deseja visualizar as pessoas cadastradas??")

    if (lastConfirm == true) {
        while (lastConfirm == true) {
            let position = Number(prompt("Qual posição cadastrada deseja visualizar"))
            alert(`A ${position}° posição tem como cadastro: \n Nome:${nomes[position]} \n Idade:${idade[position]} \n Telefone:${telefone[position]} \n Email:${email[position]}`)
            lastConfirm = confirm("Deseja visualizar outro cadastro?")
            if (lastConfirm == false) {
                alert("Obrigado por utilizar nosso sistema ;D")
            }
        }
    } else {
        alert("Você cadastrou as pessoas porém decidiu não visualiza-lás")
    }
} else {
    alert("Você não cadastrou ninguém ;( ")
}

console.log(nomes)
console.log(idade)
console.log(telefone)
console.log(email)
// consoles apenas para fins de consulta
// codigo ainda necessita de revisao feito apenas para fins práticos