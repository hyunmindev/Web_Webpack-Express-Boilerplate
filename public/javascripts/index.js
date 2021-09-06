import map from './map.js';

const app = document.querySelector('.app');
app.addEventListener('click', () => {
  map.print();
});
