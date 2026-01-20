import { useState } from 'react'
import '../assets/stylesheets/resume.css'
import Header from '../components/Header'
import Article from '../components/ResumePage'

export default function ResumeTab() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Article></Article>
    </>
  )
}