const lodging = function (req, res) {
    res.send("Lodging Default Page")
}

const Outpass = function (req, res) {
    res.send("Outpass Request Page")
}

const Guestlodging = function (req, res) {
    res.send("Guest Stay Request")
}

const WardenApproval = function (req, res) {
    res.send('Warden Approval Page')
}
module.exports={lodging, Outpass, Guestlodging, WardenApproval}