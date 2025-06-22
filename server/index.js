const express = require('express');
const connectToMongoDB = require('./db/db.js');
const authRouter = require('./routes/auth.js');





const app = express();

app.use(express.json())
app.use('/api/auth' , authRouter)


app.listen(5000, () => {
    connectToMongoDB()
    console.log("Server is Running");
});
 