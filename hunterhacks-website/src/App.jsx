// Import useRefs to keep track of section components
// Pass refs to navigation to scroll to them
import { useRef } from 'react'

// Below are the components being used, go into their
// respective jsx files to read specific details
import Navbar from './components/Navbar'
// import FAQ from './components/FAQ'
import FAQHolder from './components/FAQHolder';

// Section is important as this is how navigation knows
// where everything is, as well as a way to organize
// each section into its own component
// 
// all section content should be a child, while it's header
// and reference should be passed as components
import Section from './components/Section'

function App() {
	// references for each section
	const aboutRef = useRef(null);
	const sponsorRef = useRef(null);
	const judgeRef = useRef(null);
	const scheduleRef = useRef(null);
	const trackRef = useRef(null);
	const applicationRef = useRef(null);
	const faqRef = useRef(null);

	// function to scroll to each section, 
	// pass down to navigation component
	const scrollToRef = (ref) => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	
		ref.current?.scrollIntoView({
		behavior: prefersReducedMotion ? 'auto' : 'smooth',
		});
	};
	
	// array to pass down refs and navigation names
	// to navigation component dynamically
	const sectionArray = useRef([
		{ sectionName: 'About', sectionRef: aboutRef },
		{ sectionName: 'Sponsors', sectionRef: sponsorRef },
		{ sectionName: 'Judges & Sponsors', sectionRef: judgeRef },
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

		className='All'
		>
			<Navbar
				sectionArray={sectionArray.current}
				scrollFunction={scrollToRef}
			></Navbar>

			{/* 
				all of the body content should go in main

				if the section is a significant section the navigation
				bar should be able scroll to, pass it a reference
				and a header
			*/}
			<main className="responsive-container">
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
				
				<Section title="Frequently Asked Questions:" ref={faqRef}>
					<FAQHolder/>
				</Section>

			</main>
		</div>
	)
	}


	export default App
