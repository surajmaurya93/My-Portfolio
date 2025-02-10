import React from "react";
import Amazon from "../assets/Amazon.png";
import calculator from "../assets/calculator.png";
import tictactoe from "../assets/tictactoe.png";
import TodoApp from "../assets/TodoApp.png";
import StudyGuide from "../assets/StudyGuide.jpg";
import CopyPasteApp from "../assets/CopyPasteApp.jpg";

const Projects = () => {
  const cardItem = [
    {
      id: 1,
      logo: StudyGuide,
      name: "Study Guide",
      about: "UI of study guide website for improve education system",
      prev: "https://study-guide-gamma.vercel.app/",
      source: "https://github.com/surajmaurya93/StudyGuide",
    },
    {
      id: 2,
      logo: Amazon,
      name: "Amazon UI-Clone",
      about: "UI-Clone of famous E-Commerce amazon website",
      prev: "https://amazon-web-ui.netlify.app/",
      source: "https://github.com/surajmaurya93/Amazon-Clone",
    },
    {
      id: 3,
      logo: calculator,
      name: "Calculator",
      about: "This is a simple calculator perform basic arithmetic operations ",
      prev: "https://calc-suraj.netlify.app/",
      source: "https://github.com/surajmaurya93/Calculator-Js",
    },
    {
      id: 4,
      logo: tictactoe,
      name: "Tic-Tac-Toe Game",
      about: "Create a Tic-Tac-Toe game with using HTML, CSS, JS.",
      prev: "https://0tic-tac-toe.netlify.app/",
      source: "https://github.com/surajmaurya93/Tic-Tac-Toe-Game",
    },
    {
      id: 5,
      logo: TodoApp,
      name: "Task Manager App",
      about: "This tool that helps you organize and manage you tasks.",
      prev: "https://todo-app-theta-lemon.vercel.app/",
      source: "https://github.com/surajmaurya93/Todo-App",
    },
    {
      id: 6,
      logo: CopyPasteApp,
      name: "Paste App",
      about: "Write and save your notes, codes, content or anything in this App.",
      prev: "https://paste-app-ivory-sigma.vercel.app/",
      source: "https://github.com/surajmaurya93/Paste-App",
    },
  ];
  return (
    <>
      <div
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <div>
          <h1 className="text-3xl font-semibold mb-2">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 my-12">
            {cardItem.map(({ id, logo, name, about, prev, source }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 my-5"
                key={id}
              >
                <img
                  src={logo}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full p-1 border-[2px]"
                />
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700">{about}</p>
                </div>
                <div className="flex justify-around px-6 py-4">
                  <button className="bg-slate-900 hover:bg-white duration-300 hover:text-black hover:border-2 rounded-md text-white font-bold px-4 py-2">
                    <a href={prev} target={"_blank"}>
                      Preview
                    </a>
                  </button>
                  <button className="bg-white hover:bg-slate-900 duration-300 hover:text-white text-black border-2 rounded-md font-bold px-4 py-2">
                    <a href={source} target={"_blank"}>
                      Source Code
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;