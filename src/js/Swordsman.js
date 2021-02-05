import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 30;
    this.defence = 30;
  }
}
