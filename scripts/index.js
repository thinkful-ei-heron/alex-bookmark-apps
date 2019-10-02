import bookmarklist from './bookmarklist.js';
import store from './store.js';
import api from './api.js';

const main = function() {
  

  api.populateItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      bookmarklist.renderList();
    });
  
  
  bookmarklist.bindEventListeners();
  bookmarklist.renderList();
};

$(main);