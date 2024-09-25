// list of the tasks on the todo list
let items = [];
// task name
const input = document.getElementById("itemInput");
// task priority
const prio = document.getElementById("priority");
// the content
const itemsDiv = document.getElementById("items");
// local storage key
const storageKey = "items";

// the todo list entry object which stores the name and the priority of the task
function entry(task, priority){
    this.task = task;
    this.priority = priority;
}

// renders the tasks on the screen
function renderItems(){
    itemsDiv.innerHTML = null;
    // loops through task list
    for(const[idx, item] of Object.entries(items)){
        const container = document.createElement("p");
        container.style.marginBottom = "2vh";
        //gets the task name and color codes it based on priority
        const text = document.createElement("span");
        text.textContent = item.task;
        if(item.priority == "high"){
            text.style.color = 'red';
        }
        else if(item.priority == 'medium'){
            text.style.color = 'orange';
        }
        else{
            text.style.color = 'green';
        }
        // creates the delete button
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx);
        // renders the list onto the screen
        container.appendChild(text);
        container.appendChild(button);
        itemsDiv.appendChild(container);
    }
}

// loads unfinished tasks from local storage
function loadItems(){
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) {
        items = JSON.parse(oldItems);
        renderItems();
    }
}

//saves unfinished tasks to the local storage
function saveItems(){
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);
    
}

// adds the entry to the task list
function addItem(){
    const value = input.value
    const entry1 = new entry(value, prio.value);
    if(!value){
        alert("item is empty");
        return;
    }
    items.push(entry1);
    renderItems();
    input.value = "";
    saveItems();
}

// removes the entry
function removeItem(idx){
    items.splice(idx, 1);
    renderItems();
    saveItems();
}

// loads the entries as soon as the html has loaded
document.addEventListener("DOMContentLoaded", loadItems());