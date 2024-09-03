var fs = require('fs')

module.exports = function(req, res){
    let userObj = {
        "username": req.body.username,
        "email": req.body.email,
        "password": req.body.password,
        "groups": req.body.groups,
        "role": req.body.role
    }
    let userArray = []
    fs.readFile('./data/users.json', 'utf-8', function(err, data){
        if (err) throw err
        let userArray = JSON.parse(data);
        let i = userArray.findIndex(user => user.username === userObj.username)
        if (i==-1)
            userArray.push(userObj);
        fs.writeFile('./data/users.json', JSON.stringify(userArray), 'utf-8', function(err) {
            if (err) throw err;
            res.send(userArray);
        });
    })
}