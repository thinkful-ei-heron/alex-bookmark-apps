import store from './store.js';
import api from './api.js';

let addSwitch = store.ALLMARKS.adding;
const landingPage = 
`
<div class="submit-buttons">
  <button class="landing-button" id="js-new-item-button" type="submit">New</button>
<form>
  <select class="landing-button" id="js-filter-button" type="submit" name="Filter">
    <option>Filter by Minimum Rating</option>
    <option>1</option>
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

const generateListItem = function(title, url, description, rating, id){
  if(parseInt(rating) >= store.ALLMARKS.filter){
    $('#js-current-list').append(`<button type="button" class="collapsible"><li>${title} <span id="rating-style">RATING: ${rating}</span><button id="${id}" class="js-delete-button">&times;</button><section id="full-content" class="content hidden"><span>${url}</span><span>${description}</span></section></button>`);
  }
  else{
    $('#js-current-list').append('');
  }
};

const generateList = function(obj) {
  console.log(obj);
  let title = obj.title;
  let url = obj.url;
  let description = obj.desc;
  let rating = obj.rating;
  let id = obj.id;
  generateListItem(title, url, description, rating, id);
};

const renderList = function() {
  $('#js-current-list').empty();
  let listItems = store.ALLMARKS.bookmarks.forEach(obj => generateList(obj));
  if(addSwitch === true) {
    $('#js-list-landing').empty();
    $('#js-current-list').empty();
    $('#js-list-landing').html(addItem);
    $('#js-current-list').html(listItems);
    addSwitch = !addSwitch;
  }
  else {
    $('#js-list-landing').html(landingPage);
    $('#js-current-list').html(listItems);
  }
};

//works
function serializeJson(form) {
  const formData = new FormData(form);
  const o = {};
  formData.forEach((val, name) => o[name] = val);
  return JSON.stringify(o);
}

//works
const handleCancel = function() {
  $('#js-list-landing').on('click', '#js-new-item-cancel', function(e){
    console.log('cancel');
    renderList();
  });
};


const makeNewItem = function() {
  $('#new-item-submit').submit(e => {
    e.preventDefault();
    let formElement = $('#new-item-submit')[0];
    api.addItem(serializeJson(formElement))
      .then(item => store.addItem(item));
    renderList();
  });
};

const handleNewItemSubmit = function() {
  $('#js-list-landing').on('click', '#js-new-item-button', function(e) {
    console.log('CLICK');
    // e.preventDefault();
    addSwitch = !addSwitch;
    renderList();
    makeNewItem();
  });
};

const handleItemDelete = function() {
  $('#js-current-list').on('click', '.js-delete-button', function(e){
    e.preventDefault;
    console.log('DELETE ME');
    let itemId = $(this).attr('id');
    api.deleteItem(itemId)
      .then((result) => {
        store.deleteItem(itemId);
        console.log(itemId, store.ALLMARKS.bookmarks);
        renderList();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};



const handleFilter = function() {
  $('#js-list-landing').on('change', '#js-filter-button', function(e){
    e.preventDefault();
    store.changeFilter(this.value);
  });
};

const handleItemDetails = function() {
  $('body').on('click', '.collapsible', function(e){
    console.log($(event.target));
    let accordion = $(event.target).closest('#full-content').get();
    if(accordion.hasClass('hidden')){
      accordion.removeClass('hidden');
    }
    else {
      accordion.addClass('hidden');
    }
    console.log(accordion);
  });
};

const handleItemEdit = function() {

};

const bindEventListeners = function() {
  console.log('listening');
  handleNewItemSubmit();
  handleItemDelete();
  handleItemDetails();
  handleFilter();
  handleItemEdit();
  handleCancel();
  generateListItem();
};

export default {
  renderList,
  bindEventListeners
};