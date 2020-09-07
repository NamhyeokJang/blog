const router = require('express').Router()
const ping = require('ping')
const wol = require("node-wol");

router.get('/ping', async (req, res) => {
    const host = [process.env.DESK_IP]
    const { alive } = await ping.promise.probe(host)

    res.json({ alive })
})

router.get('/wol', (req, res) => {
    wol.wake(process.env.DESK_MAC_ADD, {}, (result, err) => {
        if (err) return res.json({ result: 'failed', message: `Can't wake DESK` })

        res.json({ result: 'ok', message: 'Successed Wol' })
    })
})

module.exports = router