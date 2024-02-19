let todo=[];
function submission(){
    let x=document.getElementById('data').value;
    todo.push(x);
    
    display(); 
}
function removeElement(index) {
    // Check if the index is valid
    if (index >= 0 && index < todo.length) {
        // Remove the element at the specified index
        todo.splice(index, 1);
        // Update the display
        display();
    } else {
        console.error("Invalid index");
    }
}

function display() {
    let list = document.getElementById('arrayList');
    // Clear the existing list
    list.innerHTML = '';

    // Add each element as a separate list item
    for (let j = 1; j < todo.length; j++) {
        let listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(todo[j]));
        
        // Add a button to remove the element at this index
        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = function() {
            removeElement(j);
        };
    
        listItem.appendChild(removeButton);
        list.appendChild(listItem);
    }
}

// Example: Remove the element at index 1
removeElement();
submission();
