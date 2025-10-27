import React from 'react';
import logo from '../../asset/logo.jpg';
import './Footer.css';
import '../../App.css'
import face from '../../asset/face.jpg'
import instagram from '../../asset/instagram.jpg'
import twitter from '../../asset/twitter.jpg'
import youtube from '../../asset/youtube.jpg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='btn-top'>
          <i class="bi bi-chevron-double-up"></i>
        </button>

        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

   
          <div className="col">
            <div className="p-3">
              <p className="p1">FDF</p>
              <span className="span1"></span>
              <ul className="ul1" id="ul1">
                <li>Our Services</li>
                <li>Media Center</li>
                <li>Open Data</li>
                <li>Publications</li>
                <li id='sop'>Social Programs</li>
              </ul>
            </div>
          </div>


          <div className="col" id="div2">
            <div className="p-3">
              <p className="p1">Quick Links</p>
              <span className="span1"></span>
              <ul className="ul1" id="ul1">
                <li>Contact Us</li>
                <li id='trc'>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Sitemap</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>


          <div className="col" id="div3">
            <div className="p-3">
              <p className="p1">Apply Now</p>
              <span className="span1"></span>
              <ul className="ul1" id="ul1">
                <li>Training Request</li>
                <li>Advisor Initiative in Each Family</li>
                <li id='appn'>Register Members of the Nawait Initiative</li>
              </ul>
            </div>
          </div>

    
          <div className="col" id="div4">
            <div className="p-3">
              <p className="p1">Get in Touch</p>
              <span className="span1"></span>
              <ul className="ul1">
                <li><i className="bi bi-geo-alt-fill"></i>&nbsp; Abu Dhabi, Al Ain, Al Dhafra</li>
                <li><i className="bi bi-envelope-fill"></i>&nbsp; info@fdf.gov.ae</li>
                <li id='abuc'><i className="bi bi-telephone-fill"></i>&nbsp; Abu Dhabi Contact Center:800&nbsp;555</li>
              </ul>
              <p className="p2">
                Family Call Center: 80033322<br />
                FDF Call Center: +971&nbsp;2&nbsp;4476900
              </p>
            </div>
          </div>

  
          <div className="col">
            <div className="f">
              <div className="p-3">
                <img src={logo} className="img" alt="FDF Logo" />
              </div>
              <div className="div-img">
                <img src={face} alt="" />
                <img src={instagram} alt="" className='insta' />
                <img src={twitter} alt="" />
                <img src={youtube} alt=""  className='youtube'/>
          
              </div>
            </div>
          </div>

        </div>

        <hr className="hr" />

      
        <div className="row">
          <div className="col" id="div-f">
            ALL RIGHTS RESERVED &copy; 2024 - Family Development Foundation
          </div>
          <div className="col-md-auto" id="div-f1">
            Website's Last Updated 18/07/2024
          </div>
          <div className="col col-lg-2" id="div-f">
            Number of Visitors: 62,548
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
