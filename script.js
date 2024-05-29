function toggleHidden() {
    const links = document.getElementById("myLinks");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}

function comment() {
    const texto = document.getElementById("texto");
    texto.innerHTML = "Comentário guardado! (com você)";
    setTimeout(() => {texto.innerHTML = ""}, 3000)
}