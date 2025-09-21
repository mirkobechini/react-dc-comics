
import digitalComics from '/img/buy-comics-digital-comics.png'
import merchandiseComics from '/img/buy-comics-merchandise.png'
import shopLocatorComics from '/img/buy-comics-shop-locator.png'
import subscriptionComics from '/img/buy-comics-subscriptions.png'
import powerVisaComics from '/img/buy-dc-power-visa.svg'

export default function AppFooter() {
    return (
        <footer>
            <div className="container">
                <div id="buyRow" className="row">
                    <div className="col">
                        <img src={digitalComics} alt="buyDigitalComics" />
                        digital comics
                    </div>
                    <div className="col">
                        <img src={merchandiseComics} alt="merchandise" />
                    </div>
                    <div className="col">
                        <img src={shopLocatorComics} alt="shopLocator" />
                    </div>
                    <div className="col">
                        <img src={subscriptionComics} alt="subscriptions" />
                    </div>
                    <div className="col">
                        <img src={powerVisaComics} alt="powerVisa" />
                    </div>

                </div>
                <div id="bottomJumbo" className="row">

                    ciao
                </div>
                <div id="signUp" className="row">
                    ciao
                </div>
            </div>
        </footer>
    )
}