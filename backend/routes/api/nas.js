const { stdout, stderr } = require('process')

const router = require('express').Router()
const exec = require('child_process').exec

const shell = async (script, callback) => {
    exec(script, (err, stdout, stderr) => {
        return callback({ err, stdout, stderr })
    })
}

router.post('/', (req, res) => {
    const { script } = req.body
    exec(script, (err, stdout, stderr) => {
        res.json({ err, stdout })
    })
})

router.get('/rem', (req, res) => {
    const script = `free | grep Mem | awk '{print $3/$2 * 100.0}'`
    shell(script, (result) => {
        res.json({ result })
    })
})

module.exports = router