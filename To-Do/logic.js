const input = document.querySelector(".inputField input");
const addB = document.querySelector(".inputField button");
const todoList =document.querySelector(".todoList");
const deleteAll =document.querySelector(".footer button");

// Adding the todo
input.onkeyup = () =>{
    let todo = input.value;
    if(todo.trim()!= 0) // if no space than active
    {addB.classList.add("active");}
    else 
    {addB.classList.remove("active");}
}

addTodo();

addB.onclick = () => {
    let todo = input.value;
    let getData =localStorage.getItem("New Todo");
    if(getData == null)
    {
        list =[]; // emoty array
    }
    else 
    {
        // parse converts string into objects
        list =JSON.parse(getData);
    }
    list.push(todo);
    localStorage.setItem("New Todo",JSON.stringify(list));
    addTodo();
    // once added again inactive the button
    addB.classList.remove("active");
}

function addTodo() {
    let data = localStorage.getItem("New Todo");
    if(data == null)
    {
        list =[];
    }
    else 
    {
        list = JSON.parse(data);
    }
    const pendingTask =document.querySelector(".pendingTasks");
    pendingTask.textContent =list.length;
    if(list.length > 0)
    {deleteAll.classList.add("active");}
    else
    {deleteAll.classList.remove("active");}
    let newLiTag ="";
    list.forEach((element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
      });
    todoList.innerHTML = newLiTag;
    input.value = "";
}
// delete task function
// we delete by the unique index
function deleteTask(index)
{
  let data =localStorage.getItem("New Todo");
  list =JSON.parse(data);
  list.splice(index,1); // deleting a specific data
  // update data after deleting 
  localStorage.setItem("New Todo",JSON.stringify(list));
  // show the list
  addTodo();
}

deleteAll.onclick =() =>{
    list =[];// empty list
    // updating a localstorage with empty array
    localStorage.setItem("New Todo", JSON.stringify(list));
    // display
    addTodo();
}
