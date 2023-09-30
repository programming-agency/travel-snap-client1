import React, { useRef } from "react";
// import emailjs from '@emailjs/browser'; 
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";


export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs
        //     .sendForm(
        //         'service_p42y1ho',
        //         'template_omey387',
        //         form.current,
        //         'nYlMugt9MwzROyHj_')
        //     .then(
        //         (result) => {
        //             console.log(result.text);
        //         },
        //         (error) => {
        //             console.log(error.text);
        //         }
        //     );
        // e.target.reset()
    };


    return (
        <section >
            {/* Contact header  */}
            <div className="hero  h-[350px]" style={{ backgroundImage: 'url("/contact.png")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Contact </h1>

                    </div>
                </div>
            </div>

            <div className="my-20">
                <h1 className=" text-center"> PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</h1>
            </div>
            <div>
                {/* address section */}
                <div>
                    {/* title  */}
                    <h2 className="text-3xl my-20 text-center">Contact Information</h2>
                    <div className="flex justify-center px-20  items-center">
                        <div className="w-[50%] space-y-5">
                            {/* Address section */}
                            <div className="flex items-center gap-4">
                                <p className="text-4xl"><FiMapPin /></p>
                                <p className="text-2xl "> Owatonna, Minnesota,55060</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="text-4xl"><FiPhone /></p>
                                <p className="text-2xl ">+8801996666834</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="text-4xl"><FiMail /></p>
                                <p className="text-2xl ">sumaiyajannati200207@gmail.com</p>
                            </div>
                        </div>

                        {/* Email section */}
                        <div className="w-[50%]">
                            <form ref={form} onSubmit={sendEmail} >
                                <div className="card-body">
                                    <div className="form-control">
                                        <input type="text" placeholder="Full Name"
                                            name="user_name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" placeholder="Email"
                                            name="user_email"
                                            className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" placeholder="Subject "
                                            name="subject" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        < textarea rows={5} cols={5} type="text" placeholder="Write Message"
                                            name="message" className="input input-bordered" />

                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-primary">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


