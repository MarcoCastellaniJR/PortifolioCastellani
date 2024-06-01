function carregarConteudo(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('conteudo-central').innerHTML = html;
        })
        .catch(error => console.error ('Erro ao carregar o conteúdo.', error))
}



function carregarHeader(url){
    fetch(url)
    .then(response => response.text())
    .then(html => {
        document.querySelector('header').innerHTML = html;
    })
    .catch(error => console.error(error))
}


function carregarIntro(url){
    fetch(url)
    .then(response => response.text())
    .then(html => {
        document.getElementById('container').innerHTML = html;
    })
    .catch(error => console.error(error))
}

function carregarFooter(url){
    fetch(url)
    .then(response => response.text())
    .then(html => {
        document.querySelector('footer').innerHTML = html;
    })
    .catch(error => console.error(error))
}

//carregarConteudo('frontEnd/front01.html');
carregarHeader('header.html');

