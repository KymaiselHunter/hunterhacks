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

    // handle scroll and event listener to close the sidebar on scroll
    // only really important for mobile
    const handleScroll = () => {
        if (!sidebarRef.current?.classList.contains("reveal")) return;

        sidebarRef.current.classList.remove('reveal');
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    return(
        <>
            <div id="Navbar">
                <p>
                    HunterHacks    
                </p>

                <nav id="Nav">
                    {
                        sectionArray.map((section, index) => (
                            <a 
                                key={index}
                                onClick={() => scrollFunction(section.sectionRef)}
                            >
                                {section.sectionName}
                            </a>
                        ))
                    }
                </nav>
                <a id="Hamburger">
                    <img 
                        src={HambergerIcon} 
                        alt="Hamburger" 
                        onClick={()=>sidebarRef.current?.classList.toggle("reveal")}
                    ></img>
                </a>
            </div>

            <nav ref={sidebarRef} className='Sidebar'>
            {
                sectionArray.map((section, index) => (
                    <a 
                        key={index}
                        onClick={() => scrollFunction(section.sectionRef)}
                    >
                        {section.sectionName}
                    </a>
                ))
            }     
            </nav>
        </>
    );
}export default Navbar
