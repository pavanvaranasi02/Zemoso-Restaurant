# Restaurant Management System

This project is a dynamic restaurant management application designed to streamline the process of handling customer orders and table management. The system features an intuitive drag-and-drop interface where waitstaff can easily assign menu items to tables, track total orders, and generate bills.

## Key Features

1. **Table Management:** 
   - Displays all active tables with their current orders and total amounts.
   - Tables can be searched and selected to view detailed order information.

2. **Menu Management:**
   - A list of draggable menu items allows for quick assignment to tables.
   - Menu items can be searched by name or course type.

3. **Order Details:**
   - Each table’s order details are displayed in a modal pop-up.
   - Servings can be edited, items can be deleted, and totals are automatically calculated.

4. **Bill Generation:**
   - Easily close sessions and generate bills for tables.
   - The total amount is reflected in the daily profit.

## Concepts Covered

- **Debouncing:** 
  - Implemented in the search functionality to prevent excessive function calls while typing.

- **Drag and Drop:**
  - Menu items can be dragged and dropped onto tables for easy assignment.

- **Event Handling:**
  - Click, drag, and input events are efficiently managed to ensure responsive interactions.

- **Responsive Design:**
  - The application layout is designed to be fully responsive, ensuring usability across different screen sizes and devices.

## Technologies Used

- **HTML5:** For the basic structure and layout of the application.
- **CSS3:** For styling the application, including flexbox for layout and transitions for smooth interactions.
- **JavaScript (ES6+):** For adding interactivity, managing events, and dynamically updating the DOM.
