import Fastify from 'fastify'

import { routes } from './routes/index.js'

const PORT = 3000

const fastify = Fastify()

fastify.register(routes)

fastify
  .listen({ port: PORT, host: '0.0.0.0' })
  .then(() => console.log(`AWS-GPU-TOWER is listning on port ${PORT}!`))
