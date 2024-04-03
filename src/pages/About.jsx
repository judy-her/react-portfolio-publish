import '../styles/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <section className="pages-container bg-light ">
      <div className="contact-box">
        <h1 className="title text-gradient">About Me</h1>
        <div className="msg-box ">
          <p className="body-text text-gradient ">
            Hey there! I'm Judith,a Full Stack Web Developer based in Los
            Angeles. I'm all about working hard and conquering challenges. My
            passion and determination fuel me to set high goals and go above and
            beyond expectations. I thrive in environments that promote
            collaboration and encourage innovative thinking. Being part of a
            team that's not afraid to push limits and question norms is
            incredibly inspiring. I'm fully committed to giving my absolute best
            to every project and meet project deadlines.
          </p>
          <div className="profile-image-box">
            <img
              className="bio-image"
              src=" ../src/assets/about/Me-pic.png"
              alt="profile image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
