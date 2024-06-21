const perfil = document.querySelector('.profile');

function getApiGitHubProfile() {
    fetch('https://api.github.com/users/PedroMaiaAlves')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
            
            
            let profilePhotoDiv = document.createElement('div');
            profilePhotoDiv.classList.add('perfilEfoto');

            profilePhotoDiv.innerHTML = `
                <div class="centroResponsivo">
                    <img class="imgPerfil" src="${data.avatar_url}" alt="Foto de Perfil">
                </div>
            `;

            perfil.appendChild(profilePhotoDiv);

            
            let profile = document.createElement('div');
            profile.classList.add('nomeEtexto');

            profile.innerHTML = `
                <a class="fs-1" href="https://github.com/PedroMaiaAlves">${data.name}</a>
                <p class="textoPerfil">${data.bio}</p>
            `;

            perfil.appendChild(profile);

            
            let socialDiv = document.createElement('div');
            socialDiv.classList.add('redesSociais');

            socialDiv.innerHTML = `
                <p>Redes Sociais</p>
                <a href="${data.html_url}">GitHub</a>
                <a href="https://www.instagram.com/sloowty/">Instagram</a>
                <a href="https://www.linkedin.com/in/pedro-henrique-maia-alves-978397291/">Linkedin</a>
            `;

            perfil.appendChild(socialDiv);
        })
        .catch(error => {
            console.error('Erro ao buscar os dados do GitHub:', error);
        });
}

getApiGitHubProfile();
