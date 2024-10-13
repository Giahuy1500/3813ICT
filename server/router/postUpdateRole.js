const fs = require("fs");

module.exports = function (req, res) {
  const username = req.body.username;
  const newRole = req.body.role;

  if (!username || !newRole) {
    return res
      .status(400)
      .send({ message: "Username and new role are required." });
  }

  // Read the user data from the JSON file
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
      return res.status(500).send({ message: "Error reading user data." });
    }

    let userArray = [];
    if (data) {
      try {
        userArray = JSON.parse(data);
      } catch (parseError) {
        console.error("Error parsing JSON data:", parseError.message);
        return res.status(500).send({ message: "Error parsing user data." });
      }
    }

    // Find the index of the user by username
    const userIndex = userArray.findIndex((user) => user.username === username);

    if (userIndex === -1) {
      return res.status(404).send({ message: "User not found." });
    }

    // Update the user's role
    userArray[userIndex].role = newRole;

    // Write the updated array back to the file
    fs.writeFile(
      "./data/users.json",
      JSON.stringify(userArray, null, 2),
      "utf-8",
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing to file:", writeErr.message);
          return res
            .status(500)
            .send({ message: "Error saving updated user data." });
        }

        res
          .status(200)
          .send({
            message: "User role updated successfully.",
            user: userArray[userIndex],
          });
      }
    );
  });
};
