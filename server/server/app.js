const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 3005;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

async function start() {
  try {
    await mongoose
      .connect(
        'mongodb+srv://Maksim:pass123@cluster0.g0pcd.mongodb.net/graphql-tutorial?retryWrites=true&w=majority',
        { useUnifiedTopology: true, useNewUrlParser: true },
      )
      .then(console.log('CONNECTED TO DB!'));
  } catch (error) {
    console.log(error);
  }
}

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server started on port:${PORT}`);
});

start();
