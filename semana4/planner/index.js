function adicionarTarefa() {
    const tarefa = document.getElementById('tarefa')
    const semana = document.getElementById('dias-semana')

    if (tarefa.value !== "") {
        document.getElementById(`${semana.value}`).innerHTML += `<p class="nova-tarefa" onclick="tarefaRealizada(this)">${tarefa.value}</p>`
        tarefa.value = ""
    } else {
        alert("Digite uma tarefa!!")
    }
}

function tarefaRealizada(elemento) {
    elemento.style = "text-decoration: line-through"
}

function limparTarefas() {
    let limpar = document.getElementsByClassName('nova-tarefa')

    for (let i of limpar) {
        i.innerHTML = ''
    }
}