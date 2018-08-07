const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.createList = function (planetsData) {
  planetsData.forEach(planet, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = planet.name;
  listItem.value = index;
  this.element.appendChild(listItem);
}};
