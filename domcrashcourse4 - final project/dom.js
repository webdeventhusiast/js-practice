let addForm = document.getElementById('addForm');
let itemsList = document.getElementById('items');
let inputFilter = document.getElementById('filter');


addForm.addEventListener('submit', addItem);
itemsList.addEventListener('click', deleteItem);
inputFilter.addEventListener('keydown', filterItems);


function addItem(e) {
  e.preventDefault();
  
  // get input value
  let inputValue = document.getElementById('item').value;
  
  // create new li element
  let liNewItem = document.createElement('li');
  liNewItem.classList.add('list-group-item');
  liNewItem.textContent = inputValue;
  
  // create new delete button
  let btnDelete = document.createElement('button');
  btnDelete.className = 'btn btn-danger btn-sm float-right delete';
  btnDelete.textContent = 'X';

  liNewItem.appendChild(btnDelete);
  itemsList.appendChild(liNewItem);
}

function deleteItem(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm('The action can not be undone, are you sure to delete item?')) {
      let li = e.target.parentElement;
      itemsList.removeChild(li); 
    }
  }
}

function filterItems(e) {
  let strValue = inputFilter.value.toLowerCase();
  let liItems = document.querySelectorAll('.list-group-item');
  let myArray = Array.from(liItems);

  myArray.forEach(function(item) {
    let liText = item.firstChild.textContent;

    if (liText.toLowerCase().indexOf(strValue) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}