const formulario = document.querySelector("#formulario")
const pintarTodo = document.querySelector("#pintarTodo")
const template = document.querySelector("#template").content
const alerta = document.querySelector(".alert")

let tareas = []

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    alerta.classList.add("d-none")

    const formData = new FormData(formulario)

    const [tarea] = [...formData.values()]

    if (!tarea.trim()) {
        alerta.classList.remove("d-none")
        return
    }

    agregarTodo(tarea)
    pintarTodos()
    limpiarFormulario()
})

const limpiarFormulario = () =>{
    formulario.reset()
}


const agregarTodo = (tarea) => {
    const objTarea = {
        nombre: tarea,
        id: `${Date.now()}`
    }

    tareas.push(objTarea)
}

const pintarTodos = () => {
    localStorage.setItem("tarea", JSON.stringify(tareas))

    pintarTodo.textContent = ""

    const fragment = document.createDocumentFragment()

    tareas.forEach(item => {
        const clone = template.cloneNode(true)
        clone.querySelector(".lead").textContent = item.nombre
        clone.querySelector(".btn").dataset.id = item.id

        fragment.appendChild(clone)

    })

    pintarTodo.appendChild(fragment)
}

document.addEventListener("click", (e) => {
    if (e.target.matches(".btn")) {
        tareas = tareas.filter(item => item.id !== e.target.dataset.id)
        pintarTodos()
    }
})

document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("tarea")) {
        tareas = JSON.parse(localStorage.getItem("tarea"))
        pintarTodos()
    }
})