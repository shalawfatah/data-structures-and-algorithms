import React from 'react'
import { useEffect } from 'react'

const Home = ({setShow}) => {
    useEffect(() => {
        setShow(false)
        return () => setShow(false)
    }, [])
  return (
    <div className='page'>
        <h1>This is a course on Data Structures & Algorithms</h1>
        <p>I'm learning this course currently, but planning to create a course to teach people.
            I believe the best way to learn is to teach, at least for me.
        </p>
    </div>
  )
}

export default Home