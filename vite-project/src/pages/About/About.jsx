import "./About.css";

export default function About() {
    return (
      <>
      <div className="about">
      <h2>CPSC 455 Assignment</h2>
        <div className="about-content">
          <p>
            This is a team builder website for CPSC 455 during the Summer of 2024. <br></br>
            The purpose of this website is to learn the full cycle of full-stack development. <br></br>
            The front-end was built with React and Redux, the back-end/server with Express/Node.js and MongoDB/Mongoose. <br></br>
            Tests were made with Jest and react-testing-library. <br></br>
            CI/CD pipeline was built with Github Actions and deployment through Render.
          </p>
          <p>
            Students can register a member into a team, read about other members and remove, edit and search individual members.
          </p>
        </div>
      </div>
      </>
    );
  }