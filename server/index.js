
import express from "express"

const app = express()


app.get("/health", (req, res) => {
    res.status(200).json({message: "server is running "})
})

const PORT = 5003;

app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
});