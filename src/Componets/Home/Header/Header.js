import React from 'react';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import Navbar  from './Navber/Navbar'
const Header = () => {
    return (
        <div>
            <Navbar/>
            <HeaderInfo/>
            <hr className='w-75 m-auto mt-5' style={{border:'2px solid black'}} />
            
        </div>
    );
};

export default Header;