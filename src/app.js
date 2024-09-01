const fastifyPlugin = require("fastify-plugin");

const cors = require("@fastify/cors");

const servicePlugin = require("./services/servicePlugin");
const todoRoutes = require("./routes/todoRoutes");
const repositoryPlugin = require("./repositories/repositoryPlugin");
/**
 *
 * @param {Fastify object} fastify
 * @param {*} options
 */
async function app(fastify, options) {
  fastify.register(cors);
  fastify.register(repositoryPlugin);
  fastify.register(servicePlugin);

  fastify.register(todoRoutes, { prefix: "/todos" });
  //register testroutes
  fastify.register(require("./routes/api/apiRoutes"), { prefix: "/api" });
}

module.exports = fastifyPlugin(app);
