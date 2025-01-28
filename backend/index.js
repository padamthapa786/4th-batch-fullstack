
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())


app.get("/user", (req,res)=> {
    res.json({
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com"
    })
})
app.post('/user', (req,res)=> {
    const data = req.body;
    console.log(data);
    res.json({
        message: " Data liye , dhanyabaad ",
        data: data
    })
})

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})