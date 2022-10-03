const { User } = require('../models');

const user = [
    {
      username: "Sally",
      email: "Sallyduh@hotmail.com",
      password: "password12asdf345"
    },
    {
      username: "Kazuo",
      email: "kazuodude@gmail.com",
      password: "passasdfword12345"
    },
    {
      username: "Juan",
      email: "juan2k20@aol.com",
      password: "password1231235"
    },
    {
      username: "Eric",
      email: "Eric@Ericpants.com",
      password: "EricPants"
    },
    {
      username: "Charly",
      email: "charly1@hotmail.com",
      password: "iamcharlyblue123"
    },
    {
      username: "Natasha",
      email: "natty@gmail.com",
      password: "nattynuts"
    }
  ]

  const seedUser = () => User.bulkCreate(user);

  module.exports = seedUser;