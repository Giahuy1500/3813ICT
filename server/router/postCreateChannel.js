var fs = require('fs');

module.exports = function(req, res) {
    let channelObj = { "name": req.body.name };
    let groupName = req.body.groupName; // Assuming you pass the group name in the request body

    fs.readFile('./data/groups.json', 'utf-8', function(err, data) {
        if (err) throw err;
        // Find the group in the groups array
        let groups = JSON.parse(data);
        let groupIndex = groups.findIndex(group => group.name === groupName);
        if (groupIndex !== -1) {
            // Add the channel to the group's channel list
            if (!groups[groupIndex].channels) {
                groups[groupIndex].channels = [];
            }
            groups[groupIndex].channels.push(channelObj);
        } else {
            // If group not found, create a new group with the channel
            groups.push({ name: groupName, channels: [channelObj] });
        }

        fs.writeFile('./data/groups.json', JSON.stringify(groups), 'utf-8', function(err) {
            if (err) throw err;
            res.send(groups);
        });
    });
};
