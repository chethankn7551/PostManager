import React, { useEffect, useState } from "react";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../../api/apiService";
import "./style.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [editingPost, setEditingPost] = useState(null);
  const [updatedPost, setUpdatedPost] = useState({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const createdAt = new Date().toISOString();
      await createPost({ ...newPost, created_at: createdAt });
      fetchPosts();
      setNewPost({ title: "", content: "", author: "" });
      alert("Post Created Successfully");
    } catch (error) {
      console.error("Error creating data: ", error);
    }
  };

  const handleUpdatePost = async (postId, e) => {
    e.preventDefault();
    try {
      await updatePost(postId, updatedPost);
      fetchPosts();
      setEditingPost(null);
      setUpdatedPost({ title: "", content: "", author: "" });
    } catch (error) {
      console.error("Error Updating Post:", error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      fetchPosts();
      alert("Deleted Post Successfully");
    } catch (error) {
      console.error("Error Deleting Post", error);
    }
  };

  const handelCancel = () => {
    setEditingPost(null);
    setUpdatedPost({ title: "", content: "", author: "" });
  };

  return (
    <div className="posts-container">
      {editingPost === null && (
        <form onSubmit={handleCreatePost} className="form-container">
          <h2>Create new Post</h2>
          <input
            type="text"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            placeholder="New Post Title"
          />
          <textarea
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
            placeholder="Content"
          />
          <input
            type="text"
            value={newPost.author}
            onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
            placeholder="Author Name"
          />
          <button type="submit">Create Post</button>
        </form>
      )}

      {posts.map((post) => (
        <div key={post.$id}>
          {editingPost === post.$id ? (
            <>
              <form
                className="form-container"
                onSubmit={(e) => handleUpdatePost(post.$id, e)}
              >
                <h2>Update Post</h2>
                <input
                  type="text"
                  value={updatedPost.title}
                  onChange={(e) =>
                    setUpdatedPost({ ...updatedPost, title: e.target.value })
                  }
                  placeholder="Update Post Title"
                  required
                />

                <textarea
                  value={updatedPost.content}
                  onChange={(e) =>
                    setUpdatedPost({
                      ...updatedPost,
                      content: e.target.value,
                    })
                  }
                  placeholder="Update Content"
                  required
                />

                <input
                  type="text"
                  value={updatedPost.author}
                  onChange={(e) =>
                    setUpdatedPost({ ...updatedPost, author: e.target.value })
                  }
                  required
                  placeholder="Update Author Name"
                />
                <div className="update-post-buttons">
                  <button type="submit">Update Post</button>
                  <button onClick={handelCancel}>Cancel</button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="posts-list">
                <h2>Post List</h2>
                <p>Title: {post.title}</p>
                <p>Content: {post.content}</p>
                <p>Author: {post.author}</p>
                <p>Created At: {post.created_at}</p>
                <div className="update-post-buttons">
                  <button onClick={() => setEditingPost(post.$id)}>Edit</button>
                  <button onClick={() => handleDelete(post.$id)}>Delete</button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
