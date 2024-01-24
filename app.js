const express = require('express')
const router = require('./router/routes')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',router)
app.use(errorHandler)

const server = app.listen(port,()=>{
    console.log(`masuk ${port}`)
})

function gracefulTerm(server){
    return ()=>{
        server.close()
        console.log('server closed')
    }
}

process.on("SIGTERM",gracefulTerm(server))
process.on("SIGINT",gracefulTerm(server))
