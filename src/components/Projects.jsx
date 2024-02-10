import React, { useEffect, useState } from 'react'
import { ProjectsData } from '../json/ProjectsData'

function Projects() {

  const [data, setData] = useState([]);
  const category = ['All', 'web', 'app', 'react', 'wordpress']

  useEffect(() => {
    setData(ProjectsData)
  }, [])
  
  return (
    <>
      <div id="projects">
        <div className="container">
          <h2 className="heading">Projects</h2>
          <span className="headingBg">Projects</span>
          <ul className="filter">
            {category.map((category, i) => (
              <li key={`item-${i}`} className='item'>{category}</li>
            ))}
          </ul>
          <div className="row">
            
            {data.map((item) => {
              return (
                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 grid-item">
                  <a href={item.link} target="_blank">
                    <div className="protfolio">
                        <div className="thumb">
                          <img src={item.image} alt={item.title} />
                        </div>
                      <div className="details">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </a>
                </div>)
            })}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects