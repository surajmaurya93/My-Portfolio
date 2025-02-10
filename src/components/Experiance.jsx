import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiRedux } from "react-icons/si";

const Experiance = () => {
  const skillLogo = [
    {
      id: 1,
      logo: <FaHtml5 />,
      name: "HTML",
    },
    {
      id: 2,
      logo: <FaCss3 />,
      name: "CSS",
    },
    {
      id: 3,
      logo: <IoLogoJavascript />,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: <RiTailwindCssFill />,
      name: "Tailwind CSS",
    },
    {
      id: 5,
      logo: <FaReact />,
      name: "React.Js",
    },
    {
      id: 6,
      logo: <SiRedux />,
      name: "Redux Toolkit",
    },
    {
      id: 7,
      logo: <SiMongodb />,
      name: "MongoDB",
    },
    {
      id: 8,
      logo: <SiExpress />,
      name: "Express.Js",
    },
    {
      id: 9,
      logo: <FaNodeJs />,
      name: "Node.Js",
    },

    {
      id: 10,
      logo: <GrMysql />,
      name: "My Sql",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className=" ">
          I've more than 6 Months of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-5">
          {skillLogo.map(({ id, logo, name }) => (
            <div
              className=" flex justify-center items-center flex-col  md:w-[180px] md:h-[180px] p-1 cursor-pointer hover:scale-110 duration-300 my-2"
              key={id}
            >
              <div className="text-9xl">{logo}</div>
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
