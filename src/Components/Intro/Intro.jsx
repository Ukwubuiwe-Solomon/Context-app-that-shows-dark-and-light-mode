import React from 'react'
import "./Intro.css"
import Me from "../../images/my_profile2.jpg"

 const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Solomon Chinedu</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">System Engineer</div>
                        <div className="i-title-item">Network Engineer</div>
                        <div className="i-title-item">Content Creator</div>
                    </div>
                </div>
                <div className="i-desc">
                    I design and Develop 
                    services for customers of all sizes, specializing
                    in creating stylish, modern websites, web services, online stores.

                </div>
            </div>
        </div>
        
        <div className='i-right'>
            <img src={Me} alt="" className="i-image" />
        </div>

    </div>
  )
}
export default Intro;