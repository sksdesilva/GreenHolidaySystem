import React from 'react'
import { Link } from 'react-router-dom'

function DriverNavigate() {
  return (
    <div>
        
    <Link to="/partner-portal/agentportal/driverreg" style={{color:'black'}}><h3>Driver Sign up</h3></Link>
    <Link to="/partner-portal/agentportal/driverlog" style={{color:'black'}}><h3>Driver Login</h3></Link>
  </div>
  )
}

export default DriverNavigate
