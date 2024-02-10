import React from 'react'
import { SlLayers } from "react-icons/sl";
import { GiCoffeeCup } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";




function FunFacts() {

  return (
    <>
      <div id="facts">
        <div className="container">
          <h2 className="heading">Fun Facts</h2>
          <span className="headingBg">Fun Facts</span>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="fun">
                <div className="icon">
                  <SlLayers/>
                </div>
                <h4>23</h4>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="fun">
                <div className="icon">
                  <GiCoffeeCup/>
                </div>
                <h4>1310</h4>
                <p>Cup of coffee</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="fun">
                <div className="icon">
                  <IoTimeOutline/>
                </div>
                <h4>0324</h4>
                <p>Hours worked</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="fun">
                <div className="icon">
                  <TfiReload/>
                </div>
                <h4>02</h4>
                <p>Ongoing projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FunFacts