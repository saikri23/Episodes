import CONTACTIMG from "../assets/contact-us.jpg";
import { useState } from "react";

const Contact = () => {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className="flex flex-wrap justify-evenly mt-14 mr-auto mb-7 overflow-y-hidden">

        <img src={CONTACTIMG} data-testid="contact" className="w-1/4"></img>
      
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-bold text-2xl mb-4">Contact Us</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                <div className=" w-full h-10 my-4 px-3 flex border border-solid border-gray-400 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <input className="w-full focus:outline-none font-[icomoon]" type="text" placeholder="Name"></input>
                </div>
                <div className="h-10 my-4 px-3 flex border border-solid border-gray-400 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <input className="w-full focus:outline-none font-[icomoon]" type="text" placeholder="E-mail"></input>
                </div>
                <div className="h-10 my-4 px-3 flex border border-solid border-gray-400 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    <input className="w-full focus:outline-none font-[icomoon]" placeholder="Message" ></input>
                </div>                 
                <button className="py-[6px] mt-5 px-5 rounded font-medium bg-orange-400 text-white">Send</button>
                {message && <h1 className="pt-3 text-lg">Thanks for contacting Delo ! We'll reply ASAP.</h1>}
              </form>
          </div>
    </div>
  )
};

export default Contact;