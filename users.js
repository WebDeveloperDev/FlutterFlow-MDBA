var mongoose=require('mongoose')
// const url = "mongodb+srv://talk2devendrasolanki:JfVPHJkw75kvbY7u@cluster0.33jhnfk.mongodb.net/?retryWrites=true&w=majority";
const url = "mongodb+srv://talk2devendrasolanki:JfVPHJkw75kvbY7u@cluster0.33jhnfk.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url)

// mongoose.connect('mongodb://localhost/my_db')
var accountSchema=mongoose.Schema({
    name: String,
    username: String,
    password: String

})
var Account=mongoose.model("account",accountSchema)

module.exports={
    accountSchema:accountSchema,
    account:Account
}
