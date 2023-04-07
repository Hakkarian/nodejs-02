const mongoose = require('mongoose');

// commonjs import of app
const app = require('./app')
// const { DB_HOST, PORT } = process.env;
// const DB_HOST = "mongodb+srv://theobadar:Ajsx3th5d@cluster0.ebd3muh.mongodb.net/edunode";
// we're instanciating a localhost with arguments, passed to the method, specifically 3000 number of a port, and a function with message, displayed in the console window

const { DB_HOST, PORT } = process.env;

mongoose.connect(DB_HOST).then(() => app.listen(PORT, () => {
  console.log("Database connection succesful")
})).catch(error => {
  console.log(error.message)
  process.exit(1)
})



// about ports - there are 65 535 ports available on a computer. The first 1024 ports are reserved for specific protocols, rest are free to use
