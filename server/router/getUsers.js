var fs = require('fs')
//fetch all user data
module.exports = function(req,res){
    fs.readFile('./data/users.json', 'utf-8', (err, data) => {
        let users = []
        if (err) throw err;
        users = JSON.parse(data);
        res.send(users)
    });
}