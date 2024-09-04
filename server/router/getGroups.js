var fs = require('fs')
//fetch all user data
module.exports = function(req,res){
    fs.readFile('./data/groups.json', 'utf-8', (err, data) => {
        let groups = []
        if (err) throw err;
        groups = JSON.parse(data);
        res.send(groups)
    });
}