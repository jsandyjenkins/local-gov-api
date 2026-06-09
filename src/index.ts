import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { licensingHandler } from './endpoints/index.mjs'

const app = new Hono()

// Enable CORS for all routes
app.use(cors({
  origin: '*', // Allow all origins (or restrict to your frontend domain)
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length', 'X-JSON-Response-Body'],
  maxAge: 600,
  credentials: true
}))

app.all('/licensing', async (c) => {
  return await licensingHandler(c.req)
})

app.get('/', (c) => {
  return c.json({'message': 'Hello Hono!'})
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
