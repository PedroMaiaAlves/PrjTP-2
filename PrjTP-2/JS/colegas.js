const colegasList = document.querySelector('.colegasList');

function getApiJson() {

  // Cole Aqui o Link do Replit que você forkeou
  fetch('https://078b19cc-69df-41c5-8310-e676363442ac-00-35f989z8qymnk.spock.replit.dev/colegas') // Cole Aqui o Link do Replit que você forkeou
  // Cole Aqui o Link do Replit que você forkeou

    .then(async res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      let data = await res.json();

      data.forEach((colega) => {
        let colegaDiv = document.createElement('div');
        colegaDiv.classList.add('col-xxl-4', 'col-xl-12');

        colegaDiv.innerHTML = `
          <img class="imgPerfil" src="${colega.foto}" alt="Foto de Perfil">
          <a href="${colega.git}">${colega.nome}</a>
        `;

        colegasList.appendChild(colegaDiv);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar os dados do GitHub:', error);
    });
}

getApiJson();
