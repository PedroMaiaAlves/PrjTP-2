const carrouselInner = document.querySelector('.carousel-inner');

function getApiJson() {

  // Cole Aqui o Link do Replit que você forkeou
  fetch('https://078b19cc-69df-41c5-8310-e676363442ac-00-35f989z8qymnk.spock.replit.dev/carrousel') // Cole Aqui o Link do Replit que você forkeou
  // Cole Aqui o Link do Replit que você forkeou

  
    .then(async res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      let data = await res.json();

      data.forEach((item, index) => {
        let carrouselItem = document.createElement('div');
        carrouselItem.classList.add('carousel-item');
        if (index === 0) {
          carrouselItem.classList.add('active');
        }

        carrouselItem.innerHTML = `
          <img src="${item.imagem}" class="d-block w-100" alt="${item.descricao}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${item.titulo}</h5>
            <p>${item.descricao}</p>
            <a href="${item.conteudo}" class="btn btn-primary" target="_blank">Ler mais..</a>
          </div>
        `;

        carrouselInner.appendChild(carrouselItem);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar os dados do GitHub:', error);
    });
}

getApiJson();
