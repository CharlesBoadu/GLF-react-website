import React from 'react';
import './Button.css';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Motto: Reaching the needy with one heart
        </p>
        <p className='footer-subscription-text'>
            Subscribe below to get our weekly E-mails
        </p>
        <div className='input-areas'>
            <form>
                <input 
                type='email' 
                name='email' 
                placeholder='Your Email'
                className='footer-input' />
                <button className='btn--outline'>
                    Subscribe
                </button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How It Works</Link>
                <Link to='/sign-up'>Testimonials</Link>
                <Link to='/sign-up'>Careers</Link>
                <Link to='/sign-up'>Investors</Link>
                <Link to='/sign-up'>Terms of Service</Link>
            </div>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How It Works</Link>
                <Link to='/sign-up'>Testimonials</Link>
                <Link to='/sign-up'>Careers</Link>
                <Link to='/sign-up'>Investors</Link>
                <Link to='/sign-up'>Terms of Service</Link>
            </div>
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How It Works</Link>
                <Link to='/sign-up'>Testimonials</Link>
                <Link to='/sign-up'>Careers</Link>
                <Link to='/sign-up'>Investors</Link>
                <Link to='/sign-up'>Terms of Service</Link>
            </div>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How It Works</Link>
                <Link to='/sign-up'>Testimonials</Link>
                <Link to='/sign-up'>Careers</Link>
                <Link to='/sign-up'>Investors</Link>
                <Link to='/sign-up'>Terms of Service</Link>
            </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                    GLF <img id='footer-glf-logo' src='/images/glf-logo.jpg' />
                </Link>                
            </div>
            <small className='website-rights'>Generous Life Foundation &copy; 2023</small>
            <div className='social-icons'>
                <Link 
                className='social-icon-link facebook' 
                to='/' 
                target='_blank'
                aria-label='Facebook'>
                    <i className='fab fa-facebook-f' />
                </Link>
                <Link 
                className='social-icon-link instagram' 
                to='/' 
                target='_blank'
                aria-label='Instagram'>
                    <i className='fab fa-instagram' />
                </Link>
                <Link 
                className='social-icon-link youTube' 
                to='/' 
                target='_blank'
                aria-label='YouTube'>
                    <i className='fab fa-youtube' />
                </Link>
                <Link 
                className='social-icon-link twitter' 
                to='/' 
                target='_blank'
                aria-label='Twitter'>
                    <i className='fab fa-twitter' />
                </Link>
                <Link 
                className='social-icon-link linkedIn' 
                to='/' 
                target='_blank'
                aria-label='LinkedIn'>
                    <i className='fab fa-linkedin' />
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
