import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Assets/Navbar.css';
//import Sidebar from './Sidebar';

function Navbar() {

  
 
  return (
    <div className='container'>
    <Header/>
    {/*<Sidebar/>*/}
    
    <h2>Order Medicine Here!</h2>
    <div>
    
        <img src="https://th.bing.com/th/id/OIP.1b9KT908s1qNpHe8J7yh0QHaE8?pid=ImgDet&rs=1" alt="Image 1" />
        <img src="https://th.bing.com/th/id/OIP.x42avC9YD-x_HWbfexDoQQHaE8?pid=ImgDet&rs=1" alt="Image 2" />
        <img src="https://th.bing.com/th/id/OIP.3TdoR2pASqmsFFW3pNhKRwHaE8?pid=ImgDet&rs=1" alt="Image 3" />
      </div> 
    <br/>
    <br/>
    <br/>
    <Footer/>
    </div>
   
  );
}

export default Navbar;