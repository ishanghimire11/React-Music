import "../css/footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppleIcon from '@mui/icons-material/Apple';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



const Footer = () => {

    return (

        <footer>
            <div className="upper-footer">
                <div className="footer-about push">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio accusamus numquam consectetur, quam quo sapiente tempora natus laborum error a nemo quae, culpa impedit ex voluptates! Minus aliquam dolorum ducimus.</p>
                </div>
                <div className="footer-icons push">
                    <h3>Our Partners</h3>
                    <TwitterIcon id="footer-icon" />
                    <FacebookIcon id="footer-icon" />
                    <InstagramIcon id="footer-icon" />
                    <AppleIcon id="footer-icon" />
                </div>
                <div id="ishan" className="push">
                    <h3>Made by Ishan Ghimire</h3> 
                        
                </div>

                <div>
                    <a href="#top" className="back-top"> <ArrowUpwardIcon id="backTop-icon"/> Back to Top</a>
                </div>
                
            </div>
            
            <div className="copyright-container">
                Copyright &copy; 2022 All Rights Preserved by Ishan Ghimire
                
            </div>

            

        </footer>

    );
}

export default Footer;
