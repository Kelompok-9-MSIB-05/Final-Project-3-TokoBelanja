const express = require("express")
const app = express()
const PORT = 7000


app.get("",  (req, res) => {
    res.send("FP3")
})

app.listen(PORT, () => {
    console.log("App running on port: ", PORT);
})
