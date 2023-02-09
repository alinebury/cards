import Fastify from 'fastify'
import app from './src/app.js'

const fastify = Fastify({
  logger: true
})

fastify.register(app)

const start = async () => {
  try {
    await fastify.listen({ port: 3001 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
