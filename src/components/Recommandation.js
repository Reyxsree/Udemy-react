import c1 from "../assests/c1.jpg"
import c2 from "../assests/c2.jpg"
import c3 from "../assests/c3.jpg"
import c4 from "../assests/c4.jpg"




function Recommandation(){
    return(
      <div className="recommended">
          <h1 className="recommended__title">Recommended for you</h1>
          <p>Pick the best fit</p>
          <div className="recommended__container">
              <div className="course-card">
                  <img src={c1} alt="c1"/>
                  <h3>2023 Python Data Visualization Masterclass</h3>
                  <p>col steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>1999</del></p>
              </div>
  
              <div className="course-card">
                  <img src={c2} alt="c1"/>
                  <h3>Basic to Advance Programming with EMC</h3>
                  <p>col steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>1999</del></p>
              </div>
  
              <div className="course-card">
                  <img src={c3} alt="c1"/>
                  <h3>Web Development Bootcamp 2023</h3>
                  <p>col steele</p>
                  <p>3 ⭐⭐⭐</p>
                  <p>449 <del>1999</del></p>
              </div>
  
              <div className="course-card">
                  <img src={c4} alt="c1"/>
                  <h3>Master UI/UX Designing with Figma</h3>
                  <p>col steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>1999</del></p>
              </div>
  
          </div>
      </div>
    )
  }

  export default Recommandation