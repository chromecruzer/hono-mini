import { Hono } from 'hono';
import { jsxRenderer } from 'hono/jsx-renderer';

const main = new Hono();

main.use(
  '/page/*',
  jsxRenderer(({ children }) => {
    return (
      <html>
        <head>
          <title>My Hono App</title>
          {/* Include HTMX */}
          <script src="https://unpkg.com/htmx.org"></script>
        </head>
        <body>
          <header>Menu</header>
          <button 
            hx-get="/page/alert" 
            hx-target="#message" 
            hx-swap="innerHTML"
          >
            HI
          </button>
          <div id="message"></div> {/* This will display the response */}
          <div>{children}</div>
        </body>
      </html>
    );
  })
);

main.get('/page/about', (c) => {
  return c.render(<h1>About me!</h1>);
});

// Define a new endpoint for the button click
main.get('/page/alert', (c) => {
  return c.body('alert("HI)'); // This will be injected into #message
});

export default main;
