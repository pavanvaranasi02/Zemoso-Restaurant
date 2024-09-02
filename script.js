const tableOrders = {
    "Table-1": [
        { item: "Veg Fried Rice", price: 150, servings: 1 },
        { item: "Spring Rolls", price: 120, servings: 1 }
    ],
    "Table-2": [],
    "Table-3": [
        { item: "Veg Noodles", price: 140, servings: 2 }
    ]
};

// update the total price for billing.
const updateTotal = (tableId, index, servings) => {
    const order = tableOrders[tableId][index];
    order.servings = parseInt(servings);  // Parse the servings as an integer

    // Update the total price for the item
    const totalItemPrice = order.price * order.servings;
    document.getElementById(`total-${tableId}-${index}`).textContent = totalItemPrice.toFixed(2);

    // Recalculate and update the total price for the table
    const totalPrice = tableOrders[tableId].reduce((acc, curr) => acc + (curr.price * curr.servings), 0);
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

// delete or cancel any menu item from the table
const deleteItem = (tableId, index) => {
    // Remove the item from the array
    tableOrders[tableId].splice(index, 1);

    // Update the UI
    updateTableUI(tableId);
}

// pop-up details of pricing and number of servings are updated.
const updateTableUI = (tableId) => {
    const modal = document.querySelector('.table-info-pop-up');
    modal.id = tableId;
    const orders = tableOrders[tableId];
    const orderDetails = document.getElementById('orderDetails');
    const totalPriceElement = document.getElementById('totalPrice');

    // Clear previous order details
    orderDetails.innerHTML = '';

    // Populate order details
    let total = 0;
    orders.forEach((order, index) => {
        const row = `<tr>
                        <td>${index + 1}</td>
                        <td>${order.item}</td>
                        <td>${order.price}</td>
                        <td>
                            <input type="number" class="numServingsInput" min="1" list="servings-options" value="${order.servings}" id="servings-${tableId}-${index}" onchange="updateTotal('${tableId}', ${index}, this.value)">
                        </td>
                        <td id="total-${tableId}-${index}">${(order.price * order.servings).toFixed(2)}</td>
                        <td><button onclick="deleteItem('${tableId}', ${index})">Delete</button></td>
                     </tr>`;
        orderDetails.innerHTML += row;
        total += order.price * order.servings;
    });

    // Update total price
    totalPriceElement.textContent = total.toFixed(2);

    // If no items left, consider closing the modal or showing a message
    // if (orders.length === 0)

    // also update outside table list dynamically
    updateTableListOutside();
    rebindTableClickEvents();
}

// Tables section beside of menu section is updated.
const updateTableListOutside = () => {
    const tableList = document.querySelector('.table-list');
    tableList.innerHTML = ''; // Clear existing tables

    Object.keys(tableOrders).forEach((tableId, index) => {
        const orders = tableOrders[tableId];
        const totalCost = orders.reduce((acc, order) => acc + order.price * order.servings, 0);
        const totalItems = orders.reduce((acc, order) => acc + order.servings, 0);

        // Create the div for each table
        const tableDiv = document.createElement('div');
        tableDiv.className = 'table-i';
        tableDiv.id = tableId;
        tableDiv.innerHTML = `<h2>Table-${index + 1}</h2>
                              <p>Rs. ${totalCost.toFixed(2)} | Total Items: ${totalItems}</p>`;
        tableDiv.setAttribute("draggable", "false");
        // Append to the table list
        tableList.appendChild(tableDiv);
    });
}

// Very Hard to understand if it is not functioning properly.
// Even though the table is updated time to time, we can not listen to events 
// because of dom changes, so setting up events after dom is manipulated.
const rebindTableClickEvents = () => {
    const tableItems = document.querySelectorAll('.table-i');
    tableItems.forEach(item => {
        item.addEventListener('click', () => {
            const tableId = item.querySelector('h2').textContent.split(' ')[0];
            openModal(tableId);
        });
    });

    tableItems.forEach(table => {
        table.addEventListener('dragover', (event) => {
            event.preventDefault(); // Necessary to allow dropping
        });
        table.addEventListener('drop', (event) => {
            event.preventDefault();
            const menuItemId = event.dataTransfer.getData('text');
            const menuItem = document.getElementById(menuItemId);
            if (!menuItem) {
                console.error('Dragged item not found in the DOM');
                return;
            }
            const dishName = menuItem.querySelector('h2').textContent;
            const priceElement = menuItem.querySelector('p.price');
            if (!priceElement) {
                console.error('Price element not found in the dragged item');
                return;
            }
            const priceText = priceElement.textContent;
            const matches = priceText.match(/[\d\.]+/);
            if (!matches || matches.length === 0) {
                console.error('No price information found in the dragged item');
                return;
            }
            const price = parseFloat(matches[0]);
            const item = {
                item: dishName, 
                price: price,
                servings: 1 // Default servings
            };
            const tableId = table.id;
            addOrderToTable(tableId, item);
        });
    });


};

// openModal function to open pop-up
function openModal(tableId) {
    // event.preventDefault();
    // update table ui
    updateTableUI(tableId);

    // Show the modal
    document.querySelector('.table-info-pop-up').style.display = 'block';
    document.querySelector('.flex-app').style.opacity = 0.4;
}

// Function to close the modal
function closeModal() {
    let modal = document.querySelector('.table-info-pop-up');
    let flexApp = document.querySelector('.flex-app');

    // also update outside table list dynamically
    updateTableListOutside();
    rebindTableClickEvents();

    modal.style.display = 'none';
    flexApp.style.opacity = 1;
    flexApp.style.backgroundColor = "white";
}

// Function to add dragged menu item to tableOrders tableId.
function addOrderToTable(tableId, order) {
    // Check if the order item already exists in the table
    let exists = tableOrders[tableId].some(existingOrder => existingOrder.item === order.item);
    
    if (exists) {
        alert('This item is already in the table!');
    } else {
        if (!tableOrders[tableId]) {
            tableOrders[tableId] = [];
        }
        tableOrders[tableId].push(order);
        updateTableUI(tableId); // Refresh the table orders UI
    }
}

// To clear the tableId table and add the totalcost of the table to todays profit.
function resetTableInfo(tableId) {
    // clear and clean the table.
    tableOrders[tableId] = [];

    // get the total cost to add it into total profit for the day.
    const totalCost = parseFloat(document.querySelector('#totalPrice').textContent);
    const todaysProfit = document.querySelector('.total-profit');
    let todaysProfitNum = parseFloat(todaysProfit.textContent);
    todaysProfitNum += totalCost;
    todaysProfit.textContent = todaysProfitNum;

    // update ui
    updateTableUI(tableId);
    updateTableListOutside();
    rebindTableClickEvents();

    // notify waiter tableId table is free now.
    alert(`${tableId} is now free and is ready to serve customers.`);
}

// Helper function to escape regular expression characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

document.addEventListener("DOMContentLoaded", () => {
    const tableSearchInput = document.querySelector(".table-search");
    const tableListContainer = document.querySelector(".table-list");
    
    updateTableListOutside();
    rebindTableClickEvents();

    let debounceTimer;
    function searchTables() {
        let searchText = tableSearchInput.value.toLowerCase();
        tableListContainer.innerHTML = ''; // Clear existing table list
        let found = false;
    
        Object.keys(tableOrders).forEach((tableId, index) => {
            if (tableId.toLowerCase().includes(searchText)) {
                found = true;
                const orders = tableOrders[tableId];
                const totalCost = orders.reduce((acc, order) => acc + order.price * order.servings, 0);
                const totalItems = orders.reduce((acc, order) => acc + order.servings, 0);
                const div = document.createElement('div');
                div.className = 'table-i';
                div.innerHTML = `<h2>${tableId}</h2><p>Rs. ${totalCost.toFixed(2)} | Total Items: ${totalItems}</p>`;
                tableListContainer.appendChild(div);
            }
        });
        
        if (!found && searchText) {
            tableListContainer.innerHTML = `<div class="table-i"><h2>Table not available</h2></div>`;
        }

        // Rebind click events to new search results
        rebindTableClickEvents();
    }

    
    tableSearchInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(searchTables, 700); // Debounce time set to 700ms
    });

    tableSearchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            clearTimeout(debounceTimer); // Cancel any pending execution of searchTables
            searchTables(); // Immediately invoke the search
        }
    });

    // Get the close button in the modal
    const closeButton = document.querySelector('.table-info-pop-up .close');
    // Event listener for the close button
    closeButton.addEventListener('click', closeModal);

    // Setting up Draggable Menu Items
    const menuItems = document.querySelectorAll('.menu-i');
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text', menuItem.id); // Pass the menu item ID or any identifier
        });
    });

    // closing the bill when clciked on generate bill on pop-up
    const generateBillEle = document.querySelector('.generate-bill');
    generateBillEle.addEventListener('click', () => {
        const tableId = document.querySelector('.table-info-pop-up').id;  // Function to retrieve the currently active table ID
        resetTableInfo(tableId);
    });


    // search functionality for menu items (both by name, course)
    const searchInput = document.querySelector('.menu-search');
    const noResults = document.createElement('p');
    noResults.textContent = 'No matching items found.';
    noResults.style.display = 'none';
    document.querySelector('.menu').appendChild(noResults);

    searchInput.addEventListener('input', () => {
        let found = false;
        const searchText = searchInput.value.toLowerCase().trim();

        menuItems.forEach(item => {
            const h2Element = item.querySelector('h2');
            const courseElement = item.querySelector('.course');
            const itemName = h2Element ? h2Element.textContent.toLowerCase() : '';
            const courseType = courseElement ? courseElement.textContent.toLowerCase() : '';

            const itemMatch = itemName.includes(searchText);
            const courseMatch = courseType.includes(searchText);

            if (itemMatch || courseMatch) {
                item.style.display = '';
                found = true;
            } else {
                item.style.display = 'none';
            }
        });

        noResults.style.display = found ? 'none' : '';
    });
});