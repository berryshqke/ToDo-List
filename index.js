let items = [];
const input = document.getElementById("itemInput");
const itemsDiv = document.getElementById("items");

function loadItems(){
    
}

function renderItems(){
    itemsDiv.innerHTML = null;
    for(const[idx, item] of Object.entries(items)){
        const container = document.createElement("p");
        container.style.marginBottom = "2vh";

        const text = document.createElement("span");
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx);

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}

function saveItems(){

}

function addItem(){
    const value = input.value;
    if(!value){
        alert("item is empty");
        return;
    }
    items.push(value);
    renderItems();
    input.value = "";
}

function removeItem(idx){
    items.splice(idx, 1);
    renderItems();
}
