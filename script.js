const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    pliq_token: '0e684b95-77a7-400f-a3c4-f668a9d6a2a3', // Adicionando o pliq_token no cabeçalho
  },
  body: JSON.stringify({
    nameImport: 'Teste',
    update_import: '1',
    scheduling: false,
    date_scheduling: '',
    customers: [
      {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: '',
        tags: '{"Tags":""}',
        fk_type_sexo: null,
        number: null,
        properties: [
          {
            id_property: 353,
          },
        ],
        properties_contacts: null,
      },
    ],
    baseLegal: '2',
    flg_email: false,
    flg_popup: true,
    flg_whatsapp: false,
    flg_sms: false,
    flg_manual: true,
    fk_journey: null,
    abstract_validators: false,
    url_survey: 'f499d34bd87b42948b3960b8f6b82e74',
  }),
};

// URL da requisição
const url = 'https://sandbox-api.pliq.io/v2/api/import';

// Executando a requisição
const createAccount = () => {
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
};
