export default async fastify => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: async request => {
      const response = await fetch(API_URL)
      return response.json()
    }
  })
}
