const { Post } = require('../models');

const post = [
    {
        title: "Why MVC is so Important?",
        date_created: "1/3/2021",
        content: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
        user_id: 1
    },
    {
        title: "Authentication vs Authorization",
        date_created: "5/1/2021",
        content: "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
        user_id: 4
    },
    {
        title: "Object-Relational Mapping",
        date_created: "5/1/2022",
        content: "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
        user_id: 3
    },
    {
        title: "JavaScript, the OG coding language",
        date_created: "10/1/2022",
        content: "I believe JavaScript to be one of the best and most powerful coding languages out there. If you need power, look to JavaScript.",
        user_id: 7
    }
]

const seedPost = () => Post.bulkCreate(post);

module.exports = seedPost;