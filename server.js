const express = require('express');
const mongoose = require('mongoose');
const usersModel=require('users.js');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample endpoint
app.get('/', (req, res) => {
  res.send('Hello from the MongoDB Backend!');
});
// API Endpoints
router.post('/signup',async (req,res)=>{
    var info=req.body
    try {
        var result=await usersModel.account.find({username:info.username})
        res.send({status:"failed"})
        var newUser = new usersModel.account({
            name: info.name,
            username: info.username,
            password: info.password
         });
         newUser.save()
              .then(savedUser=>{
                  console.log('data saved')
              })
              .catch(err => {
                  console.log("Error :",err);
              });
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
