const ALLMARKS = [{
  bookmarks: [{}],
  adding: false,
  error: null,
  filter: 0
}];


const addItem = function(item) {
  return this.ALLMARKS.bookmarks.push(item);
};

export default {
  ALLMARKS
};