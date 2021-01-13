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
  static isUser(obj) {
    return obj instanceof User;
  }
}

class Admin extends User {
  constructor(name, surname, age, isBanned, permission = '*') {
    super(name, surname, age);
    this.permission = permission;
  }
  ban(user) {
    if (User.isUser(user)) {
      if (user.isBanned === true) {
        throw new Error(`${user.getFullName()} is already banned`);
      }
      user.isBanned = true;
      return `${user.getFullName()} sucsesfull banned`;
    }
    throw new Error(`${user} is not a user`);
  }
  unban(user) {
    if (User.isUser(user)) {
      if (user.isBanned === false) {
        throw new Error(`${user.getFullName()} is not banned`);
      }
      user.isBanned = false;
      return `${user.getFullName()} sucsesfull unbanned`;
    }
    throw new Error(`${user} is not a user`);
  }
}
const u = new User('test', 'testov', 15);
const adm = new Admin('admin', 'admin');
