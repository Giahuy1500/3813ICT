var fs = require('fs');

module.exports = function(req, res) {
    let usernameToDelete = req.body.username;
    
    fs.readFile('./data/users.json', 'utf-8', function(err, data) {
        if (err) throw err;
        
        let userArray = JSON.parse(data);
        let updatedUserArray = userArray.filter(user => user.username !== usernameToDelete);
        
        fs.writeFile('./data/users.json', JSON.stringify(updatedUserArray), 'utf-8', function(err) {
            if (err) throw err;
            res.send(updatedUserArray);
        });
    });
};
