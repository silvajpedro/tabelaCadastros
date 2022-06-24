
let nomes = []
let idade = []
let telefone = []
let email = []
alert("Bem Vindo ao Sistema de Cadastros CRD")
let yesOrNo = confirm("Deseja fazer o cadastro de alguém?")
let quantity = Number(prompt("Deseja cadastrar quantas pessoas?"))
if(yesOrNo == true){
    for(let i = 1; i <= quantity ; i++){
        nomes[i] = prompt(`Digite o ${i}° nome a ser cadastrado`)
        idade[i] = prompt(`Digite a idade referente ao ${i}° nome cadastrado `)
        telefone[i] = prompt(`Digite o telefone referente a ${i}° pessoa cadastrada`)
        email[i] = prompt()
    }
    
}

let lastConfirm = confirm("Deseja visualizar as pessoas cadastradas??")

if(lastConfirm == true){
    let position = Number(prompt("Qual posição cadastrada deseja visualizar"))
    alert(`A ${position}° posição tem como cadastro: \n Nome:${nomes[position]} \n Idade:${position} \n Telefone:${telefone[position]} \n Email:${email}`)
}
//necessita de alguns ajustes email e ajeitar esse if para fazer o programa finalizar certinho
// linha 14 email e linha 21 if