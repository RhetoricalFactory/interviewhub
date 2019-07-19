function haveList() {
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        console.log("Hmmm");

        // select
        const userInput = $(event.currentTarget).find('#shopping-list-entry');

        // print the value
        const inputValue = userInput.val()
        // if(inputValue.trim()===''){
        //     alert('Please input something')
        // }
        console.log("userInput value", inputValue);
        addItem(inputValue)
        console.log('the list is, ', theList)

        // clear the value
        userInput.val('')
    })
}

//create a container for inputs 
let theList = [];


//put things in it with a function?
function addItem(input) {
    let item = {
        name: input,
        status: false,
    }
    // theList.push(item);
    theList = [item]
    display()

}

function getItemHTML(item) {
    console.log('item is:', item)
    let htmlStr = `
  <li>
        <span class="shopping-item">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
   </li>
  `
    const itemElement = $(htmlStr)
    itemElement.find('.shopping-item-toggle').click(handleToggleClick)
    itemElement.find('.shopping-item-delete').click(handleDeleteClick)
    return itemElement
}

function display() {
    //theList.forEach(displayItem)

    //select the list element
    const listElement = $('.shopping-list')
    //clear the list element
    //   listElement.empty()
    console.log('listElement', listElement)

    for (let i = 0; i < theList.length; i++) {
        // debugger
        const li = getItemHTML(theList[i])
        //add item in the list element
        listElement.append(li)
    }
}

function handleToggleClick(ev){
    const closestText = $(event.target)
        .closest('li')
        .find('.shopping-item')
    console.log('closest .shopping-item', closestText)
    closestText.toggleClass('shopping-item__checked')
}

function handleDeleteClick(ev){
    const closestListItem = $(event.target)
        .closest('li')
        closestListItem.remove()
}

function setupButtonHandlers() {
    $('.shopping-item-toggle').click(handleToggleClick)
    $('.shopping-item-delete').click(handleDeleteClick)
}


//when the DOM is ready setup the listeners
$(haveList)
$(() => {
    display()
    setupButtonHandlers()
})

