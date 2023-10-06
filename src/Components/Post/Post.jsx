import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { SERVER_URL } from '../../config/constant';

const Post = ({ post }) => {
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    // Adjust the slice length as needed

    return (
        <div>
            <div className="card w-96 bg-white shadow-xl">
                <div>
                    <div className="w-full carousel rounded-box">
                        {
                            post.images.map((image, index) => (
                                <div className="carousel-item w-full">
                                    <img className='w-full h-[300px]' src={`${SERVER_URL}/${image}`} alt="User Post Images" />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{post?.title}</h2>
                    <h1>{new Date(post?.createdAt).toDateString()}</h1>
                    <p>{post?.userName}</p>

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
        </div>
    );
};

export default Post;
