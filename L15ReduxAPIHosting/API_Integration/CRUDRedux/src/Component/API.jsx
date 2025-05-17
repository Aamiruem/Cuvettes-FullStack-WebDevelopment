// import axios from 'axios'
// import { useState useEffect } from 'react';

// const fetchData = async () => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         console.log(response.data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// const API = () => {
//     const [posts, setPosts] = useState([]);

//     const url = ""

//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//                 setPosts(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         };
//         fetchPosts();
//     }, []);
//     return (
//         <div>
//             <h1>API Integration</h1>
//             <p>This is a simple API integration example.</p>
//             <button onClick={fetchData}>Fetch Data</button>
//             <p>Check the console for API response.</p>
//         </div>
//     )
// }

// export default API









// import React, { useState, useEffect } from "react";
// import axios from "axios";


// const API = () => {
//     const [posts, setPosts] = useState([]);

//     const url = "https://jsonplaceholder.typicode.com/posts";

//     const getPosts = async () => {
//         try {
//             const response = await axios.get(url);
//             console.log(response.data);
//             setPosts(response.data);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     useEffect(() => {
//         getPosts();
//     }, []);

//     return (
//         <div>
//             <h1>API Data</h1>
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}><strong>{post.title}</strong></li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default API;








// import axios from "axios";
// import React, { useState, useEffect } from "react";


// const API = () => {
//     const [posts, setPosts] = useState([]);

//     const url = "https://jsonplaceholder.typicode.com/posts";

//     const postDataValue = {
//         userId: 101,
//         id: 101,
//         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     };

//     // Fetch posts
//     const getPosts = async () => {
//         try {
//             const response = await axios.get(url);
//             setPosts(response.data);
//         } catch (err) {
//             console.log("GET error:", err);
//         }
//     };

//     // Post data
//     const postPosts = async () => {
//         try {
//             const response = await axios.post(url, postDataValue);
//             console.log("POST response:", response.data);
//         } catch (err) {
//             console.log("POST error:", err);
//         }
//     };

//     useEffect(() => {
//         getPosts();
//     }, []);

//     return (
//         <div>
//             <h2>List Items</h2>
//             <ul>
//                 {posts && posts.map((item, index) => (
//                     <li key={index}>{item.title}</li>
//                 ))}
//             </ul>
//             <button onClick={postPosts}>Post Data</button>
//         </div>
//     );
// };

// export default API;





















// import React from "react";
// import axios from "axios";
// import { useGetPostQuery } from "../Redux/Slices/Api/postApiSlice";
// import { useGetPostQuery, useAddPostMutation } from "../Redux/Slices/Api/postApiSlice";

// const Api = () => {
//     const { data: posts, isLoading, error } = useGetPostQuery();

//     const postPostData = async () => {
//         const postDataValue = {
//             userId: 101,
//             id: 101,
//             title: "sunt aut facere repellat provident occaecati",
//             body: "quia et suscipit suscipit recusandae consequuntur expedita et cum",
//         };

//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8",
//                 },
//                 body: JSON.stringify(postDataValue),
//             });

//             const result = await response.json();
//             console.log("Posted:", result);
//         } catch (err) {
//             console.error("Error posting data:", err);
//         }
//     };

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error loading posts</div>;

//     const{data: posts} = useGetPostQuery();
//     console.log("Posts:", posts);
//     const [addPost] = useAddPostMutation();


//     return (
//         <div>
//             <h2>List Items</h2>
//             <ul>
//                 {posts &&
//                     posts.map((item, index) => (
//                         <li key={index}>{item.title}</li>
//                     ))}
//             </ul>
//             <button onClick={postPostData}>Post Data</button>
//         </div>
//     );
// };

// export default Api;








import React from "react";
import { useGetPostQuery, useAddPostMutation } from "../Redux/Slices/Api/postApiSlice";

const API = () => {
    // Get posts data
    const { data: posts, isLoading, error } = useGetPostQuery();
    const [addPost] = useAddPostMutation();

    const postPostData = async () => {
        const postDataValue = {
            userId: 101,
            id: 101,
            title: "sunt aut facere repellat provident occaecati",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum",
        };

        try {
            // Using RTK Query mutation
            const result = await addPost(postDataValue).unwrap();
            console.log("Posted:", result);
            
            // Alternative using fetch (remove if using RTK mutation)
            /*
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(postDataValue),
            });
            const result = await response.json();
            console.log("Posted:", result);
            */
        } catch (err) {
            console.error("Error posting data:", err);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading posts</div>;

    return (
        <div>
            <h2>List Items</h2>
            <ul>
                {posts &&
                    posts.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
            </ul>
            <button onClick={postPostData}>Post Data</button>
        </div>
    );
};

export default API;
