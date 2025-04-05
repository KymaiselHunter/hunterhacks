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
    const handleScroll = () => {
        sectionArray.forEach((section, index) => {
            console.log(section.sectionRef)
            const rect = section.sectionRef.current?.getBoundingClientRect();
            const circle = document.querySelector(`.navbar-stop-icon[data-index="${index}"]`);

            if (rect.top < 100) {
                circle.classList.add('navbar-stop-icon-active');
            } else {
                circle.classList.remove('navbar-stop-icon-active');
            }
        });
        
        if (!sidebarRef.current?.classList.contains("reveal")) return;

        sidebarRef.current.classList.remove('reveal');
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    return(
        <>
            <div id="navbar">
                <p>
                    HunterHacks    
                </p>

                <nav className="nav">
                    {
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
                <a id="Hamburger">
                    <img 
                        src={HambergerIcon} 
                        alt="Hamburger" 
                        onClick={()=>sidebarRef.current?.classList.toggle("reveal")}
                    ></img>
                </a>
            </div>

            <nav ref={sidebarRef} className='sidebar'>
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
