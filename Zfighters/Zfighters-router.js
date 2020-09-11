const express = require("express")
const deebee = require("./Zfighters-model")

const router = express.Router()

router.post("/", async (req, res, next) => {
    try {
        const character = await deebee.create(req.body)
        res.status(201).json(character)
    } catch(err) {
        next(err)
    }
})

module.exports = router