const server = require('./Server')

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => {
  console.log(`listening`);
});

