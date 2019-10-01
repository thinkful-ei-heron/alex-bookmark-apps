const ALLMARKS = {
  bookmarks: [],
  adding: false,
  error: null,
  filter: 0
};


const addItem = function(item) {
  ALLMARKS.bookmarks.push(item);
};

export default {
  ALLMARKS,
  addItem
};