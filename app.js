import express from 'express'
const app = express()

const PORT = 3000 

app.use(express.json()) //converts any incoming data into json

app.listen(PORT, ()=> {
    console.log (`Server started on port ${PORT}`) 
    
   
})
//res- data going to the client
//req- is data copming in from the client

app.get('/', (req, res) => {
    return res.status(212).send("Hello There!!")
})

app.get('/shop', (req, res) => {
    return res.status(232).send("Welcome to the shop!!")
})
app.get('/shop/:id', (req, res) => { //route/page on the server/ tab
    const data = req.params
    return res.status(262).send(`<a href='/'> Your Data : ${data.id}</a>`)
})