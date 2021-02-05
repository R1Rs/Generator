export default class Team {
  constructor() {
    this.members = new Set();
    this.quantityMembers = 0;
  }

  add(character) {
    this.members.forEach((el) => {
      if (JSON.stringify(el) === JSON.stringify(character)) {
        throw new Error('такой персонаж уже есть в команде');
      }
    });
    this.members.add(character);
    this.quantityMembers += 1;
  }

  addAll(...characters) {
    characters.forEach((pers) => {
      this.members.add(pers);
      this.quantityMembers += 1;
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const team = this.toArray();
    let current = 0;
    const last = this.quantityMembers;

    return {
      next() {
        if (current < last) {
          return {
            done: false,
            // eslint-disable-next-line no-plusplus
            value: team[current++],
          };
        } return {
          done: true,
        };
      },
    };
  }
}
