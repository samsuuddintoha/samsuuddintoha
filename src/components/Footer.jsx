
import { FaFacebookF, FaBehanceSquare, FaLinkedin, FaYoutube, FaDribbble, FaWhatsapp, FaGithub } from "react-icons/fa";

function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className="socialIcon">
        <a href='https://wa.me/+8801821504950' target="_blank"><FaWhatsapp /></a>
        <a href='https://facebook.com/samsuuddintoha' target="_blank"><FaFacebookF /></a>
        <a href='https://www.behance.net/samsuuddin' target="_blank"><FaBehanceSquare /></a>
        <a href='https://dribbble.com/tohasoft21' target="_blank"><FaDribbble /></a>
        <a href='https://www.youtube.com/@tohasoft' target="_blank"><FaYoutube /></a>
        <a href='https://www.linkedin.com/in/samsuuddin/' target="_blank"><FaLinkedin /></a>
        <a href='https://github.com/samsuuddintoha' target="_blank"><FaGithub /></a>
      </div>
      <footer id="footer">
        <span className="copyright">&copy; {currentYear} Developed by <b>Samsuuddin TOHA</b></span>
      </footer>
    </>
  )
}

export default Footer