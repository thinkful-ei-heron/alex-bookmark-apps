import store from './store.js';
import api from './api.js';

let addSwitch = store.ALLMARKS.adding;
const landingPage = 
`
<div class="submit-buttons">
  <button class="landing-button" id="js-new-item-button" type="submit">New</button>
<form>
  <select class="landing-button" id="js-filter-button" type="submit" name="Filter">
    <option>All</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</form>
</div>`;

const addItem =
`<form id="new-item-submit">
  <input type="text" name="title" placeholder="Insert the name for your bookmark..." required>
  <div><input type="url" name="url" placeholder="Insert the url for your bookmark..." required></div>
  <div><textarea name="desc">
    Add a description of your bookmark.  
  </textarea></div>
  <div><select id="rating" type="submit" name="rating">
    <option>Choose a Rating</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select></div>
  <button type="submit" for="new-item-submit">SUBMIT</button>
</form>
  <button id="js-new-item-cancel">CANCEL</button>`;

const generateListItem = function(item){
  $('#js-current-list').append(`<li>${item[1]} <a href="${item[2]}">Visit the Site</a></li>`);
};

const generateList = function(list) {
  let entries = Object.values(list);
  console.log(entries);
  generateListItem(entries);
};

const renderList = function() {
  $('#js-current-list').empty();
  console.log(store.ALLMARKS.bookmarks);
  let listItems = store.ALLMARKS.bookmarks.forEach(list => generateList(list));
  if(addSwitch === true) {
    $('#js-list-landing').empty();
    $('#js-list-landing').html(addItem);
    $('#js-current-list').html(listItems);
    addSwitch = !addSwitch;
  }
  else {
    $('#js-list-landing').html(landingPage);
    $('#js-current-list').html(listItems);
  }
};

function serializeJson(form) {
  const formData = new FormData(form);
  const o = {};
  formData.forEach((val, name) => o[name] = val);
  return JSON.stringify(o);
}

const makeNewItem = function() {
  $('#new-item-submit').submit(e => {
    e.preventDefault();
    let formElement = $('#new-item-submit')[0];
    api.addItem(serializeJson(formElement));
  });
};

const handleNewItemSubmit = function() {
  $('#js-new-item-button').click(e => {
    e.preventDefault();
    addSwitch = !addSwitch;
    renderList();
    makeNewItem();
  });
};

const handleItemDelete = function() {

};

const handleFilter = function() {

};

const handleItemDetails = function() {

};

const handleItemEdit = function() {

};

const bindEventListeners = function() {
  handleNewItemSubmit();
  handleItemDelete();
  handleItemDetails();
  handleFilter();
  handleItemEdit();
};

export default {
  renderList,
  bindEventListeners
};