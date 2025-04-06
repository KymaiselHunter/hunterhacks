// When using this funciton
// Please pass sections as an array
// Using an object form with two member variables
// sectionName -> string that will show up in the nav
// sectionRef -> reference to the section to scroll to

import './Navbar.css'
import HambergerIcon from '../assets/menu.svg'
import {useRef, useEffect} from 'react';

function Navbar({
    sectionArray,
    scrollFunction
})
{
    const sidebarRef = useRef(null); 

    // function to handle scrolling on page
    // used for navbar decoration and closing the sidebar
    const handleScroll = () => {
        // check if each section has been passed, if so, decorate it in nav/side
        sectionArray.forEach((section, index) => {
            const rect = section.sectionRef.current?.getBoundingClientRect();
            const navbarCircle = document.querySelector(`.navbar-stop-icon[data-index="${index}"]`);
            const sidebarCircle = document.querySelector(`.sidebar-stop-icon[data-index="${index}"]`);
            
            if (rect?.top < 100) {
                navbarCircle?.classList.add('navbar-stop-icon-active');
                sidebarCircle?.classList.add('navbar-stop-icon-active');
            } else {
                navbarCircle?.classList.remove('navbar-stop-icon-active');
                sidebarCircle?.classList.remove('navbar-stop-icon-active');
            }
        });
        
        // handle scroll and event listener to close the sidebar on scroll
        if (!sidebarRef.current?.classList.contains("reveal")) return;

        sidebarRef.current.classList.remove('reveal');
    };

    // use effect to enable the scrolling listener once the page is loaded
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    // returns two things
    // a navbar and a sidebar, only one should be
    // active at at time. css media query to handle visibility 
    return(
        <>
            <div id="navbar">
                <p>
                    HunterHacks    
                </p>

                {/* navigation for big screens */}
                <nav className="nav">
                    {
                        // loop to make each navigational item (dynamic)
                        sectionArray.map((section, index) => (
                            <a 
                                className="navbar-item"
                                key={index}
                                onClick={() => scrollFunction(section.sectionRef)}
                            >
                                <p style={{padding:"0rem .5rem"}}>
                                    {section.sectionName}
                                </p>
                                <div
                                className={[
                                    'navbar-div',
                                    index === 0 && 'navbar-front-div',
                                    index === sectionArray.length - 1 && 'navbar-back-div'
                                ].filter(Boolean).join(' ')}
                                >
                                    <svg viewBox="0 0 12 12" width="11" height="11">
                                    <circle 
                                        data-index={index}
                                        className="navbar-stop-icon" 
                                        cx="6" cy="6" r="5"  />
                                    </svg>
                                </div>


                            </a>
                        ))
                    }
                </nav>

                {/* hamburger to open side bar */}
                <a id="Hamburger">
                    <img 
                        src={HambergerIcon} 
                        alt="Hamburger" 
                        onClick={()=>sidebarRef.current?.classList.toggle("reveal")}
                    ></img>
                </a>
            </div>
            
            {/* side bar for small screens */}
            <nav ref={sidebarRef} className='sidebar'>
            {
                // loop to make each navigational item (dynamic)
                sectionArray.map((section, index) => (
                    <a 
                        className="sidebar-item"
                        key={index}
                        onClick={() => scrollFunction(section.sectionRef)}
                    >
                        <div
                        className={[
                            'sidebar-div',
                            index === 0 && 'sidebar-front-div',
                            index === sectionArray.length - 1 && 'sidebar-back-div'
                        ].filter(Boolean).join(' ')}
                        >
                            <svg viewBox="0 0 12 12" width="11" height="11">
                            <circle 
                                data-index={index}
                                className="sidebar-stop-icon" 
                                cx="6" cy="6" r="5"  />
                            </svg>
                        </div>


                        <p style={{padding:"0rem .5rem"}}>
                            {section.sectionName}
                        </p>
                    </a>
                ))
            }     
            </nav>
        </>
    );
}export default Navbar
