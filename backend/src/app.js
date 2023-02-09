import AutoLoad from '@fastify/autoload'
import Cors from '@fastify/cors'
import { join } from 'desm'

export default async (fastify, options) => {
  fastify.register(Cors)

  await fastify.register(AutoLoad, {
    dir: join(import.meta.url, 'routes')
  })
}
