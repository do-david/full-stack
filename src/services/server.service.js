const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT;
const apiRouter = require('../routes');
const schema = require('../apollo/schemas');
const resolvers = require('../apollo/resolvers');
const { ApolloServer } = require("apollo-server-express");

const graphQlServer = new ApolloServer( {
  typeDefs : schema,
  resolvers
})

graphQlServer.applyMiddleware({ app, path: "/graphql"});

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "*"
  );
  next();
});
app.use('/api/v1', apiRouter);

exports.start = () => {
  app.listen(port, (err) => {
    if (err) {
      console.log(`Errors: ${err}`);
      process.exit(-1);
    }
    console.log(`app is runnning on port ${port}`);
  });
};
