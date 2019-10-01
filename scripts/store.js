const store = [{
  bookmarks: [{}],
  adding: false,
  error: null,
  filter: 0
}];


const addItem = function(item) {
  return this.store.bookmarks.push(item);
};