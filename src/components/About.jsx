import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-14"
    >
      <div>
        <h1 className="text-3xl font-semibold mb-5 mt-[-10px] text-slate-950">About</h1>
        <p className="text-slate-900">
        Hi, I'm Suraj Maurya, a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. I specialize in creating dynamic, user-friendly web applications that are scalable and efficient.
        </p>
        <br />
        <h1 className="font-semibold text-xl">
          Education
        </h1>
        <span className="text-slate-900">
          BCA From Rajasthan University.
        </span>
        <br />
        <br />
        <h1 className="font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span className="text-slate-900">
        With expertise in HTML, CSS, JavaScript, and modern frameworks like React I craft intuitive, user-friendly interfaces. On the back-end, I work with Node.js and Express.js, along databases such as MongoDB and MySQL to build scalable, efficient, and reliable systems. i am also experienced with version control tools like Git and Github.
        </span>
        <br />
        <br />
        <h1 className="font-semibold text-xl">
          Mission Statement
        </h1>
        <p className="text-slate-900">
        I’m constantly exploring new technologies and challenges, and I’m always eager to take on exciting projects that push the boundaries of what’s possible on the web.
        </p>
      </div>
    </div>
  );
}

export default About;
