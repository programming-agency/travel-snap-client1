import React from 'react'

export default function About() {
    return (
        <div>
            {/* About Banner */}
            <div className="hero min-h-screen" style={{ backgroundImage: 'url("/about.png")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                    </div>
                </div>
            </div>
            {/* About section */}
            <div className='my-10 flex justify-center items-center px-20'>
                <p className='w-2/4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Distinctio, beatae. <span className='text-[#FFA500] text-2xl'>See More </span></p>

                <p className='w-2/4 text-center justify-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam necessitatibus ex sapiente quis, quibusdam ratione! Alias deserunt, adipisci optio quisquam dignissimos nisi, vitae natus sit eveniet maxime  blanditiis eveniet illo voluptas possimus tempora. Architecto consectetur           <br />mollitia totam dolor culpa eaque! Deleniti nulla suscipit voluptatem velit odio est officiis debitis veniam inventore eligendi iure minus excepturi numquam, sed repellendus nisi aliquam eum molestiae reprehenderit, recusandae magnam nam? Aspernatur alias architecto soluta sunt nostrum!</p>
            </div>
            <div className='px-20'>
                <img src="/about1.png" alt="" />
            </div>
        </div>
    )
}
