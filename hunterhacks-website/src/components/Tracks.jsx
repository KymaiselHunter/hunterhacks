import './Tracks.css'
import winbird from '../assets/bird1.png'
import plantbird from '../assets/bird2.png'
import deibird from '../assets/bird3.png'
import moneybird from '../assets/bird4.png'
import medbird from '../assets/bird5.png'
import techbird from '../assets/bird6.png'
import one from '../assets/1train.png'
import two from '../assets/2train.png'
import three from '../assets/3train.png'
import four from '../assets/4train.png'
import five from '../assets/5train.png'
import six from '../assets/6train.png'

function Tracks(){
    return(
        <>
        <div className = 'track_container'>
            <img src={one}></img>
            <div className='bird_container'>
            <img className='bird_img' src={winbird}></img>
            <div className='title_container'>
                <div className ='title'>Best Overall</div>
                <div className ='subtitle'>"Winner Winner Hawk Dinner"! This prize celebrates the most outstanding hack across all tracks; the one that rises above in creativity, functionality, design, and impact. Judges may consider how well-rounded your project is, how clearly your team solved a problem, and how polished the final outcome feels.
                </div>
            </div>
            </div>
        </div>
        <div className = 'track_container'>
            <img src={two}></img>
            <div className='bird_container'>
            <img className='bird_img' src={plantbird}></img>
            <div className='title_container'>
                <div className ='title'>Best Sustainability Hack
                </div>
                <div className ='subtitle'>hawk tuah
                </div>
            </div>
            </div>
        </div>
        <div className = 'track_container'>
            <img src={three}></img>
            <div className='bird_container'>
            <img className='bird_img' src={deibird}></img>
            <div className='title_container'>
                <div className ='title'>Best Diversity & Inclusion Hack
                </div>
                <div className ='subtitle'>This track honors hacks that center inclusion, representation, and accessibility. Judges may look at how thoughtfully your project considers diverse user needs, how it aims to create equitable outcomes, or how it empowers historically excluded communities.</div>
            </div>
            </div>
        </div>
        <div className = 'track_container'>
            <img src={four}></img>
            <div className='bird_container'>
            <img className='bird_img' src={moneybird}></img>
            <div className='title_container'>
                <div className ='title'>Best Financial Hack
                </div>
                <div className ='subtitle'>"Winner Winner Hawk Dinner"! This prize celebrates the most outstanding hack across all tracks; the one that rises above in creativity, functionality, design, and impact. Judges may consider how well-rounded your project is, how clearly your team solved a problem, and how polished the final outcome feels.
                </div>
            </div>
            </div>
        </div>
        <div className = 'track_container'>
            <img src={five}></img>
            <div className='bird_container'>
            <img className='bird_img' src={medbird}></img>
            <div className='title_container'>
                <div className ='title'>Best Health & Wellness Hack
                </div>
                <div className ='subtitle'>Projects in this track aim to support well-being, health access, or personal care. Judges may assess how clearly your project identifies a health-related need, how users are supported through your design, and how your solution could make a difference in someone’s daily life.
</div>
            </div>
            </div>
        </div>
        <div className = 'track_container'>
            <img src={six}></img>
            <div className='bird_container'>
            <img className='bird_img' src={techbird}></img>
            <div className='title_container'>
                <div className ='title'>Best AI/ML Immersion Hack
                </div>
                <div className ='subtitle'>This track is for projects that engage meaningfully with AI or machine learning. Judges may consider how well you explain your use of AI/ML, how it contributes to the core functionality of your project, and whether your approach shows curiosity, creativity, and care.
</div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Tracks