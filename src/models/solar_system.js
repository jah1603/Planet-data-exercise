const planets = require('../data/planets.js');
const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.publish('SolarSystem:planet-list-ready', this.planets);

  PubSub.subscribe('SelectView:click', (evt) => {
    const selectedIndex = evt.detail;
    this.publishPlanetDetail(selectedIndex - 1);
  });
};

SolarSystem.prototype.publishPlanetDetail = function(planetIndex){
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish('SolarSystem:selected-planet-ready', selectedPlanet)
};

module.exports = SolarSystem;
