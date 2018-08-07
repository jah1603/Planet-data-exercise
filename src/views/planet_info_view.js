const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Planet:selected-planet-ready', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  });
};

PlanetInfoView.prototype.render = function(planet){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${planet.name} has an orbit of ${planet.orbit} days, a surface area of ${planet.surfaceArea} square metres and a volume of ${planet.volume} metres cubed. One day on ${planet.name} is equivalent to ${planet.days} Earth days. It also has ${planet.moons} moons and the gravity is ${planet.gravity}.`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = PlanetInfoView;
