
//banner
import dcLogoBackground from '/img/dc-logo-bg.png'

//bottom-band
import facebookLogo from '/img/footer-facebook.png'
import periscopeLogo from '/img/footer-periscope.png'
import pinterestLogo from '/img/footer-pinterest.png'
import twitterLogo from '/img/footer-twitter.png'
import youtubeLogo from '/img/footer-youtube.png'

export default function AppFooter() {
    return (
        <footer>
            <div className="container flex-container banner">
                <div className="leftCol">
                    <section className="linkCard">
                        <h2>dc comics</h2>
                        <ul>
                            <li>characters</li>
                            <li>comics</li>
                            <li>movies</li>
                            <li>TV</li>
                            <li>games</li>
                            <li>videos</li>
                            <li>news</li>
                        </ul>
                    </section>
                    <section className="linkCard">
                        <h2>shop</h2>
                        <ul>
                            <li>shop DC</li>
                            <li>shop DC collectibles</li>
                        </ul>
                    </section>
                </div>
                <section className="linkCard">
                    <h2>dc</h2>
                    <ul>
                        <li>terms of use</li>
                        <li>privacy policy (new)</li>
                        <li>ad choices</li>
                        <li>advertising</li>
                        <li>jobs</li>
                        <li>subscriptions</li>
                        <li>talent workshop</li>
                        <li>CPSC certificates</li>
                        <li>ratings</li>
                        <li>shop help</li>
                        <li>Contact us</li>
                    </ul>
                </section>
                <section className="linkCard">
                    <h2>sites</h2>
                    <ul>
                        <li>DC</li>
                        <li>MAD magazine</li>
                        <li>DC kids</li>
                        <li>DC universe</li>
                        <li>DC power visa</li>
                    </ul>
                </section>
                <img src={dcLogoBackground} alt="logoBackground" id="logoBg" />
            </div>
            <div class="container flex-container bottom-band">
                <a id="signUpButton" href="">sign-up now!</a>
                <div class="follow flex-container">
                    <span>follow us</span>
                    <div class="socialLinks flex-container">
                        <img src={facebookLogo} alt="facebook" />
                        <img src={twitterLogo} alt="twitter" />
                        <img src={youtubeLogo} alt="youtube" />
                        <img src={pinterestLogo} alt="pinterest" />
                        <img src={periscopeLogo} alt="periscope" />
                    </div>
                </div>
            </div>
        </footer>
    )
}