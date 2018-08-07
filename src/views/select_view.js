const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

  SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('Planets:planet-list-ready', (evt) => {
      const allPlanets = evt.detail;
      this.createList(allPlanets);
    });

    this.element.addEventListener('click', (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish('SelectView:click', selectedIndex);
    });
  };

SelectView.prototype.createList = function (planetsData) {
  planetsData.forEach((planet,index) => {
  const listItem = document.createElement('li');
  listItem.textContent = planet.name;
  listItem.value = index;
  this.element.appendChild(listItem);
})
};

module.exports = SelectView;
