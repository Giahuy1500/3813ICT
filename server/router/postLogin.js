var fs = require('fs')

module.exports = function(req, res) {
    var username = req.body.username
    var password = req.body.password
    fs.readFile('./data/users.json', 'utf8', function(err,data){
        if (err) throw err
        let userArray = JSON.parse(data)
        let i = userArray.findIndex(user => ((user.username === username) && ((user.password === password))))
        if (i == -1){
            res.send({"ok": false})
        }
        else {
            res.send({"ok": true, "user": userArray[i]})
        }
    })
}