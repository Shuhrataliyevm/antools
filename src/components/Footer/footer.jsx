import "./footer.css"
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-section">
                    <img src="./assets/images/antools.png" alt="#" />
                    <p>Copyright 2021. Antools</p>
                    <p>
                    Antool is a web collection of <br /> information on paid or free Design <br /> and Development tools
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>+621987463</p>
                    <p>M Building, No.10 A</p>
                    <p>antools@awesome.com</p>
                </div>
                <div className="footer-section">
                    <h3>Categories</h3>
                    <p>Design</p>
                    <p>Development</p>
                </div>
                <div className="footer-section">
                    <h3>Company Info</h3>
                    <p>About Us</p>
                    <p>Our Partners</p>
                    <p>Blog</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;