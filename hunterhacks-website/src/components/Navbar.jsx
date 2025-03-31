import './Navbar.css'

function Navbar({
    aboutRef, sponsorRef, judgeRef, scheduleRef, 
    trackRef, applicationRef, faqRef,
    scrollFunction
})
{
    return(
        <div id="Navbar">
            <p>
                HunterHacks    
            </p>

            <nav style={{display:"flex",gap:"1rem"}}>
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
                    scheduleRef
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
        </div>
    );
}export default Navbar