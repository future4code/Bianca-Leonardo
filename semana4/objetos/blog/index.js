function criarPost (){
    let tituloPost = document.getElementById('titulo-post')
    let autorPost = document.getElementById('autor-post')
    let conteudoPost = document.getElementById('conteudo-post')
    let post = document.getElementById('post')
    
    post.innerHTML = `<h2>${tituloPost.value}</h2> <h4>${autorPost.value}</h4> <p>${conteudoPost.value}</p>`
    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""
    
    // console.log('funcionou')
}