const form = getElemetById('search-form');
const searchField = getElemetById('search-keyword');
const responseContainer = getElemetById('response-conteiner');
let searchedForText;

form.addEventListener('submit',function (e){
    e.preventDefault();
    responseContainer.innerHtml = '';
    searchedForText = searchField.value;
    getNews();
})

function getNews () {
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('get','')
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();
}

function handleError () {
    console.log('Se a presentado un error');
}

function addNews () {
    const data = JSON.parse(this.responseText);
    const article = data.response.doc[0];
    const title = article.headline.main;
    const snippet = article.snippet;
    
    console.log(response);
    let li = document.createElement('li');
    li.className = 'articleClass';
    li.innerHTML = snippet;

    responseContainer.appendChild(li);
}