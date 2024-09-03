var fs = require('fs')

module.exports = function(req, res){
    let userObj = {
        "username": req.body.username,
        "id": req.body.id,
        "email": req.body.email,
        "password": req.body.password,
        "groups": req.body.groups,
        "role": req.body.role
    }
    let userArray = []
    fs.readFile('server/data/user.json', 'utf-8', function(err, data){
        if (err) throw err
        let uArray = JSON.parse(data);
        let i = userArray.findIndex(user => user.username === username)
        if (i!=-1)
            uArray.push(userobj);
        fs.writeFile('server/data/users.json', JSON.stringify(uArray), 'utf-8', function(err) {
            if (err) throw err;
            res.send(uArray);
        });
    })
}