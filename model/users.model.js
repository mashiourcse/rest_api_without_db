const { v4: uuidv4} = require("uuid")

const users = [
    {
        id: uuidv4(),
        username: "mashX",
        email: "mashiour.cseiiuc@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Anisul Islam",
        email: "anisulslam@gmail.com"
    }
]

module.exports = users