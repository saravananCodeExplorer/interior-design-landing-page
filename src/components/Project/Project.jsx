import { useState } from "react";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "MAIN STREET HOUSE",
    subtitle: "view project",
    left: "./images/project-left1.jpg",
    right: "./images/bed_room_1.jpg",
  },
  {
    id: 2,
    title: "MODERN VILLA",
    subtitle: "view project",
    left: "./images/project-left2.jpg",
    right: "./images/bed_room_2.jpg",
  },
  {
    id: 3,
    title: "LUXURY HOME",
    subtitle: "view project",
    left: "./images/project-left3.jpg",
    right:"./images/bed_room_3.jpg",
  },
];

const Project = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  return (
    <section id="project" className="project">

      <div className="project-left">
        <img src={projects[current].left} alt="" />
      </div>

      <div className="project-right">

        <img src={projects[current].right} alt="" />

        <div className="project-overlay">

          <div className="project-text">

            <h2>{projects[current].title}</h2>

            <p>{projects[current].subtitle}</p>

          </div>

          <div className="project-buttons">

            <button onClick={prevSlide}>←</button>

            <button onClick={nextSlide}>→</button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Project;