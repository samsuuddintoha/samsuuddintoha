import { IoSearchOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


function Contact() {
  return (
    <>
      <div id="contact">
        <div className="container">
          <h2 className="heading">Let's talk about Project</h2>
          <span className="headingBg">Let's talk about Project</span>
          <div className="row">
            <div className="col-md-4">
              <div className="item">
                <div className="icon"><IoSearchOutline /></div>
                <h4>Search on Web</h4>
                <p>samsuuddintoha</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="icon"><MdEmail /></div>
                <h4>Email</h4>
                <p>samsuuddintoha@gmail.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="icon"><FaLocationDot /></div>
                <h4>Location</h4>
                <p>Cumilla, Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="">
              <h5>Still Confused?</h5>
              <h2>Book a free call</h2>
            </div>
            <div className=" ">
              <a href="https://wa.me/+8801821504950" target="_blank" className="btnDefault">Book Here</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact