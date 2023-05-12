const express = require('express');
const app = express();
const mongoose = require ('mongoose')
const dotenv = require ('dotenv');
const authRoute = require ('./routes/auth');
const userRoute = require('./routes/Users')
const movieRoute = require('./routes/Movies')
const listRoute = require('./routes/Lists')

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
}).then(()=>console.log('DB Connection Successfull!')).catch((err) => console.log(err))

app.use(express.json())
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/list', listRoute);

app.listen(3002, () =>{
    console.log('Backend connected and is running!')
})
