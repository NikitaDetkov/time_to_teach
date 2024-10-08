require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models.js');
const cors = require('cors');
const router = require('./routs/index.js');
const errorHandler = require('./middleware/ErrorHandlerMiddleware.js');

const PORT = process.env.PORT ?? 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// Обработка ошибок. Последний middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(new Error(e));
  }
};

start();
