const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
const DB = require('./database/connectDB');

app.use(express.json({ extended: false }));

DB();

//Routes
app.use('/api/user', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/quotes', require('./routes/api/quotes'));
app.get('/', (req, res) => {
    res.send("Welcomvdvdse here to heroku . Deployed Finally");
})






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is Up and Running on ${PORT}`);
})