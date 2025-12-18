const  express =require('express')
const db =require('./db.js');
const app = express()
const bodyParser = require('body-parser');
const User = require('./model/userschema.js');
const dotenv = require('dotenv');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/', (req, res) => {
//   res.send('Hello ')
// })

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
const PORT = process.env.port
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
})
