const faker = require('faker');

const generateDummyUser = () => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    // generate other fields as needed
  };
};

const dummyUsers = Array.from({ length: 10 }, generateDummyUser);