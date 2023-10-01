import React from 'react';

const LandingPages = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">

                <div className="hero min-h-screen" style={{ backgroundImage: 'url(/bg.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-  text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-[#E0E514] font-[Inter] font-bold">TravelSnap</h1>
                            <p className="mb-5 text-4xl whitespace-nowrap text-white font-[Inter] font-bold ">Discover. Snap. Share. Repeat.</p>
                            <a href="/home"> <button className=" text-black rounded-md bg-white px-10 py-1">Explore  ❯</button>  </a>
                        </div>
                    </div>
                </div>


                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(/bg.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-[#E0E514] font-[Inter] font-bold">TravelSnap</h1>
                            <p className="mb-5 text-4xl whitespace-nowrap text-white font-[Inter] font-bold ">Discover. Snap. Share. Repeat.</p>
                            <a href="/home"> <button className=" text-black rounded-md bg-white px-10 py-1">Explore  ❯</button>  </a>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(/bg.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-[#E0E514] font-[Inter] font-bold">TravelSnap</h1>
                            <p className="mb-5 text-4xl whitespace-nowrap text-white font-[Inter] font-bold ">Discover. Snap. Share. Repeat.</p>
                            <a href="/home"> <button className=" text-black rounded-md bg-white px-10 py-1">Explore  ❯</button>  </a>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(/bg.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-[#E0E514] font-[Inter] font-bold">TravelSnap</h1>
                            <p className="mb-5 text-4xl whitespace-nowrap text-white font-[Inter] font-bold ">Discover. Snap. Share. Repeat.</p>
                            <a href="/home"> <button className=" text-black rounded-md bg-white px-10 py-1">Explore  ❯</button>  </a>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div >
    );
};

export default LandingPages;