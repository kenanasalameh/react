
import React, { useState } from 'react';
import logo from '../../asset/logo.jpg';
import './Header.css';


const Header = () => {
  const [openMenu, setOpenMenu] = useState();
    const getNavHeight = () => {
    switch(openMenu) {
      case 'about': return '200px';
      case 'services': return '560px';
      case 'tenders': return '120px';
      case 'publications': return '200px';
      case 'openData': return '120px';
      case 'media': return '200px';
      default: return 'auto';
    }
  }
  return (
    <div className="sticky-header">
      
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid">
    
          <img src={logo} alt="logo" />
          <div className='pm'>
            
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="bi bi-telephone-fill" id="i"></i>
                  &nbsp;&nbsp;971&nbsp;2&nbsp;4476900
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-envelope-fill" id="i"></i>
                  &nbsp;&nbsp;info@fdf.gov.ae
                </a>
              </li>

          </div> 
        
          <div  class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="ul">
              
          
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="bi bi-search" id="search1"></i>
                </a>
              </li>

      
              <li className="nav-item">
                <a className="nav-link active" href="#" id="search">
                  <b>عربي</b>
                </a>
              </li>

            
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Setting
                </a>
              </li>

      
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="bi bi-telephone-fill" id="i"></i>
                  &nbsp;&nbsp;971&nbsp;2&nbsp;4476900
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-envelope-fill" id="i"></i>
                  &nbsp;&nbsp;info@fdf.gov.ae
                </a>
              </li>

      
              <li className="nav-item">
                <a className="nav-link active" href="#" id="search">
                  Al Dhabianiya Private School
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Al Bateen Scientific Private School
                </a>
              </li>

            </ul>
          </div>
        </div>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
    </button>
      </nav>
 
   
     
      <div className='nav2 ' style={{ position: 'relative' }}>
   
 
        <div className='nav1 row'   style={{ height: getNavHeight(), transition: 'height 1s' }}
         onMouseLeave={() => setOpenMenu()}>
        
        <ul className='ul-nav1'>
          <li><i className="fa-solid fa-house" id='i-nav'></i>&nbsp;<a href="#">Home</a></li>

        <li 
  onMouseEnter={() => setOpenMenu('about')}


>
  <a 
    href="#" 
    style={{ color: openMenu === 'about' ? '#fff' : '' }}
  >
    About FDF &nbsp;
      <i 
      className="fa-solid fa-angle-down"
      style={{
        display: 'inline-block',
        transition: 'transform 1s ease', 
        transform: openMenu === 'about' ? 'rotate(180deg)' : 'rotate(0deg)', 
        color: openMenu === 'about' ? '#fff' : 'inherit'
      }}
    ></i>
   
  </a>
</li>


          <li onMouseEnter={() => setOpenMenu('services')}>
            <a href='#' style={{ color: openMenu === 'services' ? '#fff' : '' }}>Services Manual&nbsp;
                     <i 
      className="fa-solid fa-angle-down"
      style={{
        display: 'inline-block',
        transition: 'transform 1s ease', 
        transform: openMenu === 'services' ? 'rotate(180deg)' : 'rotate(0deg)', 
        color: openMenu === 'services' ? '#fff' : 'inherit'
      }}
    ></i></a>
          </li>

          <li onMouseEnter={() => setOpenMenu('tenders')}>
            <a href='#' style={{ color: openMenu === 'tenders' ? '#fff' : '' }}>Tenders and Auction&nbsp;      <i 
      className="fa-solid fa-angle-down"
      style={{
        display: 'inline-block',
        transition: 'transform 1s ease', 
        transform: openMenu === 'tenders' ? 'rotate(180deg)' : 'rotate(0deg)', 
        color: openMenu === 'tenders' ? '#fff' : 'inherit'
      }}
    ></i></a>
          </li>

          <li><a href='#' >Social Programs</a></li>

          <li onMouseEnter={() => setOpenMenu('publications')}>
            <a href='#' style={{ color: openMenu === 'publications' ? '#fff' : '' }}>Publications&nbsp;      <i 
      className="fa-solid fa-angle-down"
      style={{
        display: 'inline-block',
        transition: 'transform 1s ease', 
        transform: openMenu === 'publications' ? 'rotate(180deg)' : 'rotate(0deg)', 
        color: openMenu === 'publications' ? '#fff' : 'inherit'
      }}
    ></i></a>
          </li>

          <li onMouseEnter={() => setOpenMenu('openData')}>
            <a href='#' style={{ color: openMenu === 'openData' ? '#fff' : '' }}>Open Data&nbsp;      <i 
      className="fa-solid fa-angle-down"
      style={{
        display: 'inline-block',
        transition: 'transform 1s ease', 
        transform: openMenu === 'openData' ? 'rotate(180deg)' : 'rotate(0deg)', 
        color: openMenu === 'openData' ? '#fff' : 'inherit'
      }}
    ></i></a>
          </li>

          <li onMouseEnter={() => setOpenMenu('media')}>
            <a href='#' style={{ color: openMenu === 'media' ? '#fff' : '' }}>Media Center&nbsp;      <i 
      className="fa-solid fa-angle-down"
      style={{
        display: 'inline-block',
        transition: 'transform 1s ease', 
        transform: openMenu === 'media' ? 'rotate(180deg)' : 'rotate(0deg)', 
        color: openMenu === 'media' ? '#fff' : 'inherit'
      }}
    ></i></a>
          </li>

          <li><a href='#'>Recruitment</a></li>
          <li><a href='#'>Contact Us</a></li>
        </ul>
     
  

  
        {openMenu === 'about' && (
          <div
            className="submenu about-submenu"
            style={{
              position: 'absolute',
              top: '30%',
              left: 0,
              width: '100%',
              zIndex: 1000,
              padding: '10px 0',
            //   borderTop: '1px solid #ccc',
            }}
          >
            <div className="container text-center">
              <div className="row row-cols-4">
                <div className="col-2 f">Supreme Head</div>
                <div className="col-2 f">Words of the Chairman of the Boards of Trustees</div>
                <div className="col-2 f">Board of Trustees</div>
                <div className="col-2 f">Vision,Mission and Corporate Values</div>
                <div className="col-2 f">Strategic Partners</div>
                <div className="col-2 f">Awards received by the Foundation</div>
              </div>
              <div className="row row-cols-4">
                <div className="col f1">Strategic Priorities and Objectives</div>
              </div>
            </div>
          </div>
        )}

        {openMenu === 'services' && (
          <div
            className="submenu services-submenu"
            style={{
              position: 'absolute',
              top: '10%',
              left: 0,
              width: '100%',
              zIndex: 1000,
              padding: '10px 0',
      //   borderTop: '1px solid #ccc',
            }}
          >
              <div className="container text-center">
              <div className="row row-cols-4" id='serv-w'>
                <div className="col-2 f">Integrated Weliare For Action Aging</div>
                <div className="col-2 f">Effective Parenting Skills</div>
                <div className="col-2 f">Integrated Family Social Welfare</div>
                <div className="col-2 f">Childhood and Youth Development</div>
                <div className="col-2 f">Building Women's Skills and Abilities</div>
                <div className="col-2 f">Support Family Stability</div>
              </div>
              <div className="row row-cols-4">
                <div className="col-2 f1">Barakat Al Dar Club Membership Application</div>
                 <div className="col-2 f1">Apply for Early Childhood Parenting Training course</div>
                  <div className="col-2 f1">Request for Social Counseling</div>
                   <div className="col-2 f1">Apply for Safe Childhood Service</div>
                    <div className="col-2 f1">100 Days Challenge Sports Program Application</div>
                     <div className="col-2 f1">Apply for premarital preparation Training Course</div>
              </div>
                       <div className="row row-cols-4">
                <div className="col-2 f1">Wisdom’s Council Membership Application</div>
                 <div className="col-2 f1">Apply for Adolescence Stage Parenting Training course</div>
                  <div className="col-2 f1">Social Welfare Application</div>
                   <div className="col-2 f1">Apply for Al Dar Children and Youth Club Membership</div>
                    <div className="col-2 f1">Excellence in Entrepreneurship Workshop Application</div>
                     <div className="col-2 f1">Apply for Well Financial Planning Skills Workshop</div>
              </div>
                            <div className="row row-cols-4">
                <div className="col-2 f1">Apply for Senior Citizens and Residents’ social support</div>
                 <div className="col-2 f1">Apply for Promote Men’s Positive Role Parenting Training course</div>
                  <div className="col-2 f1"></div>
                   <div className="col-2 f1">Apply for Child Social Council Membership</div>
                    <div className="col-2 f1"></div>
                     <div className="col-2 f1">Balance Family & Work Workshop Application</div>
              </div>
                             <div className="row row-cols-4">
                <div className="col-2 f1">Request for Barikina Card</div>
                 <div className="col-2 f1"></div>
                  <div className="col-2 f1"></div>
                   <div className="col-2 f1">Apply for Social and Vocational Future Planning Workshop</div>
                    <div className="col-2 f1"></div>
                     <div className="col-2 f1"></div>
              </div>
                        <div className="row row-cols-4" id='serv-w'>
                <div className="col-2 f">Family Education and Awareness</div>
                <div className="col-2 f">Enhancement the Better Family Life</div>
                <div className="col-2 f">Activities Calendar</div>
     
              </div>
                            <div className="row row-cols-4">
                <div className="col-2 f1">Apply for participate in Zayed Library activitie</div>
                 <div className="col-4 f1">Enrollment in Better Family Life<br/> Discussion Council Application</div>
           
              </div>
                                 <div className="row row-cols-4">
                <div className="col-2 f1">Enrollment Request in Activities to Support Family Cohesion</div>
                 <div className="col-4 f1">Enrollment in Better Family Life<br/> Forum</div>
           
              </div>
                                 <div className="row row-cols-4">
                <div className="col-2 f1"></div>
                 <div className="col-4 f1">Social Responsibility Ambassador<br/> Membership</div>
           
              </div>
            </div>
          </div>
        )}

    
        {openMenu === 'tenders' && (
          <div
            className="submenu tenders-submenu"
            style={{
              position: 'absolute',
              top: '30%',
              left: 0,
              width: '100%',
        
              zIndex: 1000,
              padding: '10px 0',
         //   borderTop: '1px solid #ccc',
            }}
          >
               <div className="container text-center">
              <div className="row row-cols-4">
                <div className="col-2 f">Tenders</div>
                <div className="col-2 f">Happens Suppliers</div>
              </div>
           
            </div>
          </div>
        )}

   
        {openMenu === 'publications' && (
          <div
            className="submenu publications-submenu"
            style={{
              position: 'absolute',
              top: '30%',
              left: 0,
              width: '100%',
         
              zIndex: 1000,
              padding: '10px 0',
         //   borderTop: '1px solid #ccc',
            }}
          >
              <div className="container text-center">
              <div className="row row-cols-4">
                <div className="col-2 f">Publications</div>
                <div className="col-2 f">Sustainability</div>
                <div className="col-2 f">Social Studies</div>
                <div className="col-2 f">Social Studies Summaries</div>
                <div className="col-2 f">Evaluation Reports</div>
                <div className="col-2 f">Social Studies Abstracts</div>
              </div>
              <div className="row row-cols-4">
                <div className="col-2 f1">Dama Magazine</div>
                <div className="col-2 f1">International Women's Day 2021</div>
                <div className="col-2 f1">Studies and Reports</div>
              </div>
            </div>
          </div>
    
        )}

  
        {openMenu === 'openData' && (
          <div
            className="submenu openData-submenu"
            style={{
              position: 'absolute',
              top: '30%',
              left: 0,
              width: '100%',
       
              zIndex: 1000,
              padding: '10px 0',
           //   borderTop: '1px solid #ccc',
            }}
          >
              <div className="container text-center">
              <div className="row row-cols-4">
                <div className="col-2 f">Statistics</div>
                <div className="col-2 f">Open Data Policy</div>
                <div className="col-2 f">Business Continuity Policy</div>
          
              </div>
           
            </div>
          </div>
        )}

   
        {openMenu === 'media' && (
          <div
            className="submenu media-submenu"
            style={{
              position: 'absolute',
              top: '30%',
              left: 0,
              width: '100%',
        
              zIndex: 1000,
              padding: '10px 0',
           //   borderTop: '1px solid #ccc',
            }}
          >
                  <div className="container text-center">
              <div className="row row-cols-4">
                <div className="col-2 f">News</div>
                <div className="col-2 f">Gallery</div>
                <div className="col-2 f">Videos</div>
                <div className="col-2 f">Dar Al Kutub-Department of<br/>Culture and Tourism</div>
                <div className="col-2 f">Fatherhood as we aspire</div>
                <div className="col-2 f">Family Media Team Initiative</div>
              </div>
              <div className="row row-cols-4">
                <div className="col-2 f1">FDF logo kit</div>
       
              </div>
            </div>
          </div>
        )}

      </div>
      </div>
    </div>
   
  
  );
};

export default Header;
