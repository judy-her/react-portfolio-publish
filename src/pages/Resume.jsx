import '../styles/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
  return (
    <section className="pages-container bg-light ">
      <div className="contact-box">
        <h1 className="title text-gradient">Resume | Technical Skills</h1>
        <div>
          <h2 className="text-gradient sub-title">Front-End Skill Set</h2>
          <ul>
            <li className="text-gradient">
              HTML | CSS | Tailwind| JavaScript | jQuery | Bootstrap | React
            </li>
          </ul>
          <h2 className="text-gradient sub-title">Back-End Skill Set</h2>
          <ul>
            <li className="text-gradient">
              API | Node | Express| MySQL | Sequelize| Jest| MongoDB | Mongoose|
              REST | GraphQl
            </li>
          </ul>
          <h2 className="text-gradient sub-title">Education</h2>
          <ul>
            <li className="text-gradient">
              UC Berkeley Extension,
              <br />
              Full Stack Web Development, 2024
              <br />
              <br />
              Loyola Marymount University,LMU
              <br />
              MA Education 2018
              <br />
              <br />
              University of Los Angeles,UCLA
              <br />
              BA History 2011
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Resume;
