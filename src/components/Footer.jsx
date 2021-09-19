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
                            <div className="footer-nav">Home</div>
                            <div className="footer-nav">About Me</div>
                            <div className="footer-nav">Services</div>
                        </div>
                        <div className="col">
                            <div className="footer-nav">Experience</div>
                            <div className="footer-nav">Portfolio</div>
                            <div className="footer-nav">Contacts</div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;