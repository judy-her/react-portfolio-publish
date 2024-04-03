import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ imageSrc, title, description, link }) {
  return (
    <div className="col-6 col-sm-4 card">
      <img className="card-img-top" src={imageSrc} alt="project image" />
      <div className="card-body">
        <h4 className="card-title text-gradient">{title}</h4>
        <h5 className="card-text text-gradient">{description}</h5>
        <a href={link} className="btn-git btn-primary">
          Github
        </a>
      </div>
    </div>
  );
}

export default Card;
