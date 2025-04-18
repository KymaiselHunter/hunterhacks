import {useEffect} from 'react'
import './About.css'
import banner from '../assets/banner.png'
import birds from '../assets/birbs.png'

function About(){
    return(
        <>
        <div className='hunterhacks'>
            <div className='hh_title'><img src={banner}></img></div>
            <div className='hh_subtitle'>
                <div className = 'hh_text'>HunterHacks is Hunter College's 1st premier student-led hackathon organized by the CS Department, Hunter Daedulus Committee, USG, Girls Who Code, Women in Computer Science Club, and the Computer Science Club. We are dedicated to empowering students to use technology for social wellness and community impact. We believe that innovation thrives when diverse minds come together to solve real-world problems, and at HunterHacks, we're here to make that happen--one hack at a time.</div>
                <div className = 'subtitle_item'>
                    <div className='birb'><img src={birds}></img></div>
                    <div className='button'><a 
    href="https://docs.google.com/forms/d/e/1FAIpQLSciWzGujBu3pt5bw0ch7Qcl47QdHXOtL6KmjQBYgOXWcJ_ZGQ/viewform?usp=send_form"
    target="_blank" 
    rel="noopener noreferrer"
  >
    APPLY
  </a></div>
                </div>
                </div>
            </div>
        <div className='hunterhacks_about'>
            <div className='about_text'></div>
            <div className='about_img'></div>
            <div className='apply_bttn'></div>
        </div>
        </>
    );
}
export default About