var fs = require('fs');

module.exports = function(req, res) {
    let channelObj = { "name": req.body.channelName };
    let groupName = req.body.groupName;
    let username = req.body.username;

    // Read the users.json file to check for a valid user
    fs.readFile('./data/users.json', 'utf-8', function(err, userData) {
        if (err) throw err;
        let users = JSON.parse(userData);

        // Check if the user is valid
        let validUser = users.some(user => user.username === username);

        if (!validUser) {
            return res.status(400).send({ error: "Invalid user" });
        }

        // Read the groups.json file to add the user to the group and channel
        fs.readFile('./data/groups.json', 'utf-8', function(err, groupData) {
            if (err) throw err;
            let groups = JSON.parse(groupData);

            // Find the group in the groups array
            let groupIndex = groups.findIndex(group => group.name === groupName);
            if (groupIndex !== -1) {
                // Add the channel to the group's channel list
                if (!groups[groupIndex].channels) {
                    groups[groupIndex].channels = [];
                }
                groups[groupIndex].channels.push(channelObj);

                // Add the user to the group's user list
                if (!groups[groupIndex].users) {
                    groups[groupIndex].users = [];
                }
                let userIndex = groups[groupIndex].users.findIndex(user => user.username === username);
                if (userIndex === -1) {
                    groups[groupIndex].users.push({ username: username, channels: [channelObj] });
                } else {
                    groups[groupIndex].users[userIndex].channels.push(channelObj);
                }
            } 

            fs.writeFile('./data/groups.json', JSON.stringify(groups), 'utf-8', function(err) {
                if (err) throw err;
                res.send(groups);
            });
        });
    });
};
