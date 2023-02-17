import React from 'react'
import "./About.css"
import Second from "../../images/my_students.jpg"
import Third from "../../images/my_cert.jpg"
const About = () => {
    return (
        <div className='a'>
            <div className='a-left'>
                <div className="a-card">
                    <img src={Second} alt="" className="a-image" />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>
                    About Me
                </h1>
                <p className='a-sub'>
                    It is a long establishment
                    fact that a reader
                    will be glad after
                    which its absolute fact.
                </p>
                <p className='a-desc'>
                    The best thing you can do, is to
                    believe in us. Allow us to take your business
                    to the next level. Our services are top notch in
                    tech world. We render services like IT Support, System Engineering,
                    Computer Networking and Web Development.
                </p>
                <div className='a-ward'>
                    <img src={Third} alt="" className="a-ward-img" />
                    <div className='a-ward-texts'>
                        <h4 className='a-ward-title'>
                            International Design Award 2021
                        </h4>
                        <p className='a-ward-desc'>
                            Our terms and conditions are friendly,
                            our customers services are superb. Reach out to
                            us and thank us later.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default About;