import {useEffect, useRef} from 'react'
import './Section.css'

function Section({title, id, children})
{
    const elementRef = useRef(null)

    
    
        useEffect(()=>{
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) {
                elementRef.current.classList.add('section-reveal');
                return;
              }


            const observer = new IntersectionObserver((entries) =>{
                entries.forEach((entry) => {
                  console.log(entry)
                  if(entry.isIntersecting){
                    entry.target.classList.add('section-reveal');
                  }
                //   else{
                //     entry.target.classList.remove('show');
                //   }
                })
              });

            // console.log(elementRef.current)
            const hiddenElements = elementRef.current
            observer.observe(hiddenElements)

            return () => observer.disconnect(); // prevent memory leaks
        },[]);

    return(
        <div ref={elementRef} className="section" id={`section-${id}`}>
            <h2>
                {title}
            </h2>

            <div id={`content-${id}`}>
                {children}
            </div>
        </div>
    );
} export default Section
