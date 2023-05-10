import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () =>{
    return (
        <div className="landing-page-header">
          <header>
            <nav>
              <ul>
               
               
              <li><Link to="/"><a href="#">Home</a></Link></li>
              <li> <Link to="/aboutUs"><a href="#">About us</a></Link></li>
              <li> <Link to="/contactUs"><a href="#">Contact</a></Link></li>
              

              <Link to="/partner-portal/agentportal"><button className="login-btn">Login as Agent</button></Link>
              </ul>
            </nav>
            
          </header>
          <div>
          </div>
          </div>
          );
          }
          export default Header;