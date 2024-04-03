import Card from '../components/Card';

import '../styles/Portfolio.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
  return (
    <section className="pages-container bg-light ">
      <div className="contact-box">
        <h1 className="title text-gradient pb-0">Portfolio</h1>
        {/* <div className="msg-box-2 "> */}
        {/* start of columns */}
        <div className="container ">
          <div className="row justify-content-start">
            <Card
              imageSrc={' ../src/assets/work/sql-tracker.png'}
              title={'SQL Epmloyee Tracker'}
              description={'MySQL Node'}
              link={'https://github.com/judy-her/sql-employee-tracker'}
            />
            <Card
              imageSrc={' ../src/assets/work/beat-by-beat2.0.png'}
              title={'FullStack Group Project'}
              description={'Express JS API'}
              link={'https://beatbybeatv2-d6c2b024a00e.herokuapp.com/'}
            />

            {/* force to break midpoint */}
            <div className="w-100 d-none d-md-block"></div>
            <Card
              imageSrc={' ../src/assets/work/Regex-gist.png'}
              title={'Regex Gist'}
              description={'Regex  JS'}
              link={
                'https://gist.github.com/judy-her/d987c36696539b6799928afdc62fe0ff'
              }
            />
            <Card
              imageSrc={' ../src/assets/work/e-commerce-backend.png'}
              title={'e-comm API backend'}
              description={'MySQL CRUD'}
              link={'https://github.com/judy-her/e-comm-express.js-api'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
