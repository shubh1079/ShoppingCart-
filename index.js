cartItems = [];
    function addToCart(){
        console.log("execute")
        let listOfItems = document.getElementById("listOfItems")
        listOfItems.innerHTML += `
            <li id=${cartItems.length}>0
                <button onclick="increase(${cartItems.length})">+</button>
                <button onclick="decrease(${cartItems.length})">-</button>
                <button onclick="deleteItem(${cartItems.length})">X</button>
            </li>
        `;

        
        cartItems.push(listOfItems.innerHTML)

        console.log(cartItems)
    }
    function increase(id){
        let item = document.getElementById(id)
        let itemValue = item.innerText
        let value = parseInt(itemValue)

        value = value + 1
        item.innerHTML = `
            ${value}
            <button onclick="increase(${id})">+</button>
            <button onclick="decrease(${id})">-</button>
            <button onclick="deleteItem(${id})">X</button>
        `
        totalItem()
    }
    function decrease(id){
        let item = document.getElementById(id)
        let itemValue = item.innerText
        let value = parseInt(itemValue)

        if(value > 0){
            value = value - 1
            item.innerHTML = `
                ${value}
                <button onclick="increase(${id})">+</button>
                <button onclick="decrease(${id})">-</button>
                <button onclick="deleteItem(${id})">X</button>
            `
        }
         totalItem()
    }

    function deleteItem(id){
        let item = document.getElementById(id)
        item.remove()
    }

    function reset(){
        let listOfItems = document.getElementById("listOfItems")
        listOfItems.innerHTML = ""
        let totalItem = document.getElementById("totalItem");
        totalItem.innerText="0";
    }

    function totalItem(){
        let totalItem = document.getElementById("totalItem")

        let total = 0
        for(let i = 0; i < cartItems.length; i++){
            let item = document.getElementById(i)
            let itemValue = item.innerText
            let value = parseInt(itemValue)
            total = total + value
        }
        totalItem.innerText = total
    }