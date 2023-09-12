import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='here are some properties listed that fit your budget' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
