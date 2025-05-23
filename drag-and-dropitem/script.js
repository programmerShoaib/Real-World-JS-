
// Wait for the DOM to be fully loaded
// document.addEventListener("DOMContentLoaded", () => {
//   // Get the list element and its child list items
//   const list = document.getElementById("list");
//   const items = list.getElementsByTagName("li");
//   // Define event handlers
//   const handleDragStart = (e) => {
//     // Add styles to the dragged item
//     e.target.classList.add("dark:border-blue-500", "dark:border-2", "dark:bg-blue-500", "dark:text-white");
//     // Set the data to be transferred
//     e.dataTransfer.setData("text/plain", e.target.innerHTML);
//   };

//   const handleDragEnd = (e) => {
//     // Remove styles from the dragged item
//     e.target.classList.remove("dark:border-blue-500", "dark:border-2", "dark:bg-blue-500", "dark:text-white");
//   };
//   const handleDragOver = (e) => {
//     // Prevent the default behavior to allow dropping
//     e.preventDefault();
//   };
//   const handleDrop = (e) => {
//     // Prevent the default behavior to allow dropping
//     e.preventDefault();
//     // Get the dropped data
//     const data = e.dataTransfer.getData("text/plain");
//     // Handle the dropped data
//     console.log(data);
//   };
//   // Add event listeners to each list item
//   for (const item of items) {
//     item.addEventListener("dragstart", handleDragStart);
//     item.addEventListener("dragend", handleDragEnd);
//     item.addEventListener("dragover", handleDragOver);
//     item.addEventListener("drop", handleDrop);
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('list');
    let draggedItem = null;

    // Drag start
    list.addEventListener('dragstart', (e) => {
      if (e.target.classList.contains('list-item')) {
        draggedItem = e.target;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", "");
        setTimeout(() => {
          e.target.classList.add('opacity-0');
        }, 0);
      }
    });

    // Drag end
    list.addEventListener('dragend', (e) => {
      if (draggedItem) {
        draggedItem.classList.remove('opacity-0');
        draggedItem = null;
      }
    });

    // Drag over
    list.addEventListener('dragover', (e) => {
      e.preventDefault();
      const target = e.target;
      if (target && target !== draggedItem && target.classList.contains('list-item')) {
        const rect = target.getBoundingClientRect();
        const next = (e.clientY - rect.top) > (rect.height / 2);
        list.insertBefore(draggedItem, next ? target.nextSibling : target);
      }
    });

    // Drop
    list.addEventListener('drop', (e) => {
      e.preventDefault();
      // drop logic is handled in dragover (above) — here we just prevent default
      console.log("Item dropped");
    });
})