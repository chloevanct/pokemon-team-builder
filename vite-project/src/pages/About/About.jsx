import "./About.css";

export default function About() {
    return (
      <>
      <div className="about">
      <h2>CPSC 455: Assignment 3</h2>
        <div className="about-content">
          <p>
            As a student in UBC CPSC 455 during the Summer of 2024, I have created a team builder website for Assignment 3.
            The purpose of this website is to build on React and Redux by incorporating Thunks, and building a server with Express/Node.js which was covered in Workshop 3.
          </p>
          <p>
            Students can register a member into a team, read about other members and remove, edit and search individual members
          </p>
        </div>
      </div>
      </>
    );
  }