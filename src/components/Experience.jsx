import React, { useEffect, useState } from 'react'
import {ExperienceData} from '../json/ExperienceData'

function Experience() {

  const [data, setData] = useState([])
  useEffect(() => {
    setData(ExperienceData)
  },[])

  return (
    <>
      <div id="experience">
        <div className="container">
          <h2 className='heading'>Experience</h2>
          <div className='headingBg'>Experience</div>
          <div className="row">

            {data.map((item, i) => (
              <div key={item.id} className="col-md-6">
              <div className="timeline">
                <div className="timeline-container">
                  <div className="content">
                      <div className="time">{item.time}<br />{item.location}</div>
                    <h6>{item.title}</h6>
                    <h3>{item.company}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default Experience