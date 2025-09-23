import digitalComics from './../assets/img/buy-comics-digital-comics.png'
import merchandiseComics from './../assets//img/buy-comics-merchandise.png'
import shopLocatorComics from './../assets//img/buy-comics-shop-locator.png'
import subscriptionComics from './../assets//img/buy-comics-subscriptions.png'
import powerVisaComics from './../assets//img/buy-dc-power-visa.svg'

export default function BandIcon(){
    return(
        <div className="icon-band container flex-container">
            <div className="card">
                <img src = {digitalComics} alt = "digitalComicsIcon"/>
                <span>digital comics</span>
            </div>
            <div className="card">
                <img src = {merchandiseComics} alt = "dcMerchandiseIcon"/>
                <span>dc merchandise</span>
            </div>
            <div className="card">
                <img src = {subscriptionComics} alt = "subscriptionIcon"/>
                <span>subscription</span>
            </div>
            <div className="card">
                <img src = {shopLocatorComics} alt = "comicShopLocationIcon"/>
                <span>comic shop location</span>
            </div>
            <div className="card">
                <img src = {powerVisaComics} alt = "dcPowerVisaIcon"/>
                <span>dc power visa</span>
            </div>
        </div>
    )
}