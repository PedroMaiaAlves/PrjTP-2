Introdução
Nesse trabalho, vamos dar vida ao layout desenvolvido no trabalho anterior, apresentando informações reais sobre as atividades realizadas por você no ambiente do GitHub e outras informações obtidas OBRIGATORIAMENTE a partir de um servidor JSON Server que oferece uma API e servirá como back end da aplicação. 

Você pode evoluir o layout do Trabalho Prático 1 ou começar um projeto de layout do zero. Essa decisão fica a cargo de cada um. Você deverá montar um layout conforme o que foi fornecido para o Trabalho Prático 1 e apresentar funcionalidades que apresentamos neste enunciado.

Para montar a aplicação a ser entregue, você deverá utilizar como base o projeto JSONServer disponível no ReplitLinks to an external site. e se cadastrar no GitHub para que possa fazer a integração, visualizando seus repositórios.  

IMPORTANTE: O trabalho deve ter foco exclusivamente na construção de um site pessoal com informações obtidas do GitHub e do JSONServer. NÃO SERÃO ACEITOS TRABALHOS COM OUTRA TEMÁTICA E COM OUTRAS API. 

JSONServer
O JSONServer oferece uma API baseada no padrão RESTful para acesso e manipulação de dados dispostos em um arquivo JSON no servidor. Um exemplo funcional do JSONServerLinks to an external site. está acessível no ambiente do Replit e recomendamos fortemente que você utilize como base para o seu trabalho. Para isso, basta clonar (procedimento de FORK no Replit) e alterar o arquivo db.json, colocando os seus dados. 

API do GitHub
Dentre as funcionalidades providas pela API do GitHub, destacamos os seguintes recursos que serão utilizados nesse projeto:  

Informações do Usuário - fornece as informações públicas de um usuário do GitHub;
Repositórios do usuário - fornece uma lista dos repositórios de um usuário;
Navegue pela documentação da API do GitHub e encontre outras informações que você poderá utilizar na montagem do  seu site pessoal.

Estruturas de Dados
Você deve estruturar os dados para a montagem da sua aplicação. Utilize o projeto de exemplo do JSONServer, faça uma cópia para o seu trabalho. No arquivo db.json, você deve criar as suas estruturas de dados. 

Para a montagem do seu trabalho, deve haver, pelo menos, três estruturas distintas: (1) álbuns, (2) fotos e (3) destaques. As informações básicas e OBRIGATÓRIAS de cada uma das estruturas mencionadas são apresentadas a seguir

ESTRUTURA CONTEÚDOS SUGERIDOS

Identificador do conteúdo (número sequencial)
Título do conteúdo
Descrição do conteúdo
URL da imagem de capa do álbum
URL do conteúdo
 

ESTRUTURA COLEGAS DE TRABALHO

Identificador do colega (número sequencial)
URL da foto do colega
Nome do colega
URL do perfil do colega no GitHub 
 

IMPORTANTE: Caso você não possua repositórios no GitHub, poderá optar por utilizar uma estrutura adicional de REPOSITÓRIOS no JSONServer para armazenar uma lista de repositórios sugeridos que serão exibidos na parte do layout que corresponde aos repositórios do GitHub. Dessa forma, caso opte por essa estrutura, você deverá montar a estrutura de repositórios no JSONServer e inserir os itens que serão exibidos no seu site. Ainda assim, você deverá cadastrar sua conta no GitHub para exibir as informações da primeira parte do layout.    

 

Detalhamento do escopo
O trabalho deve contemplar as seguintes telas e suas funcionalidades descritas em seguida.

Tela principal (index.html)
Cabeçalho com seu nome e menu com outras seções do site 
Seção 1 - Perfil do Usuário - apresentação do seu perfil no GitHub com foto/avatar, nome e sobrenome, descrição, botões de contato (por exemplo, e-mail, Linkedin, etc)
⚠️ Os dados a serem exibidos devem ser obtidos diretamente da API do GitHub.
Seção 2 - Repositórios - grupo de cards com informações de repositórios mantidos pelo aluno no GitHub ou cadastrados em uma estrutura alternativa no JSONServer. (Pelo menos 3 itens)
ORIENTAÇÃO: use componente do bootstrap (detalhes no link)
⚠️ Os dados a serem exibidos devem ser obtidos diretamente da API do GitHub ou via estrutura no JSONServer.
Seção 3 - Conteúdo sugerido - carrossel/slider com conteúdos e respectivas imagens sugeridos pelo aluno (Artigos, vídeos, infográficos, etc) (Pelo menos 5 itens)
ORIENTAÇÃO: use componente do bootstrap (detalhes no link)
⚠️ Os dados a serem exibidos devem ser obtidos de estrutura no JSONServer.
Seção 4 - Colegas de Trabalho - grade com apresentação dos principais colegas de trabalho no curso. (Pelo menos 3 itens)
⚠️ Os dados a serem exibidos devem ser obtidos de estrutura no JSONServer.
Rodapé com informações sobre responsável pelo site (aluno/aluna) 
 

Tela de detalhes do REPOSITÓRIO (repo.html)
Página única que apresenta, de forma dinâmica, as informações de um REPOSITÓRIO específico, cujo código será passado por parâmetro via query string. As informações do repositório devem ser obtidas por meio de API do GitHub e devem contemplar o seguinte: descrição, data de criação, proprietário com imagem/avatar, url de acesso, linguagem principal, lista de tópicos (tags), quantidade de estrelas, observadores e forks, tipo de licença.
A passagem do parâmetros deve acontecer conforme o seguinte exemplo: http://servidor/repo.html?id=xxxx, onde xxxx representa o identificador do repositório no GitHub a ser utilizado para recuperação das informações a serem exibidas. 
 

O fluxo de telas que deve ser implementado na aplicação entregue e os wireframes com os detalhes do escopo são apresentados na imagem a seguir.
