// import packages
const express = require('express')
// initialize express app
const app = express()
 
app.get('/hello',(req,res) =>{
    res.send('Get Method')
})

app.post('/hello',(req,res) =>{
    res.send('Post Method')
})

app.put('/hello',(req,res) =>{
    res.send('Put Method')
})

app.delete('/hello',(req,res) =>{
    res.send('Delete Method')
})
 
// create a server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})