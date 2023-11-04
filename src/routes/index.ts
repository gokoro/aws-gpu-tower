import type { FastifyPluginAsync } from 'fastify'

import { AutoscalingRoutes } from './autoscaling/index.js'

export const routes: FastifyPluginAsync = async (fastify, args) => {
  fastify.register(AutoscalingRoutes, {
    prefix: '/autoscaling',
  })
}
