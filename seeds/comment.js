// Seeding comment Data for functionality purposes
const { Comment } = require('../models');

const comment = [
    {
        id: 1,
        comment: "JavaScript is quite amazing!!!",
        user_id: 5,
        post_id: 4,
    },
    {
        id: 2,
        comment: "ORM is SOOO interesting!",
        user_id: 1,
        post_id: 3,
    },
    {
        id: 3,
        comment: "Agree to Disagree...",
        user_id: 2,
        post_id: 1,
    },
]

const seedComments = () => Comment.bulkCreate(comment);

module.exports = seedComments;