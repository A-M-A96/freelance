import React from 'react'

const Homepage=()=>{

return (
<>
  <header className="masthead bg-primary text-white text-center pt-5">
    <div className="container d-flex align-items-center flex-column">
      
        <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />
    
        <h1 className="masthead-heading text-uppercase mb-0">Telecommunications Software (RAE411) project </h1>
    
        <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
      
        <p className="masthead-subheading font-weight-light mb-0">php - ApiPlatform - React.JS</p>
    </div>
  </header>
  <div class="pt-5">   
  </div>
<footer className="footer text-center">
<div className="container">
    <div className="row">
        
        <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">About Me</h4>
            <p className="lead mb-0">
            Mohamed Amine Abdessemed
                <br />
                200ADM007
            </p>
        </div>
     
        <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Symfony (API)</h4>
        </div>
      
        <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">Take a look</h4>
            <p className="lead mb-0"> 
                <a href="https://github.com/AMAMinou/freelance" target="_blank"> check the project in github </a>
                .
            </p>
        </div>
    </div>
</div>
</footer>

<div class="copyright py-4 text-center text-white">
            <div class="container"><small>Copyright © </small></div>
</div>

</>


);


}

export default Homepage;