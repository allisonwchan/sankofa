//import logo from './logo.svg';
//import dispHeader from './edu-rsc.js';
import './Education.css';

function Edu() {
  return (
    <div className="edu-container">
  

      <h1 className="eduh1">Educational Resources</h1>
      <h2 className="eduh2">General Resources</h2>

      <div className="flexRow">
      <a href="https://www.understood.org">
        <button className="edubutton">Understood</button>
      </a> 
      <a href="https://sites.ed.gov/idea/">
        <button className="edubutton">Individuals with Disabilities Education Act</button>
      </a> 
      </div>
      

      <h2 className="eduh2">Community Advisory Committees (CACs)</h2>
      <div className="flexCol">
      <a href="https://www.scusd.edu/community-advisory-committee-cac">
        <button className="edubutton" >Sacramento City Unified School District CAC</button>
      </a>
      <a href="https://www.sjcoe.org/selpa/CAC.aspx#:~:text=The%20purpose%20of%20the%20Community,of%20children%20with%20exceptional%20needs">
        <button className="edubutton">San Joaquin County Office of Education CAC</button>
      </a>
      <a href="https://natomasunified.org/departments/student-services-and-support/community-advisory-committee-cac/">
        <button className="edubutton">Natomas Unified School District CAC</button>
      </a>
      <a href="https://www.sonomaselpa.org/pub/selpa_docs/cac.html">
        <button className="edubutton">Sonoma County CAC</button>
      </a>
      </div>


    </div>
  );
}

export default Edu;
 