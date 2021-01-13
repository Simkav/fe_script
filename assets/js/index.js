class User {
  constructor(name, surname, age, isBanned = false) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isBanned = isBanned;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Admin extends User {
  constructor(name, surname, age, isBanned, permission = '*') {
    super(name, surname, age);
    this.permission = permission;
  }
  toggleBan(user) {
    if (user instanceof User) {
      user.isBanned = !user.isBanned;
      return user.isBanned
        ? `${user.getFullName()} banned`
        : `${user.getFullName()} unbanned`;
    }
    throw new TypeError('Not a user');
  }
}
const u = new User('test', 'testov', 15);
const adm = new Admin('admin', 'admin');
