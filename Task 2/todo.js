document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    // This will ensure that the script executes after the HTML document is fully loaded
    (() => {
        let toDoListArray = [];
        const form = document.querySelector(".form");
        const input = form.querySelector(".form__input");
        const ul = document.querySelector(".toDoList");
    
        form.addEventListener('submit', e => {
            e.preventDefault();
            let itemId = String(Date.now());
            let toDoItem = input.value;
            console.log("Adding item to DOM:", itemId, toDoItem);
            addItemToDOM(itemId, toDoItem);
            addItemToArray(itemId, toDoItem);
            input.value = '';
        });
    
        ul.addEventListener('click', e => {
            let id = e.target.getAttribute('data-id')
            if (!id) return
            console.log("Removing item from DOM:", id);
            removeItemFromDOM(id);
            removeItemFromArray(id);
        });
    
        function addItemToDOM(itemId, toDoItem) {
            const li = document.createElement('li')
            li.setAttribute("data-id", itemId);
            li.innerText = toDoItem;
            ul.appendChild(li);
            console.log("Item added to DOM:", itemId, toDoItem);
        }
    
        function addItemToArray(itemId, toDoItem) {
            toDoListArray.push({ itemId, toDoItem});
            console.log("Item added to array:", itemId, toDoItem);
            console.log(toDoListArray);
        }
    
        function removeItemFromDOM(id) {
            var li = document.querySelector('[data-id="' + id + '"]');
            ul.removeChild(li);
            console.log("Item removed from DOM:", id);
        }
    
        function removeItemFromArray(id) {
            toDoListArray = toDoListArray.filter(item => item.itemId !== id);
            console.log("Item removed from array:", id);
            console.log(toDoListArray);
        }
    })();
});
