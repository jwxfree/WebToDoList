
// Refers to the list including the elements
const list = document.querySelector('.list-group');

// Refers to the form class
const form = document.querySelector('#add-item');

// Takes the input value
const input = form.querySelector('#input-field');

const del = form.querySelector("#LiDel");

// Refers to the form search class
const searchForm = document.querySelector('#search-item');

// Takes the input value from the search input
const inputSearch = searchForm.querySelector('input');


// Deleting an element
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
   event.target.closest('li').remove();
 }
});


// Adding new list element
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Stores the input value from the form 
  const value = input.value;

  // Create an li element
  const li = document.createElement('li');

  // Creating the Boostrap element
  li.classList.add('list-group-item');
  li.textContent = value;

  // Creating the Bootstrap button
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-danger', 'float-end', 'delete');
  button.textContent = 'Delete';
  li.appendChild(button);
  list.appendChild(li);

});

searchForm.addEventListener('input', (event) => {
  event.preventDefault();

  const query = inputSearch.value.toLowerCase();

  const items = list.querySelectorAll('li');

  for (let i = 0; i < items.length; i++) {

    const item = items[i];

    const text = item.textContent.toLowerCase();

    if (text.includes(query)) {
      item.style.display = 'block';
    }
    else {
      item.style.display = 'none';
    }
  }
});