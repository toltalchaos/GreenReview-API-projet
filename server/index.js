//import dependancies
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const cors = require('cors');

//import module JS files

// initialize spp 
const app = express();
const PORT = process.env.PORT || 5000;


        //middleware

//middleware for x origin resources
app.use(cors());
// access to name value pairs in body
app.use(express.urlencoded({extended:true}));
app.use(express.json());

        //cookies here

        //end cookies

 // Setup Templating Engine
 app.set('view engine', 'ejs')
 app.set('views', path.join(__dirname, './views'))

 app.use(express.static(path.join(__dirname, "../client"), {extensions: ["html", 'htm']})
);

//content 

app.get('/login', (req, res) => {

  res.render('login');

})







//end content


 app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "../client/404.html"));
  });



  // Tell express app to listen for incomming request on a specific PORT
app.listen(PORT, () => {
    console.log(`server started on http://localhost:5000`);
  });
  