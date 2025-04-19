import './Sponsors.css'

import Codepath from '../assets/sponsors/codepath.png';
import MLT from '../assets/sponsors/mlt.png';
import Bloomberg from '../assets/sponsors/bloomberg.png';
import Hunter from '../assets/sponsors/hunter.png'

import Redbull from '../assets/sponsors/redbull.webp'
import Microsoft from '../assets/sponsors/microsoft.avif'
import Simplify from '../assets/sponsors/simplify.png'



function Sponsors()
{
    return(
    <>
        <div 
        className='sponsor-row'
        style={{gridTemplateColumns:'1fr 1fr 1fr'}}
        >
            <img src={Codepath}></img>
            <img src={MLT}></img>
            <img src={Bloomberg}></img>
        </div>
        <div 
        className='sponsor-row'
        style={{gridTemplateColumns:'1fr'}}
        >
            <img src={Hunter}></img>
        </div>
        <div 
        className='sponsor-row'
        style={{gridTemplateColumns:'1fr 1fr 1fr'}}
        >
            <img src={Simplify}></img>
            <img src={Redbull}></img>
            <img src={Microsoft}></img>
        </div>
        
    </>);
}export default Sponsors

