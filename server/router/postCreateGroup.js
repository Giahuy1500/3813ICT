var fs = require('fs')

module.exports = function(req, res){
    let groupObj = {
        "name": req.body.name,
        "channels": req.body.channels,
        "groupadmin": req.body.groupadmin
    }
    let groupArray = []
    fs.readFile('./data/groups.json', 'utf-8', function(err, data){
        if (err) throw err
        let groupArray = JSON.parse(data);
        console.log(groupObj)
        groupArray.push(groupObj);
        console.log(groupArray)
        fs.writeFile('./data/groups.json', JSON.stringify(groupArray), 'utf-8', function(err) {
            if (err) throw err;
            res.send(groupArray);
        });
    })
}