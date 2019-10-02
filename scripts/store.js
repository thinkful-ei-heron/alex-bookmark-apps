import bookmarklist from './bookmarklist.js';

const ALLMARKS = {
  bookmarks: [],
  adding: false,
  error: null,
  filter: 0
};

const changeFilter = function(num) {
  ALLMARKS.filter = num;
  console.log(num);
  bookmarklist.renderList();
};

const deleteItem = function(item) {
  ALLMARKS.bookmarks = ALLMARKS.bookmarks.filter(current => current.item !== item);
};

const addItem = function(item) {
  ALLMARKS.bookmarks.push(item);
};

export default {
  ALLMARKS,
  addItem,
  deleteItem,
  changeFilter
};