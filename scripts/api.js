import store from './store.js';


const url = 'https://thinkful-list-api.herokuapp.com/alex/bookmarks';

const baseFetch = function(url, obj) {
  let error;
  return fetch(url, obj)
    .then(res => {
      if (!res.ok) {
        error = { code: res.status };
      }
      return res.json();
    })
    .then(data => {
      if (error) {
        error.message = data.message;
        store.ALLMARKS.error = error.message;
        return Promise.reject(error);
      }
      console.log(data);
      return data;
    });
};

const populateItems = function() {
  return baseFetch(url);
};

const addItem = function(newItem) {
  return baseFetch(`${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem });
};

const deleteItem = function(itemId) {
  return baseFetch(url + `/${itemId}`, {
    method: 'DELETE'
  });

};

const editItem = function() {

};

export default {
  addItem,
  populateItems,
  deleteItem
};