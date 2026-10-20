import React from 'react'
import './Testimonial.css'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
const Testimonial = () => {
  return (
    <div className="testimonialContainer">
        <div className="testimonialContent">
            <h2 className="testimonialTitle">What Others Say About Us</h2>
            <div className="testimonialgrid">
                
                <div className="testimonialCard">
                    <div className="testmonialText">“StudySync revolutionized my classroom! Engaging content and teacher resources make learning enjoyable. Highly recommended for educators.”</div>
                    <div className="testimonialAvatar">
                        <img src={avatar1} alt=""/>
                    </div>
                    <div className="testimonialDetails">
                        <h3 className="testimonialName">Sarah Johnson</h3>
                        <p className="testimonialDescription">8th Grade English Teacher</p>
                    </div>
                </div>


                <div className="testimonialCard">
                    <div className="testmonialText">“StudySync transformed our family's learning journey. Safe, interactive, and progress tracking features are invaluable for parents.”</div>
                    <div className="testimonialAvatar">
                        <img src={avatar2} alt=""/>
                    </div>
                    <div className="testimonialDetails">
                        <h3 className="testimonialName">Mark Davis</h3>
                        <p className="testimonialDescription">Parent</p>
                    </div>
                </div>

                <div className="testimonialCard">
                    <div className="testmonialText">“StudySync, a true game-changer! Flexible content, tailored assessments, and excellent support. Integral to our school district's success.”</div>
                    <div className="testimonialAvatar">
                        <img src={avatar3} alt="" c/>
                    </div>
                    <div className="testimonialDetails">
                        <h3 className="testimonialName">Dr. James Carter</h3>
                        <p className="testimonialDescription">School Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
