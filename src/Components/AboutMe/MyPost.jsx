import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiMapPin, FiMessageSquare } from 'react-icons/fi';
import { SERVER_URL } from '../../config/constant';


const MyPost = () => {
    const [myPosts, setMyPosts] = useState([]);
    const [showFullContent, setShowFullContent] = useState(false);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const result = await axios.get('/api/posts/username/Sumaiya%20Jannati'); // Corrected Axios request
                setMyPosts(result.data);
            } catch (error) {
                console.error('Error fetching posts:', error); // Handle errors
            }
        };

        getPosts();
    }, []);


    // delete option 
    const handleDelete = async (_id) => {
        try {
            // Send a DELETE request to your server to delete the post with the given _id
            await axios.delete(`/api/posts/${_id}`);

            // Remove the deleted post from the state
            setMyPosts((prevPosts) => prevPosts.filter((post) => post._id !== _id));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };


    // see more button
    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };


    return (
        <div className='grid grid-cols-3 gap-5' >
            {
                myPosts.map((post, index) => (
                    (
                        <div className="card card-compact w-96 bg-white p-3  shadow-xl">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="card-title">{post.userName}</h2>
                                </div>

                                <div>
                                    <button onClick={() => handleDelete(post._id)}> X</button>
                                </div>
                            </div>

                            <figure><img className='w-full h-[200px]' src={`${SERVER_URL}/${post.image}`} alt="User Post Images" /></figure>
                            <div className="card-body">
                                <h1>{new Date(post?.createdAt).toDateString()}</h1>
                                <h2 className="card-title">{post.title}</h2>
                                {post.content.length > 100 && (
                                    <div>
                                        <p>{showFullContent ? post.content : post.content.slice(0, 100)}</p>
                                        <button className='text-red-500' onClick={toggleContent}>
                                            {showFullContent ? "See Less" : "See More"}
                                        </button>

                                    </div>
                                )}

                                <div className='flex items-center gap-2'><FiMapPin />{post?.country}</div>
                            </div>
                        </div>
                    )
                ))
            }
        </div>
    );
};

export default MyPost;
