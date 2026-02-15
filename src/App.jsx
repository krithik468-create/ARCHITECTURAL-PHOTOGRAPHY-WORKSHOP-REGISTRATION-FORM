import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="d-flex align-items-center bg-gradient">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* LEFT CONTENT */}
          <div className="col-lg-4 text-white">
            <h1 className="fw-bold display-5">UI Form</h1>
            <ul className="list-unstyled mt-4 fs-5">
              <li>✔ Minimal</li>
              <li>✔ Responsive</li>
              <li>✔ Customizable</li>
            </ul>
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
                    name="travel"
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
                    name="travel"
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
                    name="travel"
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
                    name="travel"
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
                    name="travel"
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
                    name="travel"
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
                    name="travel"
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
                    name="travel"
                    id="notSure"
                  />
                  <label className="form-check-label" htmlFor="notSure">
                    Not Sure
                  </label>
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
    background: linear-gradient(135deg, #FEEAC9, #410445, #EE66A6) !important;
    
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
