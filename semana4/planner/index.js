function adicionarTarefa() {
    const tarefa = document.getElementById('tarefa')
    const semana = document.getElementById('dias-semana')
    const horario = document.getElementById('horario')
    const sistemaHorario = document.getElementById('sistema-horario')

    if (tarefa.value !== "") {
        document.getElementById(`${semana.value}`).innerHTML += `<p class="nova-tarefa" onclick="tarefaRealizada(this)">${horario.value} ${sistemaHorario.value} - ${tarefa.value}</p>`
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