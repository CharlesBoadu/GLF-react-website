import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='heading'>Mission</h1>
      <p className='paragraph'>To offer variety of help to the less privileged in our society and beyond through available resources to ensure sufficiency and happiness</p>
      <h1 className='heading'>Vision</h1>
      <p className='paragraph'>Creating a sense of belonging with love for the less privileged and helping them make progressive development in life.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-4.jpg'
                text='Explore the hidden waterfall deep inside the
                Amazon Jungle deep'
                label='Chief Executive Officer'
                path='/executives'
                />
                <CardItem 
                src='images/img-2.jpg'
                text='Travel through the island of Balin in a private cruise'
                label='Administrative Officer'
                path='/executives'
                />
                <CardItem 
                src='images/img-5.jpg'
                text='Set sail in the Atlantic ocean visiting uncharted waters'
                label='Public Relations Officer'
                path='/executives'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-5.jpg'
                text='Set sail in the Atlantic ocean visiting uncharted waters'
                label='Director Of Operations'
                path='/executives'
                />
                <CardItem 
                src='images/img-6.jpg'
                text='Experience football on the top of Himilayen Mountains'
                label='Project Cordinator - Initiatives and emergency'
                path='/executives'
                />
                <CardItem 
                src='images/img-3.jpg'
                text='Ride through the Sahara waters on a guided Camel tour'
                label='Adrenaline'
                path='/executives'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
