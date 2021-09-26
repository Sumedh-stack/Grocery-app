const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

//connect to database
connectDB();

// Init middleware
app.use(express.json({ extended: false })); //
app.use(cors());
//Define Routes

app.use('/api/auth', require('./routes/api/auth'));

app.get('/', (req, res) => {
  res.send('API Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started successfuly on ${PORT}`);
});
