import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const Project1Ref = useRef(null);
  const Project2Ref = useRef(null);
  const Project3Ref = useRef(null);
  const Project4Ref = useRef(null);
  const Project5Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
    const cards = [
      Project1Ref.current,
      Project2Ref.current,
      Project3Ref.current,
    ];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          delay: 0.5 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcase-layout">
          <div className="project-list-wrapper overflow-hidden">
            {/*First Grid SIDE*/}
            <div className="project" ref={Project1Ref}>
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="First Project" />
              </div>
              <div className="text-content">
                <h2>StahlTech - A Business Startup Showcase</h2>
              </div>
            </div>

            <div className="project" ref={Project5Ref}>
              <div className="image-wrapper">
                <img src="/images/project5.png" alt="Fifth Project" />
              </div>
              <div className="text-content">
                <h2>Trimrr - A URL Shortener </h2>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/*SEcond grid col SIDE*/}
            <div className="project" ref={Project3Ref}>
              <div className="image-wrapper ">
                {" "}
                <img src="/images/project2.png" alt="Project 3" />
              </div>
              <h2>Medley Merchantile - An Ecommerce Store</h2>
            </div>

            <div className="project" ref={Project4Ref}>
              <div className="image-wrapper">
                {" "}
                <img src="/images/project4.png" alt="Project 4" />
              </div>
              <h2>The Beauty Edit - An Ecommerce Store</h2>
            </div>
          </div>

          {/*third grid col SIDE*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={Project2Ref}>
              <div className="image-wrapper">
                {" "}
                <img src="/images/project3.png" alt="Project 2" />
              </div>
              <h2>Tigers Eye Recruitment - Recruiting Website</h2>
            </div>

            <div className="project" ref={Project1Ref}>
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="First Project" />
              </div>
              <div className="text-content">
                <h2>Open Skills Source - A Self Project </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
