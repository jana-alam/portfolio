import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-indigo-700">
      <h1 className="text-5xl font-semibold text-center m-0 text-white">
        Contact
      </h1>
      <form
        method="POST"
        action="https://formsubmit.co/janaalam2929@gmail.com "
        className="flex justify-around flex-col w-10/12 sm:w-4/12 mx-auto space-y-4 mt-12"
      >
        <input type="email" placeholder="Email" className="p-2" name="email" />
        <textarea
          placeholder="About Your Query"
          className="px-2"
          name="information"
        ></textarea>
        <button
          type="submit"
          className="p-2 bg-white text-indigo-700 font-bold"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
