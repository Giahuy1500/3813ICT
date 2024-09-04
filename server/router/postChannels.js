var fs = require('fs');

module.exports = function(req, res) {
    let groupName = req.body.name; // Assuming you pass the group name in the request body

    fs.readFile('./data/groups.json', 'utf-8', function(err, data) {
        if (err) throw err;
        let groups = JSON.parse(data);
        // Find the group in the groups array
        let group = groups.find(group => group.name === groupName);
        if (group) {
            // Send the list of channels in the group
            res.send(group.channels);
        } else {
            // If group not found, send an empty array or an error message
            res.send([]);
        }
    });
};