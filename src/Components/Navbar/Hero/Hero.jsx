import React from 'react'
import './Hero.css'
const Hero =() => {
  return (
    <section className='hero-container'>
        <div className="there">
            <h2>Hi There!! <br />This is <br /> Johir Rihan.</h2>
            <p>I am a Front End Developer <strong>AND</strong> <span>I am Expert In  React js || Tailwind CSS || HTML5 || CSS3 || JavaScript || jQuery || Bootstrap5</span></p>
        </div>
        <div className="hero-img">
            <div>
                <div className="teach-icon">
                    <img src="https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-2048x1822-f7kq7hho.png" alt="" />
                </div>
                <img src="./public/images/hero2.jpg" alt="" />
            </div>
           <div>
           <div className='teach-icon'>
                <img className='img-size' src="https://www.cnet.com/a/img/resize/39e05dbff495f3ecbf044772f45baf993b92890a/hub/2011/01/18/6ee1f979-f0f7-11e2-8c7c-d4ae52e62bcc/HTML5_Logo_550px.png?auto=webp&fit=crop&height=900&width=1200" alt="" />
            </div>
            <div className='teach-icon'>
                <img className='img-size'   src="https://cdn.iconscout.com/icon/free/png-256/free-css3-8-1175200.png" alt="" />
            </div>
            <div className='teach-icon'>
                <img className='img-size'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png" alt="" />
            </div>
           </div>
        </div>
        
    </section>
  )
}

export default Hero