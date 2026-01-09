import { useState } from 'react'
import '../assets/stylesheets/home.css'
import Header from '../components/Header';
import Me from '../assets/images/me-image.webp'
import blogData from '../data/blogData'
import PostItem from '../components/PostItem'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className="home_tab">
        <h1>Javier Bustos' Personal Website</h1>
        <div className="intro_video"> 
          <img src={Me} />
        </div>

        <section className='posts'>
          <h2>Recent Posts</h2>
          {blogData.map((post) => (
            <PostItem key={post.handle} post={post} />
          ))}
        </section>
      </div>
      
    </>
  )
}

export default Home
