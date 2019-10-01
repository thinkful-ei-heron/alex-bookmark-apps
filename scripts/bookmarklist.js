const landingPage = 
`<div class="submit-buttons">
<form>
  <button class="landing-butt" id="js-new-item-button" type="submit">New</button>
</form>
<form>
  <select class="landing-button" id="js-filter-button" type="submit" name="Filter">
    <option>All</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</form>
</div>
<div class="list-of-bookmarks">
<ul>
  <li>#1</li>
  <li>#2</li>
  <li>#3</li>
  <li>#4</li>
</ul>
</div>`;

const renderList = function() {
  console.log('LOADING');
  console.log(landingPage);
  $('#js-list-landing').html(landingPage);
};

export default {
  renderList
};