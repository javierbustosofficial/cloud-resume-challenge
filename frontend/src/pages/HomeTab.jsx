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
        <h1 className="home_heading">Javier Bustos' Personal Website</h1>
        <span className="text_and_image">
          <p className="intro_text">Hi! My name is Javier. I’m an IT systems administrator based in Austin, Texas with experience supporting enterprise environments across deskside, help desk, and infrastructure-focused roles. I currently work in a senior technical capacity handling complex issues, system maintenance, and large-scale device deployments. My background includes Windows environments, Active Directory, Microsoft 365, networking fundamentals, and hands-on AWS work with services like EC2, IAM, VPC, and S3. I focus on moving beyond reactive support into architecture-driven work that improves reliability and scale. My long-term goal is to transition into a cloud engineering or solutions architecture role, designing secure, scalable systems. This site documents my skills, projects, and ongoing progression toward higher-impact cloud-focused work.</p>
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
