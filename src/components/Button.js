import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='about-me'>
      <button className='btn'>About Me</button>
    </Link>
  );
}