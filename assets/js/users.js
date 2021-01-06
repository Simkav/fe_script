"use strict";

function getRandomNationalty() {
  return NATIONALITES[
    Math.round(Math.random() * (NATIONALITES.length - 1 - 0) + 0)
  ];
}

// function UserProto() {
//   this.getFullName = function getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

function UserProto() {
  this.getFullName = function getFullName() {
    return `${this.firstName} ${this.lastName}`;
  };
}

function User(
  first,
  last,
  age,
  email,
  isMale,
  nationality,
  isSubscribed = false
) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.email = email;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
  this.nationality = nationality;
  this.fullName = this.getFullName();
}

User.prototype = new UserProto();

function createRandomUsers(amount = 1) {
  const db = [];

  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Name${i}`,
      `Surname${i}`,
      Math.ceil(Math.random() * 100),
      `email${i}@gmail.com`,
      Math.random() > 0.5,
      getRandomNationalty(),
      Math.random() > 0.5
    );
    db.push(user);
  }
  return db;
}


const users = createRandomUsers(10);

const fullNames = users.map(function (user) {
  return user.getFullName();
});
console.log(fullNames);
const agesUsers = users.filter(function (user) {
  if (user.age >= ADULT_AGE) {
    return user;
  }
});
console.log(agesUsers);
const filteredUsers = users.filter(function (user) {
  if (!user.isMale) {
    return user;
  }
});
console.log(
  filteredUsers.map(function (user) {
    return user.email;
  })
);
