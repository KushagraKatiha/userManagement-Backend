const app = require('./app.js')

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`App is listning on PORT NO>${PORT}`);
})