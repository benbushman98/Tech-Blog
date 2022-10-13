const seedUser = require('./user');
const seedPost = require('./post');
const seedComments = require('./comment');

const sequelize = require('../config/connection');

const seed = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedPost();
  await seedComments();

  process.exit(0);
};

seed();