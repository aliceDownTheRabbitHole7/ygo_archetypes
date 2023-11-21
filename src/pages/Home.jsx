import React from 'react'
import NavbarData from '../data/NavbarData'
import { Link } from 'react-router-dom'

const homeLinkMap = NavbarData.map((link, i) => {
  return (
    <Link to={link.path} key={i} className='home-link'>
      <span>{link.title}</span>
    </Link>
  )
})

const Home = () => {
  return (
    <div>
      {homeLinkMap}
    </div>
  )
}

export default Home
