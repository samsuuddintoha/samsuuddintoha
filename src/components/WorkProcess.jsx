import { IoMdPeople } from "react-icons/io";
import { ImMobile } from "react-icons/im";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbLocation } from "react-icons/tb";
import { FaHouseDamage } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";


function WorkProcess() {
  return (
    <>
      <div id="work-process">
        <div className="container">
          <h2 className="heading">WorkProcess</h2>
          <span className="headingBg">WorkProcess</span>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box">
                <div className="icon">
                  <IoMdPeople/>
                </div>
                <h4>User Research</h4>
                <p>User research is the systematic investigation of users and their requirements</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="icon">
                  <TbLocation />
                </div>
                <h4>User Journey</h4>
                <p>A user journey is a path a user may take to reach their goal when using a particular product</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="icon">
                  <FaHouseDamage />
                </div>
                <h4>Wireframing</h4>
                <p>Wireframe is a visual representation of a user interface, stripped of any visual design or branding elements</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="icon">
                  <VscFeedback/>
                </div>
                <h4>Usability Testing</h4>
                <p>Usability testing is the practice of testing how easy a design is to use on a group of representative users</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="icon">
                  <ImMobile />
                </div>
                <h4>UI Design</h4>
                <p>User interfaces are made after the testing.It is the access points where users interact with designs</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="icon">
                  <BsFillLightningChargeFill />
                </div>
                <h4>Developer Handoff</h4>
                <p>This is the stage when the UI is at a point where the developer can finally start implementing it in pixel perfect code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkProcess