// Import useRefs to keep track of section components
// Pass refs to navigation to scroll to them
import { useRef } from 'react'

// Below are the components being used, go into their
// respective jsx files to read specific details
import Navbar from './components/Navbar'
// import FAQ from './components/FAQ'
import FAQHolder from './components/FAQHolder';

import Footer from './components/Footer';

import ScheduleList from './components/ScheduleList';

// Imports for picture board
import img1 from './assets/placeholder1.jpg';
import img2 from './assets/placeholder2.jpg';
import img3 from './assets/placeholder3.jpeg';
import img4 from './assets/placeholder4.jpg';

import Abbe from './assets/Abbe.jpg';
import Ahmed from './assets/Ahmed.jpg';
import Isabella from './assets/Isabella.jpg';
import Justin from './assets/Justin.jpg';
import Kevin from './assets/Kevin.jpg';
import Leyla from './assets/Leyla.jpg';
import Melissa from './assets/Melissa.jpg';
import Susan from './assets/Susan.jpg';


import PictureBoard from './components/PictureBoard'

// =========================
// // picture board prop stuff
// const judgeProfiles = [
// 	{src: img1, name:'placeholder1'},
// 	{src: img2, name:'placeholder2'},
// 	{src: img3, name:'placeholder3'},
// 	{src: img4, name:'Batman'},
// 	{src: img3, name:'placeholder3'},
// 	{src: img2, name:'placeholder2'},
// 	{src: img1, name:'placeholder1'},
// 	{src: img2, name:'placeholder2'},
// 	{src: img3, name:'placeholder3'},
// 	{src: img4, name:'Batman'},
// 	{src: img3, name:'placeholder3'},
// 	{src: img2, name:'placeholder2'},
// ];
// picture board prop stuff
const judgeProfiles = [
	{ src: Abbe, name: 'Abbe Tse' },
	{ src: Ahmed, name: 'Ahmed Alsubai' },
	{ src: Isabella , name: 'Isabella Abonitalla' },
	{ src: Justin, name: 'Justin Tojeira' },
	{ src: Kevin, name: 'Kevin Granados' },
	{ src: Leyla, name: 'Leyla Tuon Cao' },
	{ src: Melissa, name: 'Melissa Lynch' },
	{ src: Susan, name: 'Susan Sun' },
];

// Section is important as this is how navigation knows
// where everything is, as well as a way to organize
// each section into its own component
// 
// all section content should be a child, while it's header
// and reference should be passed as components
import Section from './components/Section'
import About from './components/About'
import FAQ from './components/FAQ'

function App() {
	// references for each section
	const aboutRef = useRef(null);
	const sponsorRef = useRef(null);
	const judgeRef = useRef(null);
	const scheduleRef = useRef(null);
	const trackRef = useRef(null);
	const faqRef = useRef(null);

	// function to scroll to each section, 
	// pass down to navigation component
	const scrollToRef = (ref) => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	
		const top = ref.current.offsetTop;

		window.scrollTo({
			top: top,
			behavior: prefersReducedMotion ? 'auto' : 'smooth',
		});
	};
	
	// array to pass down refs and navigation names
	// to navigation component dynamically
	const sectionArray = useRef([
		{ sectionName: 'About', sectionRef: aboutRef },
		{ sectionName: 'Judges', sectionRef: judgeRef },
		{ sectionName: 'Sponsors', sectionRef: sponsorRef },
		{ sectionName: 'Schedule', sectionRef: scheduleRef },
		{ sectionName: 'Tracks', sectionRef: trackRef },
		{ sectionName: 'FAQ', sectionRef: faqRef },
	]);


	const footerRef = useRef(null);

	
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
				{/* <h1>HunterHacks</h1> */}

				<Section
				title=""
				ref={aboutRef}
				>
					<About></About>
				</Section>

				<Section
				title="Judges"
				ref={judgeRef}
				>
					<PictureBoard
						profileArray={judgeProfiles}
					>
					</PictureBoard>
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
				title="Hackathon Schedule:"
				ref={scheduleRef}
				>
					<ScheduleList></ScheduleList>
				</Section>
				
				<Section
				title="Tracks (no prizes until actual hackathon):"
				ref={trackRef}
				>
				</Section>
				
				<Section title="Frequently Asked Questions:" ref={faqRef}>
					<FAQHolder/>
				</Section>

				<Section title="" ref={footerRef}>
					<Footer></Footer>
				</Section>

			</main>
		</div>
	)
	}


	export default App
