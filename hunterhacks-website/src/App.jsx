// Import useRefs to keep track of section components
// Pass refs to navigation to scroll to them
import { useRef } from 'react'

// Below are the components being used, go into their
// respective jsx files to read specific details
import Navbar from './components/Navbar'
import FAQ from './components/FAQ'

// Section is important as this is how navigation knows
// where everything is, as well as a way to organize
// each section into its own component
// 
// all section content should be a child, while it's header
// and reference should be passed as components
import Section from './components/Section'
import Logo from './components/TrainLogo'

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
        <Logo></Logo>

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
				
				<Section title="Frequently Asked Questions" ref={faqRef}>
					<FAQ question={"What is HunterHacks?"}>
						<p>HunterHacks is Hunter College’s premier student-led hackathon where students come together to ideate, design, and build projects over one exciting weekend. The event centers around Social Wellness—using tech to support mental health, education, finance, and more.</p>
						<p>We welcome all CUNY students to learn, build, and connect. Whether you’re a beginner or experienced hacker, there’s something for everyone.</p>
					</FAQ>

					<FAQ question={"When and where is the hackathon?"}>
						<p>HunterHacks is a three-day event:</p>
						<ul>
						<li><strong>Friday (Hybrid):</strong> Opening Ceremony, team formation @ West Lobby</li>
						<li><strong>Saturday (Hybrid):</strong> Hacking + workshops @ Cafeteria</li>
						<li><strong>Sunday (In-Person Mandatory):</strong> Judging + Closing Ceremony @ Cafeteria</li>
						</ul>
					</FAQ>
					
					<FAQ question={"Who can participate?"}>
						<p>Any currently enrolled <strong>CUNY student</strong> is eligible to participate, regardless of major or coding background.</p>
					</FAQ>
					
					<FAQ question={"Do I need coding experience?"}>
						<p>Nope! HunterHacks is beginner-friendly. We’ll have beginner tracks, mentors, and workshops to guide you through the process—even if it's your first time.</p>
					</FAQ>
					
					<FAQ question={"How do I register?"}>
						<p>Register by filling out the RSVP form when it goes live. You’ll be asked about food restrictions, team members, workshop attendance, and photo consent. Spots are limited, so sign up early!</p>
					</FAQ>
					
					<FAQ question={"Can I volunteer to help out? -for student mentors??"}>
						<p>Yes! We're looking for grad students or experienced participants to help as mentors. Volunteers can support teams, help with logistics, and keep the event running smoothly.</p>
					</FAQ>
					
					<FAQ question={"Do I have to submit a project?"}>
						<p>No, submitting a project is optional. You can attend workshops, network, and enjoy the experience without building something.</p>
					</FAQ>
					
					<FAQ question={"Will there be food and swag?"}>
						<p>Absolutely! Expect meals, snacks, energy drinks, and exclusive merch. Raffles and prizes will also be available for participants who stick around through the weekend!</p>
					</FAQ>
					
					<FAQ question={"What if I need help during the hackathon? *Link to discord*"}>
						<p>Join our <strong>HunterHacks Discord Server</strong> to connect with mentors, get live support, and stay up to date. [Insert Discord invite link here]</p>
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
						<li>Pre-installed Software (VS Code, GitHub Desktop, Figma, Zoom)</li>
						<li>A smile :)</li>
						</ul>
					</FAQ>
					
					<FAQ question={"How do teams work?"}>
						<p>Teams can be 2–4 people. You can sign up with a team or join solo and find others during our team formation activities after the Opening Ceremony.</p>
					</FAQ>
					
					<FAQ question={"What if I don’t have a team?"}>
						<p>No worries! We’ll have icebreakers, team matching sessions, and mentors available to help you find teammates before hacking begins.</p>
					</FAQ>
					
					<FAQ question={"Is HunterHacks in-person?"}>
						<p>HunterHacks is a hybrid event with both virtual and in-person components. However, <strong>Sunday is mandatory in-person</strong> for judging and the closing ceremony.</p>
					</FAQ>
					
					<FAQ question={"What are the tracks? How do they work? ← maybe put prizes here too? - here or separate question?? We can consider "}>
						<p>Participants can submit their projects under one of the following tracks:</p>
						<ul>
						<li>Diversity & Inclusion</li>
						<li>Health & Wellness</li>
						<li>Sustainability</li>
						<li>Finance</li>
						<li>ML & AI</li>
						<li>Overall</li>
						</ul>
						<p>Each track has its own set of prizes and judging criteria. All projects must align with the theme of Social Wellness!</p>
					</FAQ>
					
					<FAQ question={"What do I win?"}>
						<p>Prizes vary by track, and may include:</p>
						<ul>
						<li>Gift cards</li>
						<li>Monthly MetroCards</li>
						<li>Pickleball paddles</li>
						<li>Swag packs</li>
						<li>Exclusive merch & more!</li>
						</ul>
					</FAQ>
					
					<FAQ question={"Will there be workshops?"}>
						<p>Yes! Workshops run throughout the weekend, covering both technical and non-technical topics like coding, design (Figma), resume-building, and navigating workplace scenarios. Some are hosted by CodePath and MLT.</p>
					</FAQ>
					</Section>

			</main>
		</div>
	)
	}


	export default App
