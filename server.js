const express = require('express');
const mongoose = require('mongoose');
const usersModel=require('./users.js');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample endpoint
app.get('/', (req, res) => {
  res.send('Hello from the MongoDB Backend!');
});
// API Endpoints
app.post('/signup',async (req,res)=>{
    var info=req.body
    console.log(info)
    try {
        var newUser = new usersModel.account({
            name: info.name,
            username: info.username,
            password: info.password
         });
         newUser.save()
              .then(newUser=>{
                  console.log('data saved')
              })
              .catch(err => {
                  console.log("Error :",err);
              });
              res.send('data saved successfully')
    } catch (error) {
        console.log(error)
    }      
})

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
