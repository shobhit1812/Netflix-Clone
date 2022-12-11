const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoutes = require("./routes/UserRoutes")

const app = express()
const PORT = process.env.PORT
dotenv.config()
app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

app.use("/api/user", userRoutes)

app.get("/", (req, res) => {
  res.send("WORKING")
})

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`)
})
