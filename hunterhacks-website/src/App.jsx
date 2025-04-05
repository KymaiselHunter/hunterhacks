import { useRef } from 'react'

import Navbar from './components/Navbar'
import Section from './components/Section'
import FAQ from './components/FAQ'

function App() {
  // const [count, setCount] = useState(0)
  const aboutRef = useRef(null);
  const sponsorRef = useRef(null);
  const judgeRef = useRef(null);
  const scheduleRef = useRef(null);
  const trackRef = useRef(null);
  const applicationRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToRef = (ref) => {
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
	ref.current?.scrollIntoView({
	  behavior: prefersReducedMotion ? 'auto' : 'smooth',
	});
  };
  

  const sectionArray = useRef([
	{ sectionName: 'About', sectionRef: aboutRef },
	{ sectionName: 'Sponsors', sectionRef: sponsorRef },
	{ sectionName: 'Judges', sectionRef: judgeRef },
	{ sectionName: 'Schedule', sectionRef: scheduleRef },
	{ sectionName: 'Tracks', sectionRef: trackRef },
	{ sectionName: 'Apply!', sectionRef: applicationRef },
	{ sectionName: 'FAQ', sectionRef: faqRef },
  ]);
  
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
      }}
      // display:'flex',
      // flexDirection: 'column',
      // alignItems: 'center'

      className='All'
    >
      <Navbar
        sectionArray={sectionArray.current}
        scrollFunction={scrollToRef}
      ></Navbar>

      {/* style={{ maxWidth: '640px'}} */}
      <main >
        <h1>HunterHacks</h1>
        
        <Section
          title="About this Hackathon:"
          ref={aboutRef}
        >
          <p>
            HunterHacks is Hunter College’s premier student-led hackathon, dedicated to empowering students to use technology for social wellness and community impact. We believe that innovation thrives when diverse minds come together to solve real-world problems, and at HunterHacks, we’re here to make that happen—one hack at a time.
            Hackathons aren’t just about coding. They’re about collaborating, learning, and building. Whether you’re an experienced hacker, an aspiring designer, or just tech-curious, HunterHacks is the perfect space to experiment with new ideas, connect with like-minded individuals, and push the boundaries of what technology can do for mental health, community well-being, and social change. ?? - is this too specific?
            This year, participants will form teams, develop innovative projects, and present their work to a panel of judges for a chance to win prizes. But beyond the competition, HunterHacks is about learning and growing. We’ll have workshops, mentorship, and networking opportunities to help you hone your skills and bring your ideas to life.
            Join us for a weekend of hacking, creativity, and collaboration as we take flight, building innovative solutions that make a real impact.

          </p>
        </Section>
        <Section
          title="Sponsors + Images:"
          ref={sponsorRef}
        >
          <p>
          Logo
          Short description
          Sponsor benefits?
          
          Suggestions:
          Should it be a carousel slider? Automatically slide to next sponsor every five seconds?
          Hover Effect: When users hover over a logo, short description appears?
          </p>

        </Section>



		<Section
		title="Judges + Images:"
		ref={judgeRef}
		>

		<p>
		Photo & Bio - Background/expertise, perhaps a fun fact or is that corny?, LinkedIn
		
		Suggestions:
		Grid Layout with Headshots: Click-to-expand bios?
		Flexbox it up
		</p>
		</Section>

		<Section
		title="Hackathon Schedule:"
		ref={scheduleRef}
		>
		</Section>
		
		<Section
		title="Tracks (no prizes until actual hackathon):"
		ref={trackRef}
		>
		</Section>
				
		
		<Section
		title="Link to Hackathon Application:"
		ref={applicationRef}
		>
		</Section>

		

		<Section 
		title="Frequently Asked Questions"
		ref={faqRef}
		>
		<FAQ question={"What is HunterHacks?"}>
			<p>
			ansadrfewr\n 
			</p>
			<p>
			ansadrfewr\n 
			</p>
			<p>
			ansadrfewr\n 
			</p>
			<p>
			ansadrfewr\n 
			</p>
		</FAQ>

		<FAQ question={"When and where is the hackathon?"}>
		</FAQ>
		
		<FAQ question={"Who can participate?"}>
		</FAQ>
		
		<FAQ question={"Do I need coding experience?"}>
		</FAQ>
		
		<FAQ question={"How do I register?"}>
		</FAQ>
		
		<FAQ question={"Can I volunteer to help out? -for student mentors??"}>
		</FAQ>
		
		<FAQ question={"Do I have to submit a project?"}>
		</FAQ>
		
		<FAQ question={"Will there be food and swag?"}>
		</FAQ>
		
		<FAQ question={"What if I need help during the hackathon? *Link to discord*"}>
		</FAQ>
		
		<FAQ question={"What should I bring?"}>
			<ul>
				<li>Laptop</li>
				<li>Charger</li>
				<li>Headphones</li>
				<li>Notebook</li>
				<li>Pens</li>
				<li>Water Bottle</li>
				<li>Snacks</li>
				<li>Pre-installed Software (*maybe give suggestions idk*)</li>
				<li>A smile :)</li>
			</ul>
		</FAQ>
		
		<FAQ question={"How do teams work?"}>
		</FAQ>
		
		<FAQ question={"What if I don’t have a team?"}>
		</FAQ>
		
		<FAQ question={"Is HunterHacks in-person?"}>
		</FAQ>
		
		<FAQ question={"What are the tracks? How do they work? ← maybe put prizes here too? - here or separate question?? We can consider "}>
		</FAQ>
		
		<FAQ question={"What do I win?"}>
		</FAQ>
		
		<FAQ question={"Will there be workshops?"}>
		</FAQ>
		
		
		</Section>
      </main>
    </div>
  )
}


export default App
