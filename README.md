# Documentation and Planning

**Student ID:** s5326129  
**Student Name:** Gia Huy Lieu  

## Table of Contents
1. Git
    1. Repository Structure
    2. Approach
2. Data Structures
3. Rest API
4. Angular Architecture

## Git

### Repository Structure
There is the layout of the repository directory that will be used during the process of development.

**Root directory:**
- `README.md`: Overview of the project, setup instructions, and documentation.
- `package.json`: Lists dependencies and scripts for both server and front-end.

**Server directory:**
- `server.js`: Main entry for the Express server.
- `sockets.io`: Handles real-time communication.
- `Peer.js`: Handles video communication.
- `routes/`: A directory containing modules responsible for defining and handling the various endpoints in your application.

**Frontend (Angular) directory:**
- `src/`:
  - `app/`:
    - `services/`
    - `components/`

### Approach

**Branching strategy:**
- Each feature of the application will be divided into different branches (e.g., `/authentication`, `/video-chat`).
- Regularly updated from feature branches and tested thoroughly.
- All features and fixes should be merged into the main branch after thorough testing.

**Commit and Update frequency:**
- Commit regularly with descriptive messages.
- Each commit should focus on a single change or feature to make tracking and reverting changes easier.
- Push updates to the remote repository frequently, especially at the end of each working session.
- Before pushing to the main branch, ensure all tests pass and the code is reviewed.

## Data Structures

**User Model:**
- `id: string`
- `username: string`
- `password: string`
- `groups: Group[]`
- `role: 'superAdmin' | 'groupAdmin' | 'user'`

**Group Model:**
- `id: string`
- `name: string`
- `channels: Channel[]`
- `members: User[]`

**Channel Model:**
- `id: string`
- `name: string`
- `message: Message[]`

**Message Model:**
- `id: string`
- `senderId: string`
- `content: string`
- `type: 'text' | 'video'`
- `timestamp: Date`

## Rest API

**POST /users/register:** Registers a new user.
- **Parameters:** `username`, `password`, `email`
- **Return Values:** Success message, `userId`
- **Description:** Creates a new user in the database.

**PUT /users/update:** Update user information.
- **Parameters:** `username`, `password`, `email`
- **Return Values:** Success message, `userId`
- **Description:** Update user information in the database.

**PUT /users/promote:** Promote a user to Group Admin or Super Admin (Super Admin only).
- **Parameters:** `userId`
- **Return Values:** Success message, `userId`, `role`
- **Description:** Promote a user to Group Admin or Super Admin.

**POST /users/login:** Authenticates a user.
- **Parameters:** `username`, `password`
- **Return Values:** `token`, user role (`Super Admin`, `Group Admin`, `User`)
- **Description:** Verifies user credentials and provides a token for session management.

**POST /groups/create:** Creates a new group (Super Admin or Group Admin only).
- **Parameters:** `groupName`, `description`, `createdBy`
- **Return Values:** Success message, `groupId`
- **Description:** Adds a new group to the database.

**POST /groups/delete:** Delete a group (Super Admin or Group Admin only).
- **Parameters:** `groupName`, `description`, `createdBy`
- **Return Values:** Success message, `groupId`
- **Description:** Delete a group.

**POST /groups/modify:** Modify a group (Super Admin or Group Admin only).
- **Parameters:** `groupName`, `description`, `createdBy`
- **Return Values:** Success message, `groupId`
- **Description:** Modify a specific group.

**POST /channels/create:** Creates a new channel within a group.
- **Parameters:** `channelName`, `groupId`, `createdBy`
- **Return Values:** Success message, `channelId`
- **Description:** Adds a new channel to a specific group.

**POST /channels/modify:** Modify a specific channel within a group.
- **Parameters:** `channelName`, `groupId`, `createdBy`
- **Return Values:** Success message, `channelId`
- **Description:** Modify a specific channel in a group.

**POST /messages:** Send a message.
- **Parameters:** `channelName`, `groupId`, `createdBy`, `message`
- **Return Values:** Success message, `channelId`, `userId`
- **Description:** Send a message.

## Angular Architecture

**Components:**
- `LoginComponent`: Manages user authentication.
- `GroupListComponent`: Displays all groups the user belongs to.
- `ChannelListComponent`: Shows all channels within a selected group.
- `GroupManagementModal`: Used to handle group management operations such as removing a user or adding a user to groups.
- `UserManagementModal`: Used to handle user management operations such as creating a user.
- `VideoChatComponent`: Manages video communication using Peer.js.
- `ChatComponent`: Handles real-time chat within a channel.

**Services:**
- `AuthService`: Handles authentication-related tasks like login and registration.
- `UserService`: Handles user data fetching and manipulation.
- `GroupService`: Manages group-related operations like creating, editing, deleting, and fetching group details.
- `ChannelService`: Manages channel operations, including sending messages and starting video calls.
- `ChatService`: Manages real-time chat via Socket.IO.
