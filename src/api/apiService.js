import { ID } from "appwrite";
import { COLLECTION_ID, DATABASE_ID, databases } from "../config/appWrite";

export const getPosts = async () => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    return response.documents;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await databases.getDocument(DATABASE_ID, COLLECTION_ID, postId)
    return response.document
  } catch (error) {
    console.error("Error Fetching Post", error)
  }
};

export const createPost = async ({title, content, author, created_at}) => {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        title,
        content,
        author,
        created_at,
      }
    );
    return response;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const updatePost = async (postId, {title, content, author, created_at}) => {
  try {
    const response = await databases.updateDocument(DATABASE_ID, COLLECTION_ID, postId, {
      title,
      content,
      author,
      created_at,
    })
    return response
  } catch (error) {
    console.error("Error Updating data:", error)
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, postId)
    return response
  } catch (error) {
    console.error('Error Deleting Post', error)
  }
};
