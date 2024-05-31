
function carregarConteudo(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('conteudo').innerHTML = html;
        })
        .catch(error => console.error ('Erro ao carregar o conteúdo.', error))
}



function carregarHeader(url){
    fetch(url)
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
    })
    .catch(error => console.error(error))
}


function carregarIntro(url){
    fetch(url)
    .then(response => response.text())
    .then(html => {
        document.getElementById('intro').innerHTML = html;
    })
    .catch(error => console.error(error))
}

carregarConteudo('frontEnd/front01.html');
carregarHeader('header.html');
carregarIntro('intro.html');



