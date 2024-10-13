# Documentation and Planning

**Student ID:** s5326129  
**Student Name:** Gia Huy Lieu

## Table of Contents
1. [Git](#git)
   1. [Repository Structure](#repository-structure)
   2. [Approach](#approach)
2. [Data Structures](#data-structures)
3. [Rest API](#rest-api)
4. [Angular Architecture](#angular-architecture)
5. [Testing](#testing)

## 1. Git

### 1.1 Repository Structure
There is the layout of the repository directory that will be used during the process of development. This is the link to the GitHub repository: [https://github.com/Giahuy1500/3813ICT](https://github.com/Giahuy1500/3813ICT)

- **Root directory:**
  - `README.md`: Overview of the project, setup instructions, and documentations.
  - `package.json`: Lists dependencies and scripts for both server and front-end.

- **Server directory:**
  - `server.js`: Main entry for the Express server.
  - `sockets.js`: Handles real-time communication.
  - `Peer.js`: Handles video communication.
  - `routes/`: Directory containing modules responsible for defining and handling the various endpoints in your application.

- **Frontend (Angular) directory:**
  - `src/`:
    - `app/`:
      - `services/`
      - `components/`

### 1.2 Approach
- **Branching strategy:**
  - Each feature of the application will be divided into different branches (e.g., /authentication, /video-chat).
  - Regularly updated from feature branches and tested thoroughly.
  - All features and fixes should be merged into the main branch after thorough testing.

- **Commit and Update frequency:**
  - Commit regularly with descriptive messages.
  - Each commit should focus on a single change or feature to make tracking and reverting changes easier.
  - Push updates to the remote repository frequently, especially at the end of each working session.
  - Before pushing to main, ensure all tests pass and the code is reviewed.

## 2. Data Structures

### User Model
- `id: string`
- `username: string`
- `password: string`
- `groups: Group[]`
- `role: 'superAdmin' | 'groupAdmin' | 'user'`

### Group Model
- `id: string`
- `name: string`
- `channels: Channel[]`
- `members: User[]`

### Channel Model
- `id: string`
- `name: string`
- `message: Message[]`

### Message Model
- `Id: string`
- `senderId: string`
- `content: string`
- `type: 'text' | 'video'`
- `timestamp: Date`

## 3. Rest API

### Modules
- **Express**: Used to create the server and handle HTTP requests.
- **Socket.io**: Facilitates real-time communication between the client and server for chat functionality.
- **CORS**: Enables Cross-Origin Resource Sharing for secure communication between the frontend and backend.
- **FS (File System)**: Used for reading from and writing to data.json, which stores users, groups, and channels.

### Files
1. **server.js**: Main server file that sets up routes, middleware, and starts the server.
2. **sockets.js**: Handles Socket.io initialization and events for real-time communication.
3. **listen.js**: The entry point that starts the server and listens for incoming requests.

### API Endpoints
- **POST /users/register**: Registers a new user.
  - **Parameters**: username, password, email
  - **Return Values**: Success message, userId
  - **Description**: Creates a new user in the database.

- **PUT /users/update**: Update user information.
  - **Parameters**: username, password, email
  - **Return Values**: Success message, userId
  - **Description**: Update user information in the database.

- **PUT /users/promote**: Promote a user to Group Admin or Super Admin (Super Admin only).
  - **Parameters**: userid
  - **Return Values**: Success message, userid, role
  - **Description**: Promote a user to Group Admin or Super Admin.

- **POST /users/login**: Authenticates a user.
  - **Parameters**: username, password
  - **Return Values**: token, user role (Super Admin, Group Admin, User)
  - **Description**: Verifies user credentials and provides a token for session management.

- **POST /groups/create**: Creates a new group (Super Admin or Group Admin only).
  - **Parameters**: groupName, description, createdBy
  - **Return Values**: Success message, groupId
  - **Description**: Adds a new group to the database.

- **POST /groups/delete**: Delete a group (Super Admin or Group Admin only).
  - **Parameters**: groupName, description, createdBy
  - **Return Values**: Success message, groupId
  - **Description**: Delete a group.

- **POST /groups/modify**: Modify a group (Super Admin or Group Admin only).
  - **Parameters**: groupName, description, createdBy
  - **Return Values**: Success message, groupId
  - **Description**: Modify a specific group.

- **POST /channels/create**: Creates a new channel within a group.
  - **Parameters**: channelName, groupId, createdBy
  - **Return Values**: Success message, channelId
  - **Description**: Adds a new channel to a specific group.

- **POST /channels/modify**: Creates a new channel within a group.
  - **Parameters**: channelName, groupId, createdBy
  - **Return Values**: Success message, channelId
  - **Description**: Modify a specific channel in a group.

- **POST /messages**: Send a message.
  - **Parameters**: channelName, groupId, createdBy, message
  - **Return Values**: Success message, channelId, userId
  - **Description**: Send a message.

## 4. Angular Architecture

### Components
- **LoginComponent**: Manages user authentication.
- **GroupListComponent**: Displays all groups the user belongs to.
- **ChannelListComponent**: Shows all channels within a selected group.
- **GroupManagementModal**: Handles group management operations such as removing users and adding users to groups.
- **UserManagementModal**: Handles user management operations such as creating a user.
- **VideoChatComponent**: Manages video communication using Peer.js.
- **ChatComponent**: Handles real-time chat within a channel.

### Services
- **AuthService**: Handles authentication-related tasks like login and registration.
- **UserService**: Handles user data fetching and manipulation.
- **GroupService**: Manages group-related operations like creating, editing, deleting, and fetching group details.
- **ChannelService**: Manages channel operations, including sending messages and starting video calls.
- **ChatService**: Manages real-time chat via Socket.IO.

## 5. Testing
### Unit Tests
Unit tests are executed via Karma. To run the unit tests, use the following command:
```bash
ng test
