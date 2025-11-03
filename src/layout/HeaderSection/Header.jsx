import Container from "react-bootstrap/Container";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../asset/logo.jpg";
import "./Header.css";

function Header() {
  const [openMenu, setOpenMenu] = useState();

  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logoh" />
          </Navbar.Brand>

          <Nav className="me-auto navs1-container">
            <Nav.Link href="#" className="navs1" id="f1">
              <i className="bi bi-telephone-fill" id="i"></i>
              &nbsp;&nbsp;971&nbsp;2&nbsp;4476900
            </Nav.Link>
            <Nav.Link href="#" className="navs1" id="f">
              <i className="bi bi-envelope-fill" id="i"></i>
              &nbsp;&nbsp;info@fdf.gov.ae
            </Nav.Link>
          </Nav>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="white-toggler"
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#" className="navs2li">
                <i className="bi bi-search" id="search"></i>
              </Nav.Link>
              <Nav.Link href="#" className="navs2li">
                <b id="search">عربي</b>
              </Nav.Link>
              <Nav.Link href="#" className="navs2li">
                Setting
              </Nav.Link>
              <Nav.Link href="#" className="navs2li navs2lip">
                <i className="bi bi-telephone-fill" id="i"></i>
                &nbsp;&nbsp;971&nbsp;2&nbsp;4476900
              </Nav.Link>
              <Nav.Link href="#" className="navs2li navs2lip">
                <i className="bi bi-envelope-fill" id="i"></i>
                &nbsp;&nbsp;info@fdf.gov.ae
              </Nav.Link>
              <Nav.Link href="#" className="navs2li navs2lii1 search">
                Al Dhabianiya Private School
              </Nav.Link>
              <Nav.Link href="#" className="navs2li navs2lii">
                Al Bateen Scientific Private School
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* nav2 */}
      <Container>
        <div
          className={`nav2-row ${openMenu ? `open-${openMenu}` : ""}`}
          onMouseLeave={() => setOpenMenu()}
        >
          <ul class="nav justify-content-start" id="nav2">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li
              className={`nav-item nav-item-dropdown ${
                openMenu === "about" ? "active" : ""
              }`}
              onMouseEnter={() => setOpenMenu("about")}
            >
              <a className="nav-link" href="#">
                About FDF{" "}
                <i className="fa-solid fa-angle-down dropdown-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                FDF Centers
              </a>
            </li>
            <li
              className={`nav-item nav-item-dropdown ${
                openMenu === "services" ? "active" : ""
              }`}
              onMouseEnter={() => setOpenMenu("services")}
            >
              <a className="nav-link" href="#">
                Services Manual{" "}
                <i className="fa-solid fa-angle-down dropdown-icon"></i>
              </a>
            </li>
            <li
              className={`nav-item nav-item-dropdown ${
                openMenu === "tenders" ? "active" : ""
              }`}
              onMouseEnter={() => setOpenMenu("tenders")}
            >
              <a className="nav-link" href="#">
                Tenders and Auction{" "}
                <i className="fa-solid fa-angle-down dropdown-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Social Programs
              </a>
            </li>
            <li
              className={`nav-item nav-item-dropdown ${
                openMenu === "publications" ? "active" : ""
              }`}
              onMouseEnter={() => setOpenMenu("publications")}
            >
              <a className="nav-link" href="#">
                Publications{" "}
                <i className="fa-solid fa-angle-down dropdown-icon"></i>
              </a>
            </li>
            <li
              className={`nav-item nav-item-dropdown ${
                openMenu === "openData" ? "active" : ""
              }`}
              onMouseEnter={() => setOpenMenu("openData")}
            >
              <a className="nav-link" href="#">
                Open Data
                <i className="fa-solid fa-angle-down dropdown-icon"></i>
              </a>
            </li>
            <li
              className={`nav-item nav-item-dropdown ${
                openMenu === "media" ? "active" : ""
              }`}
              onMouseEnter={() => setOpenMenu("media")}
            >
              <a className="nav-link" href="#">
                Media Center
                <i className="fa-solid fa-angle-down dropdown-icon"></i>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Recruitment
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          {openMenu === "about" && (
            <div className="submenu about-submenu">
              <div className="container text-center">
                <div className="row row-cols-4 rowt" >
                  <div className="col-2 f">Supreme Head</div>
                  <div className="col-2 f">
                    Words of the Chairman of the Boards of Trustees
                  </div>
                  <div className="col-2 f">Board of Trustees</div>
                  <div className="col-2 f">
                    Vision,Mission and Corporate Values
                  </div>
                  <div className="col-2 f">Strategic Partners</div>
                  <div className="col-2 f">
                    Awards received by the Foundation
                  </div>
                </div>
                <div className="row row-cols-4 rowt">
                  <div className="col f1">
                    Strategic Priorities and Objectives
                  </div>
                </div>
              </div>
            </div>
          )}

          {openMenu === "services" && (
            <div className=" services-submenu">
              <div className="container text-center">
                <div className="row row-cols-4 rowt" id="serv-w">
                  <div className="col-2 f">
                    Integrated Weliare For Action Aging
                  </div>
                  <div className="col-2 f">Effective Parenting Skills</div>
                  <div className="col-2 f">
                    Integrated Family Social Welfare
                  </div>
                  <div className="col-2 f">Childhood and Youth Development</div>
                  <div className="col-2 f">
                    Building Women's Skills and Abilities
                  </div>
                  <div className="col-2 f">Support Family Stability</div>
                </div>
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f1">
                    Barakat Al Dar Club Membership Application
                  </div>
                  <div className="col-2 f1">
                    Apply for Early Childhood Parenting Training course
                  </div>
                  <div className="col-2 f1">Request for Social Counseling</div>
                  <div className="col-2 f1">
                    Apply for Safe Childhood Service
                  </div>
                  <div className="col-2 f1">
                    100 Days Challenge Sports Program Application
                  </div>
                  <div className="col-2 f1">
                    Apply for premarital preparation Training Course
                  </div>
                </div>
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f1">
                    Wisdom’s Council Membership Application
                  </div>
                  <div className="col-2 f1">
                    Apply for Adolescence Stage Parenting Training course
                  </div>
                  <div className="col-2 f1">Social Welfare Application</div>
                  <div className="col-2 f1">
                    Apply for Al Dar Children and Youth Club Membership
                  </div>
                  <div className="col-2 f1">
                    Excellence in Entrepreneurship Workshop Application
                  </div>
                  <div className="col-2 f1">
                    Apply for Well Financial Planning Skills Workshop
                  </div>
                </div>
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f1">
                    Apply for Senior Citizens and Residents’ social support
                  </div>
                  <div className="col-2 f1">
                    Apply for Promote Men’s Positive Role Parenting Training
                    course
                  </div>
                  <div className="col-2 f1"></div>
                  <div className="col-2 f1">
                    Apply for Child Social Council Membership
                  </div>
                  <div className="col-2 f1"></div>
                  <div className="col-2 f1">
                    Balance Family & Work Workshop Application
                  </div>
                </div>
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f1">Request for Barikina Card</div>
                  <div className="col-2 f1"></div>
                  <div className="col-2 f1"></div>
                  <div className="col-2 f1">
                    Apply for Social and Vocational Future Planning Workshop
                  </div>
                  <div className="col-2 f1"></div>
                  <div className="col-2 f1"></div>
                </div>
                <div className="row row-cols-4  rowt" id="serv-w">
                  <div className="col-2 f">Family Education and Awareness</div>
                  <div className="col-2 f">
                    Enhancement the Better Family Life
                  </div>
                  <div className="col-2 f">Activities Calendar</div>
                </div>
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f1">
                    Apply for participate in Zayed Library activitie
                  </div>
                  <div className="col-4 f1">
                    Enrollment in Better Family Life
                    <br /> Discussion Council Application
                  </div>
                </div>
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f1">
                    Enrollment Request in Activities to Support Family Cohesion
                  </div>
                  <div className="col-4 f1">
                    Enrollment in Better Family Life
                    <br /> Forum
                  </div>
                </div>
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f1"></div>
                  <div className="col-4 f1">
                    Social Responsibility Ambassador
                    <br /> Membership
                  </div>
                </div>
              </div>
            </div>
          )}

          {openMenu === "tenders" && (
            <div className=" tenders-submenu">
              <div className="container text-center">
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f">Tenders</div>
                  <div className="col-2 f">Happens Suppliers</div>
                </div>
              </div>
            </div>
          )}

          {openMenu === "publications" && (
            <div className="submenu publications-submenu">
              <div className="container text-center">
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f">Publications</div>
                  <div className="col-2 f">Sustainability</div>
                  <div className="col-2 f">Social Studies</div>
                  <div className="col-2 f">Social Studies Summaries</div>
                  <div className="col-2 f">Evaluation Reports</div>
                  <div className="col-2 f">Social Studies Abstracts</div>
                </div>
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f1">Dama Magazine</div>
                  <div className="col-2 f1">International Women's Day 2021</div>
                  <div className="col-2 f1">Studies and Reports</div>
                </div>
              </div>
            </div>
          )}

          {openMenu === "openData" && (
            <div className="openData-submenu">
              <div className="container text-center">
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f">Statistics</div>
                  <div className="col-2 f">Open Data Policy</div>
                  <div className="col-2 f">Business Continuity Policy</div>
                </div>
              </div>
            </div>
          )}

          {openMenu === "media" && (
            <div className="submenu media-submenu">
              <div className="container text-center">
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f">News</div>
                  <div className="col-2 f">Gallery</div>
                  <div className="col-2 f">Videos</div>
                  <div className="col-2 f">
                    Dar Al Kutub-Department of
                    <br />
                    Culture and Tourism
                  </div>
                  <div className="col-2 f">Fatherhood as we aspire</div>
                  <div className="col-2 f">Family Media Team Initiative</div>
                </div>
                <div className="row row-cols-4  rowt">
                  <div className="col-2 f1">FDF logo kit</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Header;
