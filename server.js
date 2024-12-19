const express = require('express')
const app = express()
const port = 3000
const db = require('./db');



const bodyParser = require('body-parser');
app.use(bodyParser.json());



const MenuItem = require ('./models/MenuItem');

// get method of hotel menu

app.get('/', (req, res) => {
  res.send('Welcome to my Hotel... how may i help you?')
})



// defining person routes

const personsRoutes = require('./routes/personsRoutes');
const menuItemRoutes = require ('./routes/menuItemRoutes')



app.use('/person', personsRoutes);
app.use('/menu', menuItemRoutes);


// port listening

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

