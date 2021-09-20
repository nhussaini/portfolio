import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitHub } from '@fortawesome/free-solid-svg-icons';
import { GoMarkGithub } from "react-icons/go";
import { FaInstagram, FaLinkedin} from "react-icons/fa";
const Footer =()=>{
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-md-6">
                    <div className="d-flex">
                        <p>Toronto,ON</p>
                    </div>

                    <div className="d-flex">
                        <a href="tel:+14379854458">(+1)4379854458</a>
                    </div>

                    <div className="d-flex">
                        <p>nhussaini1994@gmail.com</p>
                    </div>
                </div>

                <div className="col-lg-3 cold-md-2 cold-sm-6">
                    <div className="row">
                        <div className="col">
                            <a className="footer-nav">Home</a>
                            <br />
                            <a className="footer-nav">About Me</a>
                            <br />

                            <a className="footer-nav">Services</a>
                            

                        </div>
                        <div className="col">
                            <a className="footer-nav">Experience</a>
                            <br />

                            <a className="footer-nav">Portfolio</a>
                            <br />

                            <a className="footer-nav">Contacts</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        <a href="https://github.com/nhussaini" className="mx-2"><GoMarkGithub /></a>
                        <a href="https://www.linkedin.com/in/nasrullah-hussaini/" className="mx-2"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/nasrullah__hussaini/" className="mx-2"><FaInstagram /></a>


                    </div>

                    <p className="pt-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;Nasrullah Hussaini | All Rights Reservered
                    </p>
                </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;