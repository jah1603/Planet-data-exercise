const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfoView = require('./views/planet_info_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const planetInfoView = document.querySelector('div#planet-details');
  const planetInfo = new PlanetInfoView(planetInfoView);
  planetInfo.bindEvents();

  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  const selectElement = document.querySelector('ol#planet-list');
  const selectView = new SelectView(selectElement)
  selectView.bindEvents();

});
