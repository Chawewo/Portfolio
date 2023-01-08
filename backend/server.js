const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../backend/build/bundle');
const path = require('path');

const app = express();
const buildPath = path.join(__dirname, '..','backend', 'build');
app.use(express.static(buildPath));
// This is the middleware that will handle all routes
app.get('*', (req, res) => {
  // We create a context object that will be passed to the StaticRouter
  const context = {};
  
  // Render the app component to a string
  const html = renderToString(
    React.createElement(App, {
      location: req.url,
      context,
    })
  );

  // If the app component set a context.url value, it means the user
  // tried to access a protected route that they are not authenticated for.
  // In this case, we redirect them to the login page.
  if (context.url) {
    res.redirect(context.url);
  } else {
    // Send the rendered HTML as the response
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Chawewo</title>
        <link href="css/main.css" rel="stylesheet">
      <script src="bundle.js"></script>

      </head>
      <body>
        <div id="root">${html}</div>
        
      </body>
    </html>
    `);
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
