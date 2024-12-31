### React CRUD Application with Appwrite

This is a simple React application that uses Appwrite as the backend service to handle CRUD (Create, Read, Update, Delete) operations. The application is built with Vite for faster development and includes basic functionality to add, delete, fetch, and update posts.

### Features

- Add new posts
- Fetch and display posts
- Update existing posts
- Delete posts

### Tech Stack

- Frontend: React, JavaScript
- Backend: Appwrite
- Build Tool: Vite
- Post Structure
    **Each post contains the following fields**:
    ```
    title: The title of the post
    content: The content/description of the post
    author: The author of the post
    created_at: The timestamp when the post was created
    ```

### Prerequisites

Before running this application, ensure you have the following installed:

```Node.js (v14 or later)```

```npm or yarn```

An Appwrite instance set up

Getting Started

1. **Clone the Repository**

git clone 
cd <repository-folder>

2. **Install Dependencies**

```npm install```

or if you're using Yarn:

```yarn install```

3. **Set Up Appwrite**

Set up an Appwrite server and create a project.

Create a database and a collection for posts.

Define the following fields in your collection:

```
title (String)

content (Text)

author (String)

created_at (Timestamp)
```

Note the Project ID, Database ID, and Collection ID from your Appwrite console.

4. Configure Environment Variables

Create a .env file in the root of your project and add the following variables:

VITE_APPWRITE_ENDPOINT=<Your-Appwrite-Endpoint>
VITE_APPWRITE_PROJECT_ID=<Your-Appwrite-Project-ID>
VITE_APPWRITE_DATABASE_ID=<Your-Appwrite-Database-ID>
VITE_APPWRITE_COLLECTION_ID=<Your-Appwrite-Collection-ID>

5. Run the Application

Start the development server:

```npm run dev```

or if you're using Yarn:

```yarn dev```

The application will be available at http://localhost:5173.

### How It Works

**Adding Posts**:

    The user fills out the form with title, content, and author.

    The post is saved to the Appwrite database.

**Fetching Posts**:

    Posts are retrieved from the Appwrite collection and displayed in a list.

**Updating Posts**:

    The user selects a post, edits its details in the form, and submits the update.

**Deleting Posts**:

    The user can delete a post by clicking the delete button on the post item.

### Deployment

To build the application for production:

```npm run build```

or if you're using Yarn:

```yarn build```

The production-ready files will be in the dist folder. You can deploy these files to any static hosting service.