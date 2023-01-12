import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Button.css';

function Button () {
    return (
        <Link to='/sign-up'>
            <button className='sign-up-button'>
                Sign Up
            </button>
        </Link>
    )
}

export default Button;