const { MongoClient } = require("mongodb");

// Replace <username>, <password>, and <database> with your actual values
const uri = "mongodb+srv://talk2devendrasolanki:<db_password>@cluster0.33jhnfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToDatabase() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    console.log("Connected to MongoDB Atlas!");

    // Access a specific database
    const db = client.db("test"); // Replace 'testDB' with your database name

    // Perform operations (example: list collections)
    const collections = await db.listCollections().toArray();
    console.log("Collections:", collections);
    
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err);
  } finally {
    // Ensure the client is closed after usage
    await client.close();
  }
}

// Call the function to connect
connectToDatabase();
