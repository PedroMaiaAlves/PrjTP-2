const repositorio = document.querySelector('.allCards');

function getApiGitHubRepos() {
    fetch('https://api.github.com/users/PedroMaiaAlves/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();

            data.forEach((repo, index) => {
                let repos = document.createElement('div');
                repos.classList.add('card-body');

                repos.innerHTML = `
                    <div class="card" style="width: 15rem;">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description}</p>
                            <a href="repo${index + 1}.html" class="card-link">Saiba Mais</a>
                            <a href="${repo.html_url}" class="card-link">Créditos</a>
                        </div>
                    </div>
                `;

                repositorio.appendChild(repos);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os dados do GitHub:', error);
        });
}

getApiGitHubRepos();
