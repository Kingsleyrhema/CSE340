const express = require('express');
const path = require('path');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout');

// Use express-ejs-layouts
app.use(expressLayouts);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Index route
app.get('/', (req, res) => {
  res.render('index');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
