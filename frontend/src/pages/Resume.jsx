import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../index.css'
import Header from '../components/Header';
import Article from '../components/ResumePage';

function Resume() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Article></Article>
    </>
  )
}

export default Resume
