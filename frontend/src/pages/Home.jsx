import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../assets/stylesheets/default.css'
import Header from '../components/Header';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
    </>
  )
}

export default Home
