// To support types
// https://github.com/microsoft/TypeScript/issues/14877
//declare const self: ServiceWorkerGlobalScope

import { Hono } from 'https://cdn.jsdelivr.net/npm/hono@latest/dist/hono.js'
import { handle } from 'https://cdn.jsdelivr.net/npm/hono@4.6.3/dist/adapter/service-worker/handler.js'

 const service = new Hono().basePath('/service') 
 service.get('/home', (c) => c.text('WeB-Service worker is Alive..2')) 

self.addEventListener('fetch', handle(service))

export default service