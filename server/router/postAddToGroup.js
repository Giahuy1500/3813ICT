var fs = require('fs')

module.exports = function(req, res){
    let username = res.body.username
    let userArray = []
    fs.readFile('./data/users.json','utf-8', function(err,data){
        if (err) throw err
        uArray = JSON.parse(data)
        let i = userArray.findIndex(user => user.username === username)
        if (i == -1){
            
        }
    })
}