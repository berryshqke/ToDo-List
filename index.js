let items = ["task1", "task2"];
const itemsDiv = document.getElementById("items")

function loadItems(){
    itemsDiv.innerHTML = null;
    for(const[idx, item] of Object.entries(items)){
        const container = document.createElement("div");
        //container.style.marginBottom = "10vh";

        const text = document.createElement("p");
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx);

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}

function renderItems(){
    loadItems();
}

function saveItems(){

}

function addItem(){

}

function removeItem(){

}

renderItems();