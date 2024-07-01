import express from 'express'

//create server
const eventApp = express()


//listening to server

eventApp.listen(8899, () => {
  console.log('server is listening to port 8899')
})

