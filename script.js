var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
  .then(resposta => resposta.json())
  .then(r => {
    if (r.erro) {
      throw Error('Esse CEP não existe!'); // CEP válido e inexistente
    } else console.log(r);
    // CEP válido e existente
  })
  .catch(erro => console.log(erro)) // CEP inválido
  .finally(mensagem => console.log('Processamento concluído!'));

  // console.log(consultaCEP); valor da promise
