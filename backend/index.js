import express from "express"
import cors from "cors"
<<<<<<< HEAD

const app = express()
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).json({message:"Hello World!"})
=======
const app = express()
app.use(cors())
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" })
>>>>>>> upstream/main
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000}`)
})
