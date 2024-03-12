# Room Management System

This is a backend application for managing rooms in a hotel or any similar establishment. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on rooms and room types.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Endpoints](#endpoints)
- [Code Explanation](#code-explanation)
  - [File Structure](#file-structure)
  - [Dependencies](#dependencies)
  - [Database Setup](#database-setup)
  - [Routes](#routes)
  - [Models](#models)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete rooms
- Create and read room types
- Search rooms based on various criteria such as name, room type, and price range

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB server running locally or accessible via a remote URI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/room-management-system.git



2. Navigate into the project directory:


```bash

cd room-management-system

```
3. Install dependencies:
```bash

npm install
```
 4. Configuration
 ```
Create a .env file in the project root and configure environment variables:
```

5. Replace yourdatabase with the name of your MongoDB database.
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yourdatabase
```


 ## Usage
Endpoints
GET /api/v1/rooms-types: Retrieve all room types.
GET /api/v1/rooms: Search rooms based on query parameters (e.g., search, roomtype, minprice, maxprice).
GET /api/v1/rooms/:id: Get a room by ID.
POST /api/v1/rooms-types: Create a new room type.
POST /api/v1/rooms: Create a new room.
PATCH /api/v1/rooms/:id: Update a room by ID.
DELETE /api/v1/rooms/:id: Delete a room by ID.
Code Explanation
  ## File Structure

```
.
├── config
│   └── mongodb.js
├── models
│   ├── Roomtypes.js
│   └── Rooms.js
├── routes
│   ├── delete.js
│   ├── get.js
│   ├── patch.js
│   ├── post.js
│   └── search.js
├── .env
├── README.md
└── server.js
```


## config:
 - Contains configuration files, such as database connection setup.
## models: 
- Defines Mongoose models for room types and rooms.
## routes: 
- Contains route handlers for various endpoints.
## .env: 
- Environment variable configuration file.
## README.md: 
- Documentation file.
## server.js:
- Entry point of the application.
# Dependencies
- express: Web framework for Node.js.
- mongoose: MongoDB object modeling tool.
- dotenv: Loads environment variables from a .env file.
# Database Setup
- The application connects to a MongoDB database using Mongoose. The MongoDB URI is read from the environment variables specified in the .env file.

# Routes
- get.js: Handles GET requests for retrieving rooms and room types.
- post.js: Handles POST requests for creating rooms and room types.
- patch.js: Handles PATCH requests for updating rooms.
- delete.js: Handles DELETE requests for deleting rooms.
- search.js: Handles GET requests for searching rooms based on criteria.
# Models
- Roomtypes.js: Defines the schema and model for room types.
Rooms.js: Defines the schema and model for rooms.
