function adicionarTarefa() {
    const tarefa = document.getElementById('tarefa')
    const semana = document.getElementById('dias-semana')

    if (tarefa.value !== "") {
        if (semana.value === 'domingo') {
            document.getElementById('domingo').innerHTML += `<p>${tarefa.value}</p>`
            tarefa.value = ""
        } else if (semana.value === 'segunda') {
            document.getElementById('segunda').innerHTML += `<p>${tarefa.value}</p>`
            tarefa.value = ""
        } else if (semana.value === 'terca') {
            document.getElementById('terca').innerHTML += `<p>${tarefa.value}</p>`
            tarefa.value = ""
        } else if (semana.value === 'quarta') {
            document.getElementById('quarta').innerHTML += `<p>${tarefa.value}</p>`
            tarefa.value = ""
        } else if (semana.value === 'quinta') {
            document.getElementById('quinta').innerHTML += `<p>${tarefa.value}</p>`
            tarefa.value = ""
        } else if (semana.value === 'sexta') {
            document.getElementById('sexta').innerHTML += `<p>${tarefa.value}</p>`
            tarefa.value = ""
        } else if (semana.value === 'sabado') {
            document.getElementById('sabado').innerHTML += `<p>${tarefa.value}</p>`
            tarefa.value = ""
        }
    } else {
        alert("Digite uma tarefa!!")
    }
}