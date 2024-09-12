// Executando a requisição
function createAccount() {
  if (!document.getElementById('name').value) return alert('Insira um nome');
  if (!document.getElementById('email').value) return alert('Insira um email');
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      pliq_token: '0e684b95-77a7-400f-a3c4-f668a9d6a2a3', // Adicionando o pliq_token no cabeçalho
    },
    body: JSON.stringify({
      nameImport: 'Teste',
      update_import: 2,
      customers: [
        {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
        },
      ],
      baseLegal: 6,
      flg_popup: true,
      flg_manual: true,
      abstract_validators: false,
      url_survey: 'f499d34bd87b42948b3960b8f6b82e74',
    }),
  };

  // URL da requisição
  const url = 'https://sandbox-api.pliq.io/v2/api/import';
  fetch(url, requestOptions)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text(); // Retorna a resposta como texto
    })
    .then((text) => {
      try {
        const data = JSON.parse(text); // Tenta converter para JSON
        console.log('Success:', data);
      } catch (error) {
        console.error('Could not parse JSON:', text); // Exibe a resposta bruta em caso de erro
      }
    })
    .catch((error) => console.error('Error:', error));
}
