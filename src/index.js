const app = require("./app");
const connectToDB = require("./config/dbconfig");
const { PORT } = require("./config/serverConfig");

const fastify = require("fastify")({ logger: true });

fastify.register(app);

fastify.listen({ port: PORT }, async (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  await connectToDB()
  console.log(`Server up at port ${PORT}`);
});
