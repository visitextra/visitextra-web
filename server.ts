import "./loadEnv.js";
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { serve } from '@hono/node-server';
import { promises as fs } from 'fs';
import path from 'path';

const app = new Hono();

app.post('_api/contact/submit',async c => {
  try {
    const { handle } = await import("./endpoints/contact/submit_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/driver/register',async c => {
  try {
    const { handle } = await import("./endpoints/driver/register_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/partnership/inquire',async c => {
  try {
    const { handle } = await import("./endpoints/partnership/inquire_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/newsletter/subscribe',async c => {
  try {
    const { handle } = await import("./endpoints/newsletter/subscribe_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
const distPath = path.resolve(import.meta.dirname, 'dist');
const relativeDistPath = path.relative(process.cwd(), distPath) || './dist';

app.use('/*', serveStatic({ root: relativeDistPath }));

app.get("*", async (c, next) => {
  const p = c.req.path;
  if (p.startsWith("/_api")) {
    return next();
  }
  
  // Do not serve index.html for missing static files/assets
  if (p.includes(".") || p.startsWith("/_assets/")) {
    return next();
  }
  
  try {
    const htmlPath = path.resolve(distPath, 'index.html');
    const htmlContent = await fs.readFile(htmlPath, 'utf-8');
    return c.html(htmlContent);
  } catch (error) {
    return c.text("index.html not found. Please run 'npm run build' first.", 404);
  }
});

const port = Number(process.env.PORT) || 3344;
serve({ fetch: app.fetch, port });
console.log(`Running at http://localhost:${port}`)
      