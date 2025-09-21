
import digitalComics from '/img/buy-comics-digital-comics.png'
import merchandiseComics from '/img/buy-comics-merchandise.png'
import shopLocatorComics from '/img/buy-comics-shop-locator.png'
import subscriptionComics from '/img/buy-comics-subscriptions.png'
import powerVisaComics from '/img/buy-dc-power-visa.svg'



import facebookLogo from '/img/footer-facebook.png'
import periscopeLogo from '/img/footer-periscope.png'
import pinterestLogo from '/img/footer-pinterest.png'
import twitterLogo from '/img/footer-twitter.png'
import youtubeLogo from '/img/footer-youtube.png'

export default function AppFooter() {
    return (
        <footer>
            <div className="container">
                <div id="buyRow" className="row">
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
                <div id="bottomJumbo" className="row">

                    ciao
                </div>
                <div id="signUpRow" className="row">
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
            </div>
        </footer>
    )
}