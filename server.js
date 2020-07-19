const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.URI_MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });

require('./src/model/Item');

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT | 3001);