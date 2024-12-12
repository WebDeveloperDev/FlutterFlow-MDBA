const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
const uri = "mongodb+srv://talk2devendrasolanki:<db_password>@cluster0.33jhnfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Sample endpoint
app.get('/', (req, res) => {
  res.send('Hello from the MongoDB Backend!');
});
// API Endpoints
app.post('/add-data', async (req, res) => {
  const { name, age } = req.body;
  const newData = new DataModel({ name, age });
  try {
    await newData.save();
    res.status(201).json({ message: 'Data added successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/get-data', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
