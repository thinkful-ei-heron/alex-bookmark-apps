const landingPage = 
`
<div class="submit-buttons">
  <button class="landing-button" id="js-new-item-button" type="submit">New</button>
<form>
  <select class="landing-button" id="js-filter-button" type="submit" name="Filter">
    <option>All</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</form>
</div>`;

const addItem =
`<form id="new-item-submit">
  <input type="text" name="title" placeholder="Insert the name for your bookmark..." required>
  <div><input type="url" name="url" placeholder="Insert the url for your bookmark..." required></div>
  <div><textarea name="desc">
    Add a description of your bookmark.  
  </textarea></div>
  <div><select id="rating" type="submit" name="rating">
    <option>Choose a Rating</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select></div>
  <button type="submit" for="new-item-submit">SUBMIT</button>
</form>
  <button id="js-new-item-cancel">CANCEL</button>`;

const generateListItem = function(item){
  $('#js-current-list').append(
    `<button type="button" class="accordion">
      <li>${item[1]} ${item[4]} 
        <button id="${item[0]}" class="js-delete-button">&times;</button>
          <section id="#full-content" class="accordion-content"><span>${item[2]}</span><span>${item[3]}</span>
            </section></button>`);
};