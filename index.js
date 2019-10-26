const express = require("express")
const app = express()
const logger = require("./logger")

require("dotenv").config()



app.listen(
    process.env.PORT,
    () => {
        logger.info(`ServerUP: ${process.env.PORT}`)
    }
)
