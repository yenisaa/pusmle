import { Send } from "lucide-react";
import { contactInfo } from "../data/data";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <section className="max-w-7xl py-2 px-6 md:px-16  mx-auto" id="contact">
      {/* Contact Header Section  */}
      <div className="mb-8">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          Get{" "}
          <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            In Touch
          </span>
        </h2>
      </div>
      {/* CTA  */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 ">
        {/* contact Info  */}
        <div className="">
          {contactInfo.map((contact, index) => (
            <div key={index} className="">
              <div className="text-left ">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {contact.title}
                </h2>
              </div>
              <div className="flex  gap-4">
                <div className="bg-blue-600/10 w-12 h-12 rounded-full flex flex-col items-center justify-center">
                  <contact.icon className="text-blue-600 w-12" />
                </div>

                <div className="">
                  <h4 className="text-lg text-gray-900 font-bold mb-2">
                    {contact.subTitle}
                  </h4>
                  <div className="text-lg">
                    {contact.email.map((mail, index) => (
                      <p className=" text-blue-600" key={index}>
                        {mail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form  */}
        <div className="bg-gray-50 rounded-2xl py-8 px-8">
          <form className="flex flex-col">
            <div className="flex flex-col gap-4 mb-4">
              <label htmlFor="name" className="text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="bg-white text-gray-600 outline outline-offset-1 outline-blue-600/10 focus:outline-2 focus:outline-blue-600/40 focus:outline-offset-1 p-3 rounded-xl  "
              />
            </div>
            <div className="flex flex-col gap-4 mb-4">
              <label htmlFor="email" className="text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="bg-white text-gray-600 outline outline-offset-1 outline-blue-600/10 focus:outline-2 focus:outline-blue-600/40 focus:outline-offset-1 p-3 rounded-xl  "
              />
            </div>
            <div className="flex flex-col gap-4 mb-4">
              <label htmlFor="tel" className="text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="(123) 456 7890"
                className="bg-white text-gray-600 outline outline-offset-1 outline-blue-600/10 focus:outline-2 focus:outline-blue-600/40 focus:outline-offset-1 p-3 rounded-xl  "
              />
            </div>
            <div className="flex flex-col gap-4 mb-4">
              <label htmlFor="message" className="text-gray-600">
                Your Message
              </label>
              <textarea
                type="text"
                cols={10}
                rows={5}
                placeholder="Tell us about your interest"
                className="bg-white text-gray-600 outline outline-offset-1 outline-blue-600/10 focus:outline-2 focus:outline-blue-600/40 focus:outline-offset-1 p-3 rounded-xl  "
              />
            </div>
            <div className="">
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="w-full bg-blue-600 text-white rounded-full flex items-center gap-2 p-3 hover:bg-blue-700 transition-colors duration-300 text-center justify-center backdrop-blur-2xl"
              >
                Send <Send className="text-white flex" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
