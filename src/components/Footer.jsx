import React from "react";
import {
  FaFacebookSquare ,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4 text-slate-900">
              <a href="https://www.facebook.com/profile.php?id=100017873250923&mibextid=ZbWKwL" target={"_blank"}><FaFacebookSquare size={24} className="hover:scale-125 transition-all duration-100 ease-in"/> </a>
              <a href="https://github.com/surajmaurya93" target={"_blank"}><FaGithubSquare size={24} className="hover:scale-125 transition-all duration-100 ease-in"/> </a>
              <a href="https://www.linkedin.com/in/suraj-maurya93?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target={"_blank"}><FaLinkedin  size={24} className="hover:scale-125 transition-all duration-100 ease-in"/> </a>
              <a href="https://www.instagram.com/suraj_maurya_1508?igsh=NnUzZnljdmk3ZHpt" target={"_blank"}><FaInstagramSquare size={24} className="hover:scale-125 transition-all duration-100 ease-in"/></a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm text-slate-950">
                &copy; 2025 Suraj Maurya. All Right Reserved.
              </p>
              <p className="text-sm text-slate-950">Supportive Partner ❤️ My-Self</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
