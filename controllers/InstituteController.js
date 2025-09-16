const instituteDefault = function (req, res) {
    res.send("here approvals are given")
}

const visitor = function (req, res) {
    res.send("User entry")
}

const studentVisitor = function (req, res) {
    res.send("Student Visitor Page")

}
const monitor = function (req, res) {
    res.send("Approval and Monitor")
}

module.exports = { instituteDefault, visitor, monitor, studentVisitor }
