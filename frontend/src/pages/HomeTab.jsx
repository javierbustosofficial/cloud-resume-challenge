import { useState } from 'react'
import '../assets/stylesheets/home.css'
import Header from '../components/Header';
import Me from '../assets/images/me-image.webp'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className="home_page">
        <div className="intro_video"> 
          <img src={Me} />
        </div>
      </div>
      
    </>
  )
}

export default Home
