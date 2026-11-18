# Backend Tutorial – Node.js Project

## Project Description
This is a backend project developed using Node.js, Express.js, and MongoDB. It provides CRUD (Create, Read, Update, Delete) operations through REST APIs.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

## Project Structure
- `controllers/` – Handles API logic.
- `models/` – Defines the User schema.
- `routes/` – Defines API routes.
- `server.js` – Main server file.
- `.env` – Stores environment variables (not uploaded to GitHub).

## CRUD Operations
- **Create:** Add a new user.
- **Read:** Retrieve all users.
- **Update:** Update an existing user.
- **Delete:** Delete a user.

## How to Run the Project

1. Clone the repository.
2. Install dependencies:

   `npm install`

3. Create a `.env` file in the root folder and add your MongoDB connection string:

   `MONGODB_URI=your_mongodb_connection_string`

4. Start the server:

   `node server.js`

5. The server runs at:

   `http://localhost:3000`

## API Testing
All CRUD APIs are tested using Postman.

## Author
Kanika Saini