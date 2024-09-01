const fastifyPlugin = require("fastify-plugin");

const cors = require("@fastify/cors");

const servicePlugin = require("./services/servicePlugin");

const repositoryPlugin = require("./repositories/repositoryPlugin");
/**
 *
 * @param {Fastify object} fastify
 * @param {*} options
 */
async function app(fastify, options) {
  await fastify.register(cors);
  await fastify.register(repositoryPlugin);
  await fastify.register(servicePlugin);

  // fastify.register(todoRoutes, { prefix: "/todos" });
  //register testroutes
  fastify.register(require("./routes/api/apiRoutes"), { prefix: "/api" });
}

module.exports = fastifyPlugin(app);
