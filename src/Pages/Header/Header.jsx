import React from 'react';
import video from '../../Videos/vid1.mp4'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()
    return (
        <div className="hero min-h-screen">
            <video
                autoPlay
                muted
                loop
                style={{ objectFit: 'cover', width: '100%', height: '450px', top: 0, left: 0, zIndex: -1 }}
            >
                <source src={video} type="video/mp4" />
                {/* <!-- Add additional source tags for other video formats if needed --> */}
            </video>
            {/* <!-- Rest of your content --> */}
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">

                    <p className="mb-10 text-white text-4xl">"Experiences are the ink in the pen of our life's story."</p>
                    <button onClick={() => navigate('/write')} className="btn px-5 btn-primary">  Write</button>

                </div>
            </div>
        </div>
    );
};

export default Header;