function criarPost() {

    let tituloPost = document.getElementById('titulo-post')
    let autorPost = document.getElementById('autor-post')
    let conteudoPost = document.getElementById('conteudo-post')
    let imagemPost = document.getElementById('imagem-post')
    let post = document.getElementById('post')

    const postObject = {
        titulo: tituloPost.value,
        autor: autorPost.value,
        conteudo: conteudoPost.value,
        imagem: imagemPost.value
    }


    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""
    imagemPost.value = ""

    post.innerHTML += `<h2>${postObject.titulo}</h2> <h4>${postObject.autor}</h4> <img src=${postObject.imagem}> <p>${postObject.conteudo}</p>`

}

