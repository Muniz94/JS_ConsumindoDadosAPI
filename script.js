// Síncrono

console.log('Mandando oi pro amigo!');

function mandaMensagem() {
  console.log('Tudo bem?');
  console.log('Vou te mandar uma solicitação!');
  console.log('Solicitação recebida!');
}

mandaMensagem();

console.log('Tchau, Tchau!');

// Assíncrono : o setTimeOut faz com que a linha 25 seja executada por último,
// chama a função após 5000ms no caso (5 segundos)

console.log('Mandando oi pro amigo!');

function mandaMensagem() {
  console.log('Tudo bem?');
  console.log('Vou te mandar uma solicitação!');
  console.log('Solicitação recebida!');
}

setTimeout(mandaMensagem, 5000); // isso é um callback
console.log('Tchau, Tchau!');
