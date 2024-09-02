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









/* const nome = document.getElementById('name')
const idadeDigitada = document.getElementById('idade');
const botao = document.getElementById('botao');
const paragrafo = document.getElementById('divisores');

botao.addEventListener('click', () => {
    const nomeDigitado = nome.value; // obtém o valor do nome digitado
    const idade = parseInt(idadeDigitada.value); // obtém o valor da idade digitada e converte para um número


  if (idade >= 70) {
    paragrafo.innerHTML = ` Você, ${nomeDigitado}, já pode dirigir, se aposentar e não é obrigado a votar.`; $(nome[''])
  } else if (idade >= 65) {
    paragrafo.innerHTML = `Você, ${nomeDigitado}, já pode dirigir, votar e pode se aposentar.`;
  } else if (idade >= 18) {
    paragrafo.innerHTML = `Você, ${nomeDigitado}, pode dirigir e votar, mas não pode se aposentar.`;
  } else if (idade < 18) {
    paragrafo.innerHTML = `Você, ${nomeDigitado}, não pode dirigir nem votar, nem se aposentar.`;
  }
});
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





