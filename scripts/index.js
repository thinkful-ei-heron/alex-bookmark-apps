import bookmarklist from './bookmarklist.js';
import store from './store.js';
import api from './api.js';

const main = function() {
  $('#js-current-list').empty();
  api.populateItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      bookmarklist.renderList();
    });
  bookmarklist.renderList();
  bookmarklist.bindEventListeners();
};

$(main);