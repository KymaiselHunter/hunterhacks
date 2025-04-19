import ContactPanel from '../assets/ContactPanel.svg';

import './Footer.css';


function Footer(){
    return(
        <>
            <img src={ContactPanel} alt='Got more questions? 
            Email us at cunyhunterhacks@gmail.com or DM on Instagram!' ></img>

            <div className='footer'>
                <h2 className='footer-header'>
                Copyright HunterHacks@ 2025
                </h2>
                <p className='footer-text'>
                Made with Love from the GWC Team:<br />
  Developer and Lead Designer: @Kelly Lin<br />
  Lead Developer: @Kyle Bautista<br />
  <br />
  And Additional Help From:<br />
  @Ynalois Pangilinan @Maggie Ma @Tahya Mumtahi @Fariha Kha
                </p>
            </div>
        </>
    )
} export default Footer