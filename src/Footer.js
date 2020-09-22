import React from 'react'
import './Footer.css'
function Footer() {
    const getCurrentYear = () => {
    return new Date().getFullYear();
  };
    return (
        <div className="footer">
            <p>&copy;{getCurrentYear ()} Airbnb-clone</p>
            <p>Privacy . Careers . Terms .Policy</p>
        </div>
    )
}

export default Footer
