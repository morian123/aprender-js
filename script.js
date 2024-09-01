/*  const butao = document.getElementById('butao');
const paragrafo = document.getElementById('paragrafo');

butao.addEventListener('click', () => {
    paragrafo.innerHTML = "Você clicou no botao"
})
 
 */










/* 
const paragrafo = document.getElementById('paragrafo')
const number = document.getElementById('input').value
const butao = document.getElementById('butao')

butao.addEventListener('click', () => {
    const number = parseInt(input.value) //serve para converter um valor do input para um numero inteiro, fazendi assim o numero ser transformado para IMPAR ou PAR.
    if (number %2 === 0){
        paragrafo.innerHTML = "O número é par"
    }  else {
        paragrafo.innerHTML = "O número é ímpar"
    }
        alert('não tem nenhum numero nesta caixa. Ponha algum e pare de ser burro')
        return
}) */






/* 
const idadeDigitada = document.getElementById('idade')
const botao = document.getElementById('botao')
const paragrafo = document.getElementById('paragrafo')

botao.addEventListener('click', () => {
    if(idadeDigitada >=70){
        paragrafo.innerHTML = "voce ja pode dirigir, se aposentar e nao e obrigado a votar  "
    } else if (idadeDigitada >=65){
        paragrafo.innerHTML = "voce ja pode dirigir, votar e pode se aposentar"
    } else if (idadeDigitada >=18){
        paragrafo.innerHTML = "voce pode dirigir e votar, mas nao pode se aposentar"
    } else if (idadeDigitada <18){
        paragrafo.innerHTML = "voce nao pode dirigir nem votar, nem se aposentar"
    }
}) 

 */




/* const botao = document.getElementById('botao');
const numero = document.getElementById('numero');
const numeroDivisor = document.getElementById('divisores');
    
botao.addEventListener('click', () => {
      let divisores = ''; // criamos uma variável para armazenar os divisores
      for (let i = 3; i <= 100; i++) {
        if (i % 3 === 0) {
            divisores += `${i} `; // adicionamos o divisor à variável
        }
    }
    numeroDivisor.innerText = divisores //sempre tem que deixar ele fora do laço de repetição
})
 */





