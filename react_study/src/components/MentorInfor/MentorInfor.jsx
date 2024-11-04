// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./MentorInfor.css"
// import Logo from "../../assets/images/logo.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const MentorInfor = () => {
    return (
        <div>
            <div className="profile-card">
                <div className="cover-photo">
                    <div className="profile-photo-container">
                        <img src="https://img.freepik.com/premium-photo/face-portrait-casual-middleaged-man-white-square-background-generative-ai_741672-1331.jpg" alt="Profile photo" className="profile-photo" />
                    </div>
                </div>
                <div className="profile-info">
                    <h1>Alex Morgan</h1>
                    <div className="location">📍 San Francisco, CA</div>
                    <p className="bio">
                        Adventure seeker and coffee enthusiast. When Im not coding or rock climbing,
                        youll find me exploring hidden food spots or attempting to teach my cat tricks.
                        Looking for someone who can appreciate both dad jokes and deep conversations.
                    </p>
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-value">28</div>
                            <div className="stat-label">Age</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">59</div>
                            <div className="stat-label">Height</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">🎓</div>
                            <div className="stat-label">Masters</div>
                        </div>
                    </div>
                    <div className="interests">
                        <span className="interest">🏃‍♂️ Fitness</span>
                        <span className="interest">☕ Coffee</span>
                        <span className="interest">🧗‍♂️ Rock Climbing</span>
                        <span className="interest">✈️ Travel</span>
                        <span className="interest">📚 Reading</span>
                        <span className="interest">🎸 Music</span>
                        <span className="interest">🐱 Cat Person</span>
                        <span className="interest">🍜 Foodie</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MentorInfor