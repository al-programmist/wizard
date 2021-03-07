// eslint-disable-next-line no-console
console.log('Главный модуль загружен');

// eslint-disable-next-line func-names
const Wizard = (function () {
  // eslint-disable-next-line func-names
  return function () {
    const skin = '';
    const speed = 0;
    const health = 100;
    const energy = 100;
    const selector = document.querySelector('.j-canvas');

    // Геттеры
    this.getEnergy = () => energy;
    this.getSpeed = () => speed;
    this.getHealth = () => health;
    this.getSkin = () => skin;
    this.getSelector = () => selector;

    // Сеттеры
    // eslint-disable-next-line func-names
    this.setEnergy = function (value) {
      this.energy = value;
    };

    // eslint-disable-next-line func-names
    this.setSpeed = function (value) {
      this.speed = value;
    };

    // eslint-disable-next-line func-names
    this.setHealth = function (value) {
      this.health = value;
    };

    // eslint-disable-next-line func-names
    this.setSkin = function (value) {
      this.skin = value;
    };

    // eslint-disable-next-line func-names
    this.render = function (x, y, size) {
      const canvas = this.getSelector();
      const context = canvas.getContext('2d');
      context.fillStyle = 'red';
      context.fillRect(x, y, size, size);
    };

    Object.preventExtensions(this);
  };
}());

const hero = new Wizard();
hero.render(300, 350, 50);
console.log(hero);
