import bookmarklist from './bookmarklist.js';

const ALLMARKS = {
  bookmarks: [],
  adding: false,
  error: null,
  filter: 0
};

const changeFilter = function(num) {
  this.ALLMARKS.filter = num;
  console.log(num);
  bookmarklist.renderList();
};

const deleteItem = function(id) {
  this.ALLMARKS.bookmarks = this.ALLMARKS.bookmarks.filter(current => current.id !== id);
  console.log(this.ALLMARKS.bookmarks);
};

const addItem = function(item) {
  this.ALLMARKS.bookmarks.push(item);
  bookmarklist.renderList();
  console.log(this.ALLMARKS.bookmarks);
};

export default {
  ALLMARKS,
  addItem,
  deleteItem,
  changeFilter
};