import React,{useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import modPhotos from "./assets/img6.png"

export default function App() {

   const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate values (Adjust 300 to change how fast it fades/moves)
  const opacity = Math.max(1 - scrollPos / 300, 0);
  const translateX = Math.max(scrollPos / 2, 0) * -1; // Moves it left

  // const dynamicStyle = {
  //   position:"fixed",
  //   top: '50%',
  //       left: '10%',
  //   transform: `translate(${translateX}px, -50%)`,
  //       opacity: opacity,
  //       zIndex: 1,
  //       width: '300px'
  // };
  return (
    <div className="d-flex align-items-center bg-gradient">
      <div className="container-fluid">
        <div className="row align-items-start">
           {/* LEFT CONTENT */}
          <div className="col-lg-4 d-flex justify-content-center align-items-center" 
         style={{ height: '100vh', position: 'sticky', top: 0 }}
         >
          <div  style={{ 
          transform: `translateX(${translateX}px)`, 
          opacity: opacity,
          transition: 'transform 0.1s linear, opacity 0.1s linear'
        }} >
            {/* <h1 className="fw-bold display-5">UI Form</h1>
            <ul className="list-unstyled mt-4 fs-5">
              <li>✔ Minimal</li>
              <li>✔ Responsive</li>
              <li>✔ Customizable</li>
            </ul> */}

            <img src={modPhotos} alt="img" width={"500px"} height={"300px"} />
            </div>
          </div>
         
          {/* CENTER FORM (DESKTOP) */}
          <div className="col-lg-5">
            <div className="card shadow-lg rounded-4 p-4 card-gradiant">
              <h4 className="mb-3 fw-semibold">
                Architectural Photography Workshop
              </h4>
              {/* BASIC DETAILS */}
              <h6 className="mt-3">Basic Details</h6>
              <input className="form-control mb-2" placeholder="Full Name" />
              <input
                className="form-control mb-2"
                placeholder="Phone Number (WhatsApp)"
              />
              <input
                className="form-control mb-2"
                placeholder="Instagram / Portfolio Link"
              />
              <input className="form-control mb-3" placeholder="City" />
              {/* TRAVEL */}
              <div className="border rounded-2 p-2 mb-2">
                <label className="form-label d-block">
                  Willing to travel locally?
                </label>
                <div className="d-flex justify-content">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="travel"
                      id="travelYes"
                    />
                    <label className="form-check-label" htmlFor="travelYes">
                      Yes
                    </label>
                  </div>

                  <div className="form-check form-check-inline mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="travel"
                      id="travelNo"
                    />
                    <label className="form-check-label" htmlFor="travelNo">
                      No
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="travel"
                      id="travelMaybe"
                    />
                    <label className="form-check-label" htmlFor="travelMaybe">
                      Maybe
                    </label>
                  </div>
                </div>
              </div>
              {/* EXPERIENCE */}
              <label className="form-label">Photography Experience</label>
              <select className="form-select mb-3">
                <option>Less than 6 months</option>
                <option>6 months – 1 year</option>
                <option>1 – 3 years</option>
                <option>3 – 5 years</option>
                <option>More than 5 years</option>
              </select>
              {/* {What do you shoot most often} */}
              <label className="form-label fw-semibold">
                What do you shoot most often?
              </label>
              <div className="border rounded-4 p-3 mb-3 bg-light">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="weddings"
                  />
                  <label className="form-check-label" htmlFor="weddings">
                    Weddings
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="portraits"
                  />
                  <label className="form-check-label" htmlFor="portraits">
                    Portraits
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="events"
                  />
                  <label className="form-check-label" htmlFor="events">
                    Events
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="street"
                  />
                  <label className="form-check-label" htmlFor="street">
                    Street
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="product"
                  />
                  <label className="form-check-label" htmlFor="product">
                    Product
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="realestate"
                  />
                  <label className="form-check-label" htmlFor="realestate">
                    Real estate
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="architecture"
                  />
                  <label className="form-check-label" htmlFor="architecture">
                    Architecture
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="learning"
                  />
                  <label className="form-check-label" htmlFor="learning">
                    Just learning / experimenting
                  </label>
                </div>
              </div>
              {/* {Visual Thinking} */}
              <h6 className="mt-3">Visual Thinking</h6>
              {/* TEXT AREA */}
              <label className="form-label">
                When you see an interesting building, what attracts you first?
              </label>
              <textarea className="form-control mb-4" rows="3"></textarea>
              <div className="border rounded-2 p-2 mb-2">
                <label className="form-label d-block">
                  Rate your comfort level
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="interest"
                    id="verticalLines"
                  />
                  <label className="form-check-label" htmlFor="verticalLines">
                    Keeping vertical lines straight
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="interest"
                    id="symmetry"
                  />
                  <label className="form-check-label" htmlFor="symmetry">
                    Finding symmetry
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="interest"
                    id="leadingLines"
                  />
                  <label className="form-check-label" htmlFor="leadingLines">
                    Using leading lines
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="interest"
                    id="sunlight"
                  />
                  <label className="form-check-label" htmlFor="sunlight">
                    Shooting in harsh sunlight
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="interest"
                    id="lowLight"
                  />
                  <label className="form-check-label" htmlFor="lowLight">
                    Shooting indoors in low light
                  </label>
                </div>
              </div>
              <label className="form-label fw-semibold">
                If a tall building looks tilted in your photo, what would you
                do?
              </label>
              <div className="border rounded-4 p-3 mb-3 bg-light">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="editing"
                  />
                  <label className="form-check-label" htmlFor="editing">
                    Fix it in editing
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="position"
                  />
                  <label className="form-check-label" htmlFor="position">
                    Change my position
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="lens"
                  />
                  <label className="form-check-label" htmlFor="lens">
                    Change focal length / lens
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="approaches"
                  />
                  <label className="form-check-label" htmlFor="approaches">
                    Try multiple approaches
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="NotSure"
                  />
                  <label className="form-check-label" htmlFor="NotSure">
                    Not sure
                  </label>
                </div>
              </div>
              <label className="form-label fw-semibold">
                Do you use grid lines or a level indicator in your camera?
              </label>
              <div className="border rounded-4 p-3 mb-3 bg-light">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Always"
                  />
                  <label className="form-check-label" htmlFor="Always">
                    Always
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Sometimes"
                  />
                  <label className="form-check-label" htmlFor="Sometimes">
                    Sometimes
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Never"
                  />
                  <label className="form-check-label" htmlFor="Never">
                    Never
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="aboutIt"
                  />
                  <label className="form-check-label" htmlFor="aboutIt">
                    I didnt know about it
                  </label>
                </div>
              </div>
              {/* LEARNING MINDSET */}
              <h6 className="mt-3">LEARNING MINDSET</h6>
              {/* TEXT AREA */}
              <label className="form-label">
                What is currently the most difficult part of photography for
                you?
              </label>
              <textarea className="form-control mb-4" rows="3"></textarea>
              What do you expect to learn from this workshop?
              <textarea className="form-control mb-4" rows="3"></textarea>
              <div className="border rounded-2 p-2 mb-2">
                <label className="form-label fw-semibold">
                  Are you willing to practice assignments after the workshop?
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="workshop"
                    id="definitely"
                  />
                  <label className="form-check-label" htmlFor="definitely">
                    Yes definitely
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="workshop"
                    id="permits"
                  />
                  <label className="form-check-label" htmlFor="permits">
                    Yes if time permits
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="workshop"
                    id="notSure"
                  />
                  <label className="form-check-label" htmlFor="notSure">
                    Not Sure
                  </label>
                </div>
              </div>

              {/* EQUIPMENT */}
              <h6 className="mt-3">EQUIPMENT</h6>
              <div className="border rounded-4 p-3 mb-3 bg-light">
                 <label className="form-label fw-semibold">
                  What equipment do you shoot with?
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Mirrorless"
                  />
                  <label className="form-check-label" htmlFor="Mirrorless">
                    Camera (DSLR / Mirrorless)
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Camera"
                  />
                  <label className="form-check-label" htmlFor="Camera">
                    Camera + Mobile
                  </label>
                </div>

                 <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="mobileCamera"
                  />
                  <label className="form-check-label" htmlFor="mobileCamera">
                    Mobile only but planning to buy a camera
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="mobileOnly"
                  />
                  <label className="form-check-label" htmlFor="mobileOnly">
                    Mobile only
                  </label>
                </div>

              </div>

              <label className="form-label">
                Camera Model
              </label>
              <textarea className="form-control mb-4" rows="3"></textarea>

              <div className="border rounded-4 p-3 mb-3 bg-light">
                <label className="form-label fw-semibold">
                  Which lenses do you own?
                </label>
                 <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="lens"
                  />
                  <label className="form-check-label" htmlFor="lens">
                    Kit lens
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="50mmPrime"
                  />
                  <label className="form-check-label" htmlFor="50mmPrime">
                    50mm prime
                  </label>
                </div>

                 <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Telephoto"
                  />
                  <label className="form-check-label" htmlFor="Telephoto">
                    Telephoto
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="equivalent"
                  />
                  <label className="form-check-label" htmlFor="equivalent">
                    Wide angle (below 24mm full-frame equivalent)
                  </label>
                </div>

                 <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="UltraWide"
                  />
                  <label className="form-check-label" htmlFor="UltraWide">
                    Ultra-wide (16mm or wider)
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="whenNeeded"
                  />
                  <label className="form-check-label" htmlFor="whenNeeded">
                    I rent lenses when needed
                  </label>
                </div>

                 <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="focallengths"
                  />
                  <label className="form-check-label" htmlFor="focallengths">
                    Not sure about focal lengths
                  </label>

                </div>
              </div>

               <div className="border rounded-2 p-2 mb-2">
                <label className="form-label fw-semibold">
                  Have you used a wide lens before?
                </label>

                 <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="focal"
                      id="Frequently"
                    />
                    <label className="form-check-label" htmlFor="Frequently">
                      Frequently
                    </label>
                  </div>

                   <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="focal"
                      id="fewTimes"
                    />
                    <label className="form-check-label" htmlFor="fewTimes">
                      Few times
                    </label>
                  </div>


                <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="focal"
                      id="twice"
                    />
                    <label className="form-check-label" htmlFor="twice">
                      Once or twice
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="focal"
                      id="Never"
                    />
                    <label className="form-check-label" htmlFor="Never">
                      Never
                    </label>
                  </div>
               </div>

               <div className="border rounded-2 p-2 mb-2">
                <label className="form-label d-block">
                  Are you willing to rent or borrow a wide lens for assignments if required?
                </label>
               
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="assignments"
                      id="assignmentsYes"
                    />
                    <label className="form-check-label" htmlFor="assignmentsYes">
                      Yes
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="assignments"
                      id="assignmentsNo"
                    />
                    <label className="form-check-label" htmlFor="assignmentsNo">
                      No
                    </label>
                  </div>

                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="assignments"
                      id="assignmentsMaybe"
                    />
                    <label className="form-check-label" htmlFor="assignmentsMaybe">
                      Maybe
                    </label>
                  </div>
                
              </div>

              {/* AVAILABILITY & WORK INTEREST */}
               <h6 className="mt-3">AVAILABILITY & WORK INTEREST</h6>
                <div className="border rounded-4 p-3 mb-3 bg-light">
                  <label className="form-label fw-semibold">
                  Are you primarily a wedding photographer?
                </label>

                  <div className="d-flex justify-content">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="weddingPhotographer"
                      id="yesFullTime"
                    />
                    <label className="form-check-label" htmlFor="yesFullTime">
                      Yes – full time
                    </label>
                  </div> 
                </div>

                <div className="d-flex justify-content">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="weddingPhotographer"
                      id="yesPartTime"
                    />
                    <label className="form-check-label" htmlFor="yesPartTime">
                      Yes – part time
                    </label>
                  </div> 
                </div>

                <div className="d-flex justify-content">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="weddingPhotographer"
                      id="noMostly"
                    />
                    <label className="form-check-label" htmlFor="noMostly">
                        No – I shoot other genres mostly
                    </label>
                  </div> 
                </div>

                 <div className="d-flex justify-content">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="weddingPhotographer"
                      id="stillLearning"
                    />
                    <label className="form-check-label" htmlFor="stillLearning">
                        Im still learning                   
                    </label>
                  </div> 
                </div>
              </div>

              <div className="border rounded-2 p-2 mb-2">
                <label className="form-label d-block">
                  During non-muhurtham months, what do you usually do?
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="muhurtham"
                  />
                  <label className="form-check-label" htmlFor="muhurtham">
                    Photo editing for clients
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="videoEditing"
                  />
                  <label className="form-check-label" htmlFor="videoEditing">
                    Video editing
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="otherPhotographers"
                  />
                  <label className="form-check-label" htmlFor="otherPhotographers">
                   Assist other photographers
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Freelance"
                  />
                  <label className="form-check-label" htmlFor="Freelance">
                   Freelance shoots
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="differentJob"
                  />
                  <label className="form-check-label" htmlFor="differentJob">
                  Work a different job / business
                  </label>
                </div>

                 <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="mostlyFree"
                  />
                  <label className="form-check-label" htmlFor="mostlyFree">
                  Mostly free / looking for work
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="projectsLearning"
                  />
                  <label className="form-check-label" htmlFor="projectsLearning">
                  Personal projects / learning
                  </label>
                </div>
              </div>

              <div className="border rounded-2 p-2 mb-2">
                   <label className="form-label d-block">
                   Approximately how many days per month are you available during off-season?
                </label>
                
                <div className="form-check        ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="offSeason"
                      id="zeroFiveDays"
                    />
                    <label className="form-check-label" htmlFor="zeroFiveDays">
                      0–5 days
                    </label>
                  </div>
                
                <div className="form-check         ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="offSeason"
                      id="fiveTenDays"
                    />
                    <label className="form-check-label" htmlFor="fiveTenDays">
                      5–10 days
                    </label>
                  </div>

                  <div className="form-check       ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="offSeason"
                      id="tenTwentyDays"
                    />
                    <label className="form-check-label" htmlFor="tenTwentyDays">
                      10–20 days
                    </label>
                  </div>

                  <div className="form-check       ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="offSeason"
                      id="fullMonth"
                    />
                    <label className="form-check-label" htmlFor="fullMonth">
                      Almost full month
                    </label>
                  </div>
              </div>   

              <div className="border rounded-2 p-2 mb-2">
                 <label className="form-label d-block">
                   Would you be interested in assisting or working on architectural shoots in the future?
                </label>

                <div className="form-check        ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="architecturalShoots"
                      id="yesDefinitely"
                    />
                    <label className="form-check-label" htmlFor="yesDefinitely">
                     Yes definitely
                    </label>
                  </div>

                  <div className="form-check        ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="architecturalShoots"
                      id="schedule"
                    />
                    <label className="form-check-label" htmlFor="schedule">
                     Yes depending on schedule
                    </label>
                  </div>

                   <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="architecturalShoots"
      id="notWork"
    />
    <label className="form-check-label" htmlFor="notWork">
      Only learning, not work
    </label>
  </div>

                  <div className="form-check        ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="architecturalShoots"
                      id="NotInterested"
                    />
                    <label className="form-check-label" htmlFor="NotInterested">
                     Not interested in commercial work
                    </label>
                  </div>
                </div> 

                 <div className="border rounded-4 p-3 mb-3 bg-light">
            <label className="form-label fw-semibold">
                  Are you comfortable waking up early morning for shoots?
                </label>

                  <div className="d-flex justify-content">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="comfortable"
                      id="yescomfortable"
                    />
                    <label className="form-check-label" htmlFor="yescomfortable">
                      Yes
                    </label>
                  </div> 
                </div>

                 <div className="d-flex justify-content">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="comfortable"
                      id="Sometimes"
                    />
                    <label className="form-check-label" htmlFor="Sometimes">
                      Sometimes
                    </label>
                  </div> 
                </div>

                <div className="d-flex justify-content">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="comfortable"
                      id="Difficult"
                    />
                    <label className="form-check-label" htmlFor="Difficult">
                      Difficult
                    </label>
                  </div> 
                </div>

           </div>    

            <div className="border rounded-4 p-3 mb-3 bg-light">
               <label className="form-label fw-semibold">
                  Are you comfortable following strict framing instructions during shoots?
                </label>

                <div className="d-flex justify-content">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="instructions"
                      id="yesInstructions"
                    />
                    <label className="form-check-label" htmlFor="yesInstructions">
                      Yes
                    </label>
                  </div> 
                </div>

                <div className="d-flex justify-content">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="instructions"
                      id="Depends"
                    />
                    <label className="form-check-label" htmlFor="Depends">
                      Depends
                    </label>
                  </div> 
                </div>

                <div className="d-flex justify-content">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="instructions"
                      id="creative"
                    />
                    <label className="form-check-label" htmlFor="creative">
                      Prefer creative freedom
                    </label>
                  </div> 
                </div>

              </div>      

              <button className="btn btn-primary w-100 rounded-pill py-2">
                Submit Application
              </button>
            </div>
          </div>

          

          {/* RIGHT MOBILE MOCK FORM */}
          {/* <div className="col-lg-3 d-none d-lg-block">
            <div className="card shadow rounded-4 p-3 mobile-mock">
              <h6 className="fw-semibold">Mobile View</h6>
              <input
                className="form-control form-control-sm mb-2"
                placeholder="Full Name"
              />
              <input
                className="form-control form-control-sm mb-2"
                placeholder="Phone"
              />
              <select className="form-select form-select-sm mb-2">
                <option>Experience</option>
              </select>
              <button className="btn btn-sm btn-primary w-100 rounded-pill">
                Submit
              </button>
            </div>
          </div> */}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
  .bg-gradient {
    background: linear-gradient(90deg, #FEEAC9, #410445, #EE66A6) !important;
    
    animation: gradientMove 6s ease infinite !important;
  }
    
  .mobile-mock {
    margin: auto;
  }
`}</style>
    </div>
  );
}

// .card-gradiant{
//         background: linear-gradient(80deg, #FFFBB1, #FCF8F8, #15173D) !important;

//     }
