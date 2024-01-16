const input = document.querySelector("input")
const submitBtn = document.querySelector("button")
const todos = document.querySelector("#todos")

function addTodo(){
    // on récupère la valeur de l'input
    const todo = input.value
    console.log("addtodo - todo", todo)
    // on crée une nouvelle entrée (li) dans la liste #todos (qui est une ul)
    const todoRow = createNewRow(todo)
    console.log("addtodo - todoRow", todoRow)
    // on ajoute l'entrée li (appelée todoRow à la listye #todos (ul))
    todos.appendChild(todoRow)
    console.log("appended")
    // une fois cela fait, on efface le contenu de l'input
    input.value = ""

}

function createNewRow(text){
    // on reçoit la valeur text (issue de l'input)
    // on crée un élement <li></li> => createElement n'ajoute pas le tag sur le document, il est juste crée en mémoire  
    const row = document.createElement("li"); // <li></li>
    const todo = document.createElement("span") // <span></span>
    todo.innerHTML = text // <span>text</span>
    // option 2 const todo = document.createTextNode(text);
    const deleteButton = createDeleteButton() // <button>X<button>
    // on ajoute le texte à l'intérieur du tag li
    row.appendChild(todo) // <li><span>text</span></li>
    row.appendChild(deleteButton) // <li><span>text</span><button>X<button></li>
    return row
}


function createDeleteButton(){
    // on crée un bouton qui nous servira à effacer le todo que l'on crée
    const button = document.createElement("button")
    // on lui ajoute du texte, ici "X"
    button.innerHTML = "X"
    // on lui ajoute une classe "delete-btn", pour que l'on puisse le styliser via le css
    button.classList.add("delete-btn")
    button.addEventListener("click", ()=> removeTodo(button))
    return button
}

function removeTodo(deleteButton){
    // on selectionne le parent du bouton (le texte n'est pas un noeud, juste un texte)
    const todoRow = deleteButton.parentNode // selectionner le parent => <li>
    // ou alors: deleteButton.closest("li")
    todoRow.remove()
}

input.addEventListener("keydown", (event)=> {
    if(event.key === "enter"){
        event.preventDefault()
        addTodo()
    }
})

submitBtn.onclick = () => addTodo()


class,event,onchange 