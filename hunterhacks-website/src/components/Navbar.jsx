import './Navbar.css'
import HambergerIcon from '../assets/menu.svg'
import {useRef} from 'react';

function Navbar({
    aboutRef, sponsorRef, judgeRef, scheduleRef, 
    trackRef, applicationRef, faqRef,
    scrollFunction
})
{
    const sidebarRef = useRef(null); 
    const sidebarControl = (sidebarRef, sectionRef) => {
        sidebarRef.current?.classList.toggle("reveal");
        console.log("PLEASE")

        if( sectionRef)
        {
            scrollFunction(sectionRef);
        }
    };

    return(
        <>
            <div id="Navbar">
                <p>
                    HunterHacks    
                </p>

                <nav id="Nav">
                    <a onClick={() => scrollFunction(aboutRef)}>
                        About
                    </a>
                    <a onClick={() => scrollFunction(sponsorRef)}>
                        Sponsors
                    </a>
                    <a onClick={() => scrollFunction(judgeRef)}>
                        Judges
                    </a>
                    <a onClick={() => scrollFunction(scheduleRef)}>
                        Schedule
                    </a>
                    <a onClick={() => scrollFunction(trackRef)}>
                        Tracks
                    </a>
                    <a onClick={() => scrollFunction(applicationRef)}>
                        Apply!
                    </a>
                    <a onClick={() => scrollFunction(faqRef)}>
                        FAQ
                    </a>
                    
                </nav>
                <a id="Hamburger">
                    <img src={HambergerIcon} alt="Hamburger" onClick={()=>sidebarControl(sidebarRef)}></img>
                </a>
            </div>

            <nav ref={sidebarRef} className='Sidebar'>
                <a onClick={() => sidebarControl(sidebarRef,aboutRef)}>
                    About
                </a>
                <a onClick={() => sidebarControl(sidebarRef,sponsorRef)}>
                    Sponsors
                </a>
                <a onClick={() => sidebarControl(sidebarRef, judgeRef)}>
                    Judges
                </a>
                <a onClick={() => sidebarControl(sidebarRef, scheduleRef)}>
                    Schedule
                </a>
                <a onClick={() => sidebarControl(sidebarRef, trackRef)}>
                    Tracks
                </a>
                <a onClick={() => sidebarControl(sidebarRef, applicationRef)}>
                    Apply!
                </a>
                <a onClick={() => sidebarControl(sidebarRef, faqRef)}>
                    FAQ
                </a>
                
            </nav>
        </>
    );
}export default Navbar

// function Sidebar({
//     aboutRef, sponsorRef, judgeRef, scheduleRef, 
//     trackRef, applicationRef, faqRef,
//     scrollFunction
// }){
//     return(
        
//     );
// }