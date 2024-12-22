import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../images/restaurantfood.jpg'

const Banner = () => {
  return (
    <section className='Banner'>
      {/* Banner text */}
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <img src={bannerImg} alt="Banner Img" className='banner-img-mobile' />
        <p>We are a family owned Mediterranean restaurant, <br className='mobile-hidden'/>focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking">
          <button aria-label='On Click'>Reserve a table</button>
        </Link>
        {/* Banner Image */}
        <img src={bannerImg} alt="Banner Img" className='banner-img' />
      </div>
    </section>
  )
}

export default Banner
