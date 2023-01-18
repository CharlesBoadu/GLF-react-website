import React from 'react';
import './HeroSection.css';

let activeButton = document.querySelector('.nav-link')

const setActive = () => {
  console.log('Hello')
}

function HeroSection () {
    return (
    <>
        <div id='myCarousel' className='carousel slide carousel-fade' data-ride='carousel'>
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

            <div className='carousel-inner'>
                <div className='carousel-item active' data-interval="8000">
                <div className='overlay-image' style={{ backgroundImage: "url('/images/img-1.jpg')"}}></div>
                    <div className='container'>
                        <h1>Generous Life Foundation</h1>
                        <p>Hi, Welcome to the official website of GLF. Click on the button below to join us!</p>
                        <a href='/sign-up' className='btn btn-lg btn-primary'>
                            Sign Up Today
                        </a>
                    </div>
                </div>
                <div className='carousel-item' data-interval="8000">
                    <div className='overlay-image' style={{ backgroundImage: "url('/images/img-2.jpg')" }}>
                    </div>
                    <div className='container'>
                        <h1>Generous Life Foundation</h1>
                        <p>Hi, Welcome to the official website of GLF. Click on the button below to join us!</p>
                        <a href='/sign-up' className='btn btn-lg btn-primary'>
                            Sign Up Today
                        </a>
                    </div>
                </div>
                <div className='carousel-item' data-interval="8000">
                    <div className='overlay-image' style={{ backgroundImage: "url('/images/img-3.jpg')" }}></div>
                    <div className='container'>
                        <h1>Generous Life Foundation</h1>
                        <p>Hi, Welcome to the official website of GLF. Click on the button below to join us!</p>
                        <a href='/sign-up' className='btn btn-lg btn-primary' onClick={setActive}>
                            Sign Up Today
                        </a>
                    </div>
                </div>
            </div>
            <a href='#myCarousel' className='carousel-control-prev' role='button' data-slide='prev'>
                <span className='sr-only'></span>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            </a>
            <a href='#myCarousel' className='carousel-control-next' role='button' data-slide='next'>
                <span className='sr-only'></span>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
            </a>
        </div>
    </>  
    )
}

export default HeroSection;