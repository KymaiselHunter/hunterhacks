// import { useState } from 'react'

import Navbar from './components/Navbar'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw'
      }}
    >
      <Navbar></Navbar>

      <main>
        <h1>HunterHacks</h1>
        
        <PlaceholderSection
          sectionTitle="About this Hackathon:"
          sectionText="HunterHacks is Hunter College’s premier student-led hackathon, dedicated to empowering students to use technology for social wellness and community impact. We believe that innovation thrives when diverse minds come together to solve real-world problems, and at HunterHacks, we’re here to make that happen—one hack at a time.
Hackathons aren’t just about coding. They’re about collaborating, learning, and building. Whether you’re an experienced hacker, an aspiring designer, or just tech-curious, HunterHacks is the perfect space to experiment with new ideas, connect with like-minded individuals, and push the boundaries of what technology can do for mental health, community well-being, and social change. ?? - is this too specific?
This year, participants will form teams, develop innovative projects, and present their work to a panel of judges for a chance to win prizes. But beyond the competition, HunterHacks is about learning and growing. We’ll have workshops, mentorship, and networking opportunities to help you hone your skills and bring your ideas to life.
Join us for a weekend of hacking, creativity, and collaboration as we take flight, building innovative solutions that make a real impact."
        ></PlaceholderSection>
        
        <PlaceholderSection
          sectionTitle="Sponsors + Images:"
          sectionText="        Logo
        Short description
        Sponsor benefits?

        Suggestions:
        Should it be a carousel slider? Automatically slide to next sponsor every five seconds?
        Hover Effect: When users hover over a logo, short description appears?
        "></PlaceholderSection>



      <PlaceholderSection
        sectionTitle="Judges + Images:"
        sectionText="        Photo & Bio - Background/expertise, perhaps a fun fact or is that corny?, LinkedIn

Suggestions:
Grid Layout with Headshots: Click-to-expand bios?
Flexbox it up"
      >
      </PlaceholderSection>

      <PlaceholderSection
        sectionTitle="Hackathon Schedule:"
      >
      </PlaceholderSection>
      
      <PlaceholderSection
        sectionTitle="Tracks (no prizes until actual hackathon):"
      >
      </PlaceholderSection>
      
      <PlaceholderSection
        sectionTitle="Link to Hackathon Application:
"
      >
      </PlaceholderSection>

        <h2>
        Frequently Asked Questions:

        </h2>

        <ul>
          <li>What is HunterHacks?</li>
          <li>When and where is the hackathon?</li>
          <li>Who can participate?</li>
          <li>Do I need coding experience?</li>
          <li>How do I register?</li>
          <li>Can I volunteer to help out? - for student mentors??</li>
          <li>Do I have to submit a project?</li>
          <li>Will there be food and swag?</li>
          <li>What if I need help during the hackathon? <em>*Link to discord*</em></li>
          <li>
            What should I bring?
            <li></li>
          </li>
          <li>How do teams work?</li>
          <li>What if I don’t have a team?</li>
          <li>Is HunterHacks in-person?</li>
          <li>What are the tracks? How do they work? ← maybe put prizes here too? - here or separate question?? We can consider</li>
          <li>What do I win?</li>
          <li>Will there be workshops?</li>
        </ul>


      </main>
    </div>
  )
}

function PlaceholderSection(props)
{
  return(
    <div>
          <h2>
      {props.sectionTitle}
      </h2>

      <p>
        {props.sectionText}
      </p>
    </div>
  );
}

export default App
