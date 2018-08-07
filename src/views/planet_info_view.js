const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:selected-planet-ready', (evt) => {
    const planet = evt.detail;
    console.log(planet);
    this.render(planet);
  });
};

PlanetInfoView.prototype.render = function(planet){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${planet.name} has an orbit of ${planet.orbit} days, a surface area of ${planet.surfaceArea} square metres and a volume of ${planet.volume} metres cubed. One day on ${planet.name} is equivalent to ${planet.day} Earth days. It also has ${planet.moons} moons and the gravity is ${planet.gravity}.`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = PlanetInfoView;
