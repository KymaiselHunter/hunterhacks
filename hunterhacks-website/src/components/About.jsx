import {useEffect} from 'react'
import './About.css'
import banner from '../assets/banner.png'
import birds from '../assets/birbs.png'
import HunterH from '../assets/HunterH.svg'

function About(){
    return(
        <div className='hunterhacks'>
            {/* <div className='hh_title'><img src={banner}></img></div> */}
            
            <div className='banner-back'>
                <div className='banner-content'>
                    <h1>
                        HUNTER HACKS
                    </h1>

                    <div className='banner-sub-div'>
                        <img src={HunterH}></img>

                        <div>
                            <p>
                                May 2nd - May 4th, 2025
                            </p>
                            <p>
                                904 Lexington Avenue
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hh_subtitle'>
                <div className = 'hh_text'>
                    HunterHacks is Hunter College's 1st premier student-led hackathon organized by the CS Department, Hunter Daedulus Committee, 
                    USG, Girls Who Code, Women in Computer Science Club, and the Computer Science Club. 
                    <br></br>
                    <br></br>
                    We are dedicated to empowering students to use technology for social wellness and community impact. 
                    We believe that innovation thrives when diverse minds come together to solve real-world problems, and at 
                    HunterHacks, we're here to make that happen--one hack at a time.</div>
                <div className = 'subtitle_item'>
                    <div className='birb'><img src={birds}></img></div>
                    <div className='button'><a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSciWzGujBu3pt5bw0ch7Qcl47QdHXOtL6KmjQBYgOXWcJ_ZGQ/viewform?usp=send_form"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        APPLY!
                    </a></div>
                </div>
            </div>
        </div>
    );
}
export default About