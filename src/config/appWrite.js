import { Client, Databases } from 'appwrite';

const client = new Client();
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Access the endpoint from environment variables
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Access the project ID from environment variables

const databases = new Databases(client);

export { client, databases, DATABASE_ID, COLLECTION_ID };
