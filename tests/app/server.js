import server from '../../app/server'
import request from 'supertest'

describe('Test the server runs', () => {
  afterAll(() => {
    server.close()
  })

  test('It should respond with status code 200', async () => {
    const response = await request(server).get('/')
    expect(response.statusCode).toBe(200)
  })
})
