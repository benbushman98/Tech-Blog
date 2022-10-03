const seedUser = require('./user');
const seedPost = require('./post');
// const seedComments = require('./commentData');

const sequelize = require('../config/connection');

const seed = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedPost();
  // await seedComments();
  //   console.log('\nCOMMENTS SEEDED');

  process.exit(0);
};

seed();