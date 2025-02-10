import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    setLoading(true);
    try {
      await axios.post("https://getform.io/f/byvvgewa", userInfo);
      toast.success("Message Send SuccessFully");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <h1 className="text-left text-3xl font-bold p-5 text-slate-950">Contact</h1>
        <div className="max-w-md mx-auto my-5 bg-white p-6 rounded-md shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold mb-4 text-slate-950">Send Your Message</h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="mt-1 p-2 block h-12 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className="mt-1 p-2 block h-12 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                name="message"
                rows="4"
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.message && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-slate-600 w-full font-medium text-white px-6 py-3 rounded-md hover:bg-slate-800 focus:outline-none focus:bg-black"
              >
                {loading && (
                  <ClipLoader className="mr-2" size={20} color="white" />
                )}
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
