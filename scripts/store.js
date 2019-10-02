import bookmarklist from './bookmarklist.js';

const ALLMARKS = {
  bookmarks: [],
  adding: false,
  error: null,
  filter: 0
};

const changeFilter = function(num) {
  this.ALLMARKS.filter = num;
  bookmarklist.renderList();
};

const deleteItem = function(id) {
  this.ALLMARKS.bookmarks = this.ALLMARKS.bookmarks.filter(current => current.id !== id);
};

const addItem = function(item) {
  item.expanded = false;
  this.ALLMARKS.bookmarks.push(item);
  bookmarklist.renderList();
};

const expandItem = function(id) {
  const changeMark = this.ALLMARKS.bookmarks.find(currentItem => currentItem.id === id);
  changeMark.expanded = !changeMark.expanded;
  console.log(changeMark);
  bookmarklist.renderList();
};

export default {
  ALLMARKS,
  addItem,
  deleteItem,
  changeFilter,
  expandItem
};