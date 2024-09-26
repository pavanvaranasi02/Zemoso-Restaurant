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

## Output Images:

**On Initial Render:**
<img width="1440" alt="Screenshot 2024-09-03 at 12 53 19 AM" src="https://github.com/user-attachments/assets/116b4e19-8704-45a7-9763-6345ec36a964">

**On clicking on table 1:**
<img width="1434" alt="Screenshot 2024-09-03 at 12 54 50 AM" src="https://github.com/user-attachments/assets/9d1a14e0-9f2f-45fc-8f8f-2b41ebb525bf">

**On Increasing the servings the cost gets dynamically updated:**
<img width="774" alt="Screenshot 2024-09-03 at 12 55 47 AM" src="https://github.com/user-attachments/assets/e5d9d83f-8044-4a97-8e8d-4c89288a34e3">

**We can also delete any item and the cost gets dynamically updated:**
<img width="775" alt="Screenshot 2024-09-03 at 12 56 26 AM" src="https://github.com/user-attachments/assets/222898ce-3a78-46ad-a47e-7d255ee82b84">

**After Customer enjoying the meal we can close that session and see ui changes in total cost of day:**
<img width="1440" alt="Screenshot 2024-09-03 at 12 57 29 AM" src="https://github.com/user-attachments/assets/96ca33d5-cabc-4bd4-b95d-5fbb28a89e68">
<img width="306" alt="Screenshot 2024-09-03 at 12 57 44 AM" src="https://github.com/user-attachments/assets/27a2c116-1296-4073-9e71-e677a648d053">
<img width="1440" alt="Screenshot 2024-09-03 at 12 57 59 AM" src="https://github.com/user-attachments/assets/92fdef2b-c500-4453-a12e-90f4a5465fde">
<img width="1440" alt="Screenshot 2024-09-03 at 12 58 15 AM" src="https://github.com/user-attachments/assets/81a1b5e0-e8da-45ac-a6e8-6c9555af65cc">
<img width="310" alt="Screenshot 2024-09-03 at 12 58 34 AM" src="https://github.com/user-attachments/assets/a4b8bef7-6a14-4b09-b341-ae545b531cb8">


**Adding Items to table using drag and drop functionality:**
![image](https://github.com/user-attachments/assets/4b4fc9c7-25f7-4469-85d5-8f6184b16591)
<img width="1440" alt="Screenshot 2024-09-03 at 1 00 50 AM" src="https://github.com/user-attachments/assets/ad48c923-2222-4f39-be3a-d0f174e6424c">
<img width="1440" alt="Screenshot 2024-09-03 at 1 01 23 AM" src="https://github.com/user-attachments/assets/be8316c9-17fb-4f07-a17b-112bdab46def">
<img width="1438" alt="Screenshot 2024-09-03 at 1 01 35 AM" src="https://github.com/user-attachments/assets/3166aec0-b783-4155-8e20-2018e6c121cb">

**Search Functionality for tables uses debouncing:**
<img width="349" alt="Screenshot 2024-09-03 at 1 02 35 AM" src="https://github.com/user-attachments/assets/f9d8898a-1844-46f2-8a1b-7de1b4fc0b51">
<img width="350" alt="Screenshot 2024-09-03 at 1 02 49 AM" src="https://github.com/user-attachments/assets/6174d2ce-d24e-4f8c-a4dd-f241d21ab54d">

**Search Functionality for dishes also uses debouncing:**
- Searching with dish name:
<img width="1067" alt="Screenshot 2024-09-03 at 1 03 56 AM" src="https://github.com/user-attachments/assets/940f51f2-0d98-4df9-ad39-785e2ec6a014">
- Searching with course type:
<img width="1061" alt="Screenshot 2024-09-03 at 1 04 33 AM" src="https://github.com/user-attachments/assets/6695484f-2a1c-4972-9889-028fba3f9337">
<img width="1069" alt="Screenshot 2024-09-03 at 1 04 56 AM" src="https://github.com/user-attachments/assets/04d08886-b8b4-42c7-b74f-38e246760b62">





