import bookmarklist from './bookmarklist.js';
import store from './store.js';

console.log(store.ALLMARKS);

const main = function() {
  bookmarklist.renderList();
  bookmarklist.bindEventListeners();
};

$(main);