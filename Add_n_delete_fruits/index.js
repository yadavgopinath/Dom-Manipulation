// Add the Edit Button:

// Get all list items
const listItems = document.getElementsByTagName('li');

// Iterate over each list item and add the edit button
for (const listItem of listItems) {
  const editButton = document.createElement('button');
  editButton.classList.add('edit-btn');
  editButton.textContent = 'Edit';
  listItem.appendChild(editButton);
}

// Implement the code as in video but with one extra 'Edit' button in 'li'
// Get the form, fruit input, and fruits list
const form = document.querySelector('form');
const fruitInput = document.getElementById('fruit-to-add');
const fruitsList = document.querySelector('.fruits');

// Function to add a new fruit
function addFruit(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  const fruitName = fruitInput.value; // Get the input value and remove leading/trailing whitespace

  // Check if the input is not empty
    // Create a new list item with fruit name, delete button, and edit button
    const newListItem = document.createElement('li');
    newListItem.classList.add('fruit');
    newListItem.innerHTML = `${fruitName}<button class="delete-btn">x</button><button class="edit-btn">Edit</button>`;

    // Append the new list item to the fruits list
    fruitsList.appendChild(newListItem);

   

    // Add event listeners to the newly created delete and edit buttons
    newListItem.querySelector('.delete-btn').addEventListener('click', deleteFruit);
    newListItem.querySelector('.edit-btn').addEventListener('click', editFruit);
  
}

// Function to delete a fruit
function deleteFruit(event) {
  const listItem = event.target.closest('li'); // Find the closest list item element
  listItem.remove(); // Remove the list item from the DOM
}



// Event listener for form submission
form.addEventListener('submit', addFruit);

// Event listener for delete button clicks (using event delegation)
fruitsList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    deleteFruit(event);
  }
});
