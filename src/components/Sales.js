import salesimage from "../assests/sales image.jpg"

function Sales(){
    return(
      <div className="sales-image">
          <img src={salesimage} alt="sales img"/>
          <div className="sales-image__offer">
              <h2>Udemy Flash Sale! 24 hours to save.</h2>
              <p>Get the top courses for just 499. Just one day to save but a lifetime to learn</p>
          </div>
      </div>
    )
  }

  export default Sales
  