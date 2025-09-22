import digitalComics from '/img/buy-comics-digital-comics.png'
import merchandiseComics from '/img/buy-comics-merchandise.png'
import shopLocatorComics from '/img/buy-comics-shop-locator.png'
import subscriptionComics from '/img/buy-comics-subscriptions.png'
import powerVisaComics from '/img/buy-dc-power-visa.svg'

export default function BandIcon(){
    return(
        <div class="icon-band container flex-container">
            <div class="card">
                <img src = {digitalComics} alt = "digitalComicsIcon"/>
                <span>digital comics</span>
            </div>
            <div class="card">
                <img src = {merchandiseComics} alt = "dcMerchandiseIcon"/>
                <span>dc merchandise</span>
            </div>
            <div class="card">
                <img src = {subscriptionComics} alt = "subscriptionIcon"/>
                <span>subscription</span>
            </div>
            <div class="card">
                <img src = {shopLocatorComics} alt = "comicShopLocationIcon"/>
                <span>comic shop location</span>
            </div>
            <div class="card">
                <img src = {powerVisaComics} alt = "dcPowerVisaIcon"/>
                <span>dc power visa</span>
            </div>
        </div>
    )
}