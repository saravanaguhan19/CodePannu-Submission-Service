const fastifyPlugin = require("fastify-plugin");

const cors = require("@fastify/cors");

const servicePlugin = require("./services/servicePlugin");
/**
 *
 * @param {Fastify object} fastify
 * @param {*} options
 */
async function app(fastify, options) {
  fastify.register(cors);
  fastify.register(servicePlugin);
  //register testroutes
  fastify.register(require("./routes/api/apiRoutes"), { prefix: "/api" });
}

module.exports = fastifyPlugin(app);
