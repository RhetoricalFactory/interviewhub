'use strict';

const STORE = [
  {id: cuid(), name: "apples", checked: false},
  {id: cuid(), name: "oranges", checked: false},
  {id: cuid(), name: "milk", checked: true},
  {id: cuid(), name: "bread", checked: false}
];


function generateItemElement(item) {
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}


function generateShoppingItemsString(shoppingList) {
  console.log("Generating shopping list element");

  const items = shoppingList.map((item) => generateItemElement(item));
  
  return items.join("");
}


function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE);

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}


function handleNewItemSubmit() {
  // When a user presses submit an item is added to the list
  //we need to listen for when the button is pressed, and when it happens we invoke the HTML code
  //we wrote in the function generateItemElement which creates a list item (li) in the ul  .shopping-list js-shopping-list
  console.log('`handleNewItemSubmit` ran');
}


function handleItemCheckClicked() {
  // this function will put a strike through the text when users click the "check" button on
  // a shopping list item. 
  //It needs to listen for the event, change the value of Checked in the store array
  // to True or false, and thus implement our CSS code for .shopping-item__checked
  //some approaches that come to mind include !== or something like that, to turn on 
  //and off the CSS class
  //I may also need the class names for the button...(".shopping-item-toggle js-item-toggle")
  console.log('`handleItemCheckClicked` ran');
}


function handleDeleteItemClicked() {
  // this function will be remove items from the list when users click the delete buttonwant to delete a shopping list
  // We'll listen for the event, that the delete button was clicked. 
  //(button>".shopping-item-delete js-item-delete")
  //When the user presses the button, the list item clicked (li) will be removed from the list (ul) (".shopping-list js-shopping-list")
  console.log('`handleDeleteItemClicked` ran')
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();

}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);