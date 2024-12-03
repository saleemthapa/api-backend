const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');  // Import Sequelize models

const app = express();
const port = process.env.PORT || 5555;

// Middlewares
app.use(cors());
app.use(bodyParser.json());  // Parse JSON request bodies

// Routes
require('./routes/venueRoutes')(app);
require('./routes/menuRoutes')(app);
require('./routes/categoryRoutes')(app);
require('./routes/subcategoryRoutes')(app);
require('./routes/itemRoutes')(app);

// Sync models with DB (optional)
db.sequelize.sync().then(() => {
  console.log('Database connected and synced');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
