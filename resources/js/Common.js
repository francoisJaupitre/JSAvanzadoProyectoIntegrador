function renderPage(url, articulos = {}) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('load', () => {
        const template = Handlebars.compile(xhr.response);
        document.getElementById("view").innerHTML = template({articulos});

    });
}
