import bookmarklist from './bookmarklist.js';
import store from './store.js';
import api from './api.js';

const main = function() {

  bookmarklist.renderList();
  bookmarklist.bindEventListeners();
};

$(main);