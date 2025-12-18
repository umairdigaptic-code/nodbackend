const  express =require('express')
const db =require('./db.js');
const app = express()
const bodyParser = require('body-parser');
const User = require('./model/userschema.js');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello ')
})

app.get('/signup', (req, res) => {
   const userdat ={
    name:"umair",
    emial:"umerumair228@gmail.com",
    profile:null
   }
    res.send(userdat)
})
// POST route to add a person
const personRouter = require('./router/personroute.js');
app.use('/person', personRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
