import FAQ from "./FAQ";

import "./FAQHolder.css";

function FAQHolder() {
  return (
    <div className="faq-holder">
      <div className="faq-col">
        <FAQ question={"What is HunterHacks?"}>
          <p>
            HunterHacks is Hunter College’s premier student-led hackathon
            co-organized by the Hunter College CS Department, Daedalus
            Committee,{" "}
            <a href="https://www.huntercsclub.com/" target="_blank">
              Computer Science Club
            </a>
            ,{" "}
            <a href="https://www.hunterwics.com/" target="_blank">
              WiCS
            </a>
            , and{" "}
            <a
              href="https://www.instagram.com/gwchuntercollege/"
              target="_blank"
            >
              GWC
            </a>
            . At this hackathon, students come together to ideate, design, and
            build projects over one exciting weekend. The event centers around
            Social Wellness—using tech to support mental health, education,
            finance, and more.
          </p>
          <p>
            We welcome all CUNY students to learn, build, and connect. Whether
            you’re a beginner or experienced hacker, there’s something for
            everyone.
          </p>
        </FAQ>

        <FAQ question={"Who can participate?"}>
          <p>
            Any currently enrolled <strong>Hunter student</strong> is eligible
            to participate, regardless of major or coding background.
          </p>
        </FAQ>

        <FAQ question={"How do I register?"}>
          <p>
            Register by filling out the RSVP form when it goes live. You’ll be
            asked about food restrictions, team members, workshop attendance,
            and photo consent. Unfortunately, we have met our capacity for this
            semester's hackathon, but we encourage you to still apply in the
            case that we put you on our waitlist.
          </p>
        </FAQ>

        <FAQ question={"Do I have to submit a project?"}>
          <p>
            Submitting a project is optional, but highly encouraged. You can
            attend workshops, network, and enjoy the experience without building
            something. However, we do have some great prizes for those who do
            submit a project, so we recommend giving it a try!
          </p>
        </FAQ>

        <FAQ question={"What if I need help during the hackathon? "}>
          <p>
            Join our{" "}
            <a href="https://discord.gg/XbfeRu7xma ">
              <strong>HunterHacks Discord Server</strong>
            </a>{" "}
            as well as our{" "}
            <a
              href="https://www.instagram.com/cunyhunterhacks/"
              target="_blank"
            >
              <strong>Instagram</strong>
            </a>{" "}
            to connect with mentors, get live support, and stay up to date.
          </p>
        </FAQ>

        <FAQ question={"How do teams work?"}>
          <p>
            Teams can be 2–4 people. You can sign up with a team or join solo
            and find others during our team formation activities after the
            Opening Ceremony.
          </p>
        </FAQ>

        <FAQ question={"Is HunterHacks in-person?"}>
          <p>
            HunterHacks is a hybrid event with both virtual and in-person
            components. However, <strong>Sunday is mandatory in-person</strong>{" "}
            for judging and the closing ceremony.
          </p>
        </FAQ>

        <FAQ question={"What do I win?"}>
          <p>Prizes vary by track, and may include:</p>
          <ul>
            <li>Gift cards</li>
            <li>Curved Monitor</li>
            <li>Keyboard and Mouse</li>
            <li>Headphones</li>
            <li>Earbuds</li>
            <li>Exclusive merch & more!</li>
          </ul>
        </FAQ>
      </div>

      <div className="faq-col">
        <FAQ question={"When and where is the hackathon?"}>
          <p>HunterHacks is a three-day event:</p>
          <ul>
            <li>
              <strong>Friday (Hybrid):</strong> Opening Ceremony, team formation
              @ West Lobby
            </li>
            <li>
              <strong>Saturday (Hybrid):</strong> Hacking + Workshops @
              Cafeteria
            </li>
            <li>
              <strong>Sunday (In-Person Mandatory):</strong> Judging + Closing
              Ceremony @ Cafeteria
            </li>
          </ul>
        </FAQ>

        <FAQ question={"Do I need coding experience?"}>
          <p>
            Nope! HunterHacks is beginner-friendly. We’ll have beginner tracks,
            mentors, and workshops to guide you through the process—even if it's
            your first time.
          </p>
        </FAQ>

        <FAQ question={"Can I volunteer to help out? (Or be a mentor?)"}>
          <p>
            Yes! We're looking for grad students or experienced participants to
            help as mentors. Volunteers can support teams, help with logistics,
            and keep the event running smoothly. You can fill out{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd9oJpoX_TkwfHqVm6X8xt2T0e0-dU4kKTUXLa_gbRBXJ0thw/viewform"
              target="_blank"
            >
              this form
            </a>{" "}
            to sign up to volunteer. We will reach out to you with more details.
          </p>
        </FAQ>

        <FAQ question={"Will there be food and swag?"}>
          <p>
            Absolutely! Expect meals, snacks, energy drinks, and exclusive
            merch. Raffles and prizes will also be available for participants
            who stick around through the weekend!
          </p>
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
            <li>
              Pre-installed Software (VS Code, GitHub Desktop, Figma, Zoom)
            </li>
            <li>A smile :)</li>
          </ul>
          <p>
            P.S. If you're unsure on how to install the software listed above,
            we will be having workshops all throughout Saturday, May 3 that will
            guide you through it! Attending workshops will also put you in for
            our mentioned raffles.
          </p>
        </FAQ>

        <FAQ question={"What if I don’t have a team?"}>
          <p>
            No worries! We’ll have icebreakers, team matching sessions, and
            mentors available to help you find teammates before hacking begins.
          </p>
        </FAQ>

        <FAQ question={"What are the tracks? How do they work?"}>
          <p>
            Participants can submit their projects under one of the following
            tracks:
          </p>
          <ul>
            <li>Diversity & Inclusion</li>
            <li>Health & Wellness</li>
            <li>Sustainability</li>
            <li>Finance</li>
            <li>ML & AI</li>
            <li>Overall</li>
          </ul>
          <p>
            Each track has its own set of prizes and judging criteria. All
            projects must align with the theme of Social Wellness!
          </p>
        </FAQ>

        <FAQ question={"Will there be workshops?"}>
          <p>
            Yes! Workshops run throughout the weekend, covering both technical
            and non-technical topics like coding, design (Figma),
            resume-building, and navigating workplace scenarios. Some are hosted
            by CodePath and MLT.
          </p>
        </FAQ>
      </div>
    </div>
  );
}
export default FAQHolder;
