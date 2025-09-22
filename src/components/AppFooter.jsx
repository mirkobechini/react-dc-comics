
import digitalComics from '/img/buy-comics-digital-comics.png'
import merchandiseComics from '/img/buy-comics-merchandise.png'
import shopLocatorComics from '/img/buy-comics-shop-locator.png'
import subscriptionComics from '/img/buy-comics-subscriptions.png'
import powerVisaComics from '/img/buy-dc-power-visa.svg'
import dcLogoBackground from '/img/dc-logo-bg.png'


import facebookLogo from '/img/footer-facebook.png'
import periscopeLogo from '/img/footer-periscope.png'
import pinterestLogo from '/img/footer-pinterest.png'
import twitterLogo from '/img/footer-twitter.png'
import youtubeLogo from '/img/footer-youtube.png'

export default function AppFooter() {
    return (
        <footer>
            <div id="buyRow" className="container">
                <div className="col flex">
                    <img src={digitalComics} alt="buyDigitalComics" />
                    <span className='cardsSpan'>
                        digital comics
                    </span>
                </div>
                <div className="col flex">
                    <img src={merchandiseComics} alt="merchandise" />
                    <span className='cardsSpan'>
                        dc merchandise
                    </span>
                </div>
                <div className="col flex">
                    <img src={subscriptionComics} alt="subscriptions" />
                    <span className='cardsSpan'>
                        subscription
                    </span>
                </div>
                <div className="col flex">
                    <img src={shopLocatorComics} alt="shopLocator" />
                    <span className='cardsSpan'>
                        comic shop locator
                    </span>
                </div>
                <div className="col flex">
                    <img src={powerVisaComics} alt="powerVisa" />
                    <span className='cardsSpan'>
                        dc power visa
                    </span>
                </div>

            </div>
            <div class="container flex-container banner">
                <div class="leftCol">
                    <section class="linkCard">
                        <h2>dc comics</h2>
                        <ul>
                            <li>characters</li>
                            <li>comics</li>
                            <li>movies</li>
                            <li>tv</li>
                            <li>games</li>
                            <li>videos</li>
                            <li>news</li>
                        </ul>
                    </section>
                    <section class="linkCard">
                        <h2>shop</h2>
                        <ul>
                            <li>shop dc</li>
                            <li>shop dc collectibles</li>
                        </ul>
                    </section>
                </div>
                <section class="linkCard">
                    <h2>dc</h2>
                    <ul>
                        <li>term of use</li>
                        <li>privacy policy (new)</li>
                        <li>ad choices</li>
                        <li>advertising</li>
                        <li>jobs</li>
                        <li>subscriptions</li>
                        <li>talent workshop</li>
                        <li>cpsc certificates</li>
                        <li>ratings</li>
                        <li>shop help</li>
                        <li>Contact us</li>
                    </ul>
                </section>
                <section class="linkCard">
                    <h2>sites</h2>
                    <ul>
                        <li>dc</li>
                        <li>mad magazine</li>
                        <li>dc kids</li>
                        <li>dc universe</li>
                        <li>dc power visa</li>
                    </ul>
                </section>
                <img src={dcLogoBackground} alt="logoBackground" id="logoBg" />
            </div>
            <div id="signUpRow" className="container">
                <div className="col">
                    <a href="" id="signUp">sign-up now!</a>
                </div>
                <div className="col follow">
                    <a href="" id='followUs'>follow us</a>
                    <img src={facebookLogo} alt="facebook" />
                    <img src={twitterLogo} alt="twitter" />
                    <img src={youtubeLogo} alt="youtube" />
                    <img src={pinterestLogo} alt="pinterest" />
                    <img src={periscopeLogo} alt="periscope" />
                </div>
            </div>
        </footer>
    )
}