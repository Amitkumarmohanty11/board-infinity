

//adding an item


//attach a event listner submit


//capture the user's input


//append the text and button in the list item 



//append  alist item into the unordered list


//variables
const form = document.getElementById('addForm')

const todoList = document.getElementById('items')
//For Search bar
const filter = document.getElementById('filter')

//event listeners
form.addEventListener('submit', addTodo)
//for delete button 
todoList.addEventListener('click', removeItem)
//search bar ebent listeners
filter.addEventListener('keyup', filterTodos)


//function

function addTodo(e) {
    e.preventDefault()
    //alert('Submit')

    //get the  input value from the user

    const newTodo = document.getElementById('item').value
    console.log(newTodo);

//create a new li element
const li = document.createElement('li')

//add all the classes to the  new todo
li.className="list-group-item"

//create a new delet button
const deleteBtn = document.createElement('button')

//add classes to the  button
deleteBtn.className = "btn btn-danger btn-sm float-end delet"

// add text to delet button
deleteBtn.textContent = 'Delete'

//add the new todo to li element
li.textContent = newTodo

//append the delete  button to li element
li.append(deleteBtn)

//append li to todolist
todoList.append(li)

 document.getElementById('item').value = ''
}

function removeItem(e){
    
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure, you want to delete this todo?')){
            //console.log(e.target)
            let li = e.target.parentElement
            todoList.removeChild(li)
        }
    }
}

function filterTodos(e){
    let searchedText = e.target.value.toLowerCase()
    let todos = todoList.getElementsByTagName('li')

    //console.log(todos);
    //convert html collection into array
     Array.from(todos).forEach(function (todo, index){
        //console.log(todo.firstChild.textContent)
        let todoText = todo.firstChild.textContent

        if(todoText.toLowerCase().indexOf(searchedText) != -1){
            todo.style.display = 'block'
        }else{
            todo.style.display = 'none'
        }
     })


}