const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../backend/build/bundle');

const app = express();
app.get('*', (req, res) => {
  // Render the app component to a string
  const html = renderToString(React.createElement(App, { url: req.url, context: {} }));

  // Send the rendered HTML as the response
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My App</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
  </html>
`);
});

app.listen(3000, () => {
console.log('Server is listening on port 3000');
});