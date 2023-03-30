// commonjs import of app
const app = require('./app')
// we're instanciating a localhost with arguments, passed to the method, specifically 3000 number of a port, and a function with message, displayed in the console window
app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})

// about ports - there are 65 535 ports available on a computer. The first 1024 ports are reserved for specific protocols, rest are free to use
