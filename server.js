// ... your server js import/dependencies
require('./db/db')
const express = require('express')
const app = express()
const methodOverride  = require('method-override')
const cors = require('cors')
const PORT = process.env.PORT || 9000

// Define controllers here
//const wishlistController = require('./controllers/')

const whiteList =["http://localhost:3000"]

const corsOptions = {
  origin: (origin, callback) => {
    if(whiteList.indexOf(origin) !== -1 || !origin ){
      callback(null, true);
    }else {
      callback(new Error("Not allowed by Cors"))
    }
  }
}


app.use(cors(corsOptions))
app.use(express.json())
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

//app.use('/wishlist', wishlistController)


app.listen(PORT, () => {
  console.log(`$tacos Backend is running on port ${PORT}`)
})