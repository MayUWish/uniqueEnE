import React from "react";
import footerPicture1 from '../../images/footer1.jpeg';
import footerPicture2 from '../../images/footer2.jpeg';
import "./Footer.css";
import {NavLink} from "react-router-dom";

const Footer = () => {
	return (
		<footer >    
      <hr />
 
      <div className="footerWapper">
        <div style={{ width: '20%'}}>
          <img src={footerPicture1} alt='footerImage2' className="footerImg"/>
        </div>
    
    
        <div className="footerContact">
          <div >
            <NavLink style={{ textDecoration: 'none' }} exact to="/listings">
              <h4>{`"Oh the places you'll go" - Explore and Enjoy Your Unique Stays`}</h4>
            </NavLink>
          </div>
          <div style={{ marginLeft: '3%',fontSize:'large' }}>Contact </div>
          <div style={{marginLeft:'3%'}}>Meitong Qu 
          <a href="https://www.linkedin.com/in/meitongqu/" rel="noreferrer" target="_blank">
              <i className="fab fa-linkedin contactIcon1"></i>
          </a>
          <a href="https://github.com/MayUWish" rel="noreferrer" target="_blank">
              <i className="fab fa-github-square contactIcon1"></i>
          </a>
          <a href="https://mayuwish.github.io/" rel="noreferrer" target="_blank">
              <i className="fas fa-address-card contactIcon2"></i>
          </a>
          </div>
        </div>

        <div style={{ width: '20%' }}>
          <img src={footerPicture2} alt='footerImage2' className="footerImg" />
        </div>

      </div>

      
 
    </footer>
	);
};

export default Footer;