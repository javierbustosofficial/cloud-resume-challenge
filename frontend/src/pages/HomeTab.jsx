import { useState } from 'react'
import '../assets/stylesheets/home.css'
import Header from '../components/Header';
import Me from '../assets/images/me-image.webp'
import blogData from '../data/blogData'
import PostItem from '../components/PostItem'
import ViewCounter from '../components/ViewCounter'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className="home_tab">
        <h1 className="home_heading">Javier Bustos' Personal Website</h1>
        <ViewCounter />
        <span className="text_and_image">
          <p className="intro_text">Hi, I’m Javier. I’m an IT systems administrator based in Austin, Texas, currently working in a 
            senior technical role for a healthcare organization. I spend most of my time solving complex technical issues, 
            keeping systems reliable, and improving the way infrastructure is supported and maintained. I’m especially interested in 
            moving beyond day-to-day support and into more architecture-driven, cloud-focused work. Outside of work, I enjoy strength training 
            and competitive action shooting (USPSA). This site is where I share the projects I’m building, the skills I’m developing, and 
            my ongoing path toward designing secure, scalable systems.</p>
          <div className="intro_video"> 
            <img src={Me} />
          </div>
        </span>
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
