import React from "react"
import SignupForm from "./SignupForm"
function Homepage() {
    return (
        <main className="Homepage">
            <div className="container">
                <div className="text-container">
                    <h3 className="course-name">Bakkers Driving School Online Driver's Ed course</h3>
                    <hr />
                    <h5 className="course-description">California DMV approved Online Driver's Ed Course</h5>
                </div>
                {/* <div className="form-background"> */}
                    <div className="form-container">
                    <SignupForm />
                    </div>
                {/* </div> */}
            </div>
        </main>
    )
}
export default Homepage