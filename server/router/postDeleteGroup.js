const { group } = require('console');
var fs = require('fs');

module.exports = function(req, res) {
    let groupnameToDelete = req.body.name;
    fs.readFile('./data/groups.json', 'utf-8', function(err, data) {
        if (err) throw err;
        
        let groupArray = JSON.parse(data);
        let updatedUserArray = groupArray.filter(group => group.name !== groupnameToDelete);
        
        fs.writeFile('./data/groups.json', JSON.stringify(updatedUserArray), 'utf-8', function(err) {
            if (err) throw err;
            res.send(updatedUserArray);
        });
    });
};
