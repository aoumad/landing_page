const User = require('./../models/User');

const dummyUsers = [
    { username: 'aoumad8', password: 'testingdb' },
    { username: 'user1', password: 'password1' },
    // Add more dummy user data as needed
  ];

const insertDummyData = async () => {
  try {
    await User.insertMany(dummyUsers, { timeout: 30000 });
    console.log('Dummy data inserted successfully.');
  } catch (error) {
    console.error('Error inserting dummy data:', error);
  }
};

insertDummyData();