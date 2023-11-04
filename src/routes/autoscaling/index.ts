import type { FastifyPluginAsyncTypebox } from '../types.js'

import { updateState } from '../../modules/ec2/autoscaling.js'
import {
  Autoscaling,
  AutoscalingReturn,
  AutoscalingReturnType,
  AutoscalingType,
} from './schema.js'

export const AutoscalingRoutes: FastifyPluginAsyncTypebox = async (
  fastify,
  _opts
) => {
  fastify.post<{ Body: AutoscalingType; Reply: AutoscalingReturnType }>(
    '/',
    {
      schema: {
        body: Autoscaling,
        response: {
          200: AutoscalingReturn,
        },
      },
    },
    async (req, reply) => {
      const state = await updateState({
        desiredCapacity: req.body.desiredCapacity,
      })

      const { requestId } = state.$metadata

      if (!requestId) {
        return reply.status(500)
      }

      reply.send({ requestId })
    }
  )
}
