const mongoose = require('mongoose');
const faker = require('faker');


const connectionString = "mongodb+srv://aoumad8:testingdb123@your_cluster.mongodb.net/your_database";

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(error => console.error(error));

function generateFakeUser() {
    return {
        username: faker.internet.userName(),
        password: faker.internet.password(),
    };
}

const numUsers = 10;
const fakeUsers = [];
for (let i = 0; i < numUsers; i++) {
    fakeUsers.push(generateFakeUser());
}

mongoose.connection.collection('users') // Assuming your collection is named 'users'
    .insertMany(fakeUsers)
    .then(() => console.log(`${numUsers} fake users inserted!`))
    .catch(error => console.error(error))
    .finally(() => mongoose.connection.close()); // Close the connection after insertion