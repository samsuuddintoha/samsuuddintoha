import myPhoto from '../assets/images/myphoto.jpg'

function Hero() {
  return (
    <>
      <div id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-7 flex-content-center">
              <div className="content">
                <h1 className='mb-5'>👋 HELLO, <br/> I AM YOUR <br/> FRONT-END DEVELOPER</h1>
                <p className='mb-5'>I’m a Front-End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind.</p>
                <a href="work-process" className='btnDefault'>View Resume</a>
              </div>
            </div>
            <div className="col-md-5 flex-content-center">
              <img src={myPhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero