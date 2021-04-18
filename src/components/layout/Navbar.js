import React from 'react';

const Navbar = ({icon, title}) => {


  
    return (
      <nav className='navbar bg-dark'>
        <h1>
        <i className={icon}/> {title} 
        </h1>
      </nav>
      
    )
  }



Navbar.defaultProps = {
  title: 'heroFetcher',
  icon: 'fas fa-user-shield'
}

export default Navbar


