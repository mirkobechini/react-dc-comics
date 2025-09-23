import digitalComics from './../assets/img/buy-comics-digital-comics.png'
import merchandiseComics from './../assets/img/buy-comics-merchandise.png'
import shopLocatorComics from './../assets/img/buy-comics-shop-locator.png'
import subscriptionComics from './../assets/img/buy-comics-subscriptions.png'
import powerVisaComics from './../assets/img/buy-dc-power-visa.svg'

import BandIconCard from './BandIconCard'

export default function BandIcon(){
    return(
        <div className="icon-band container flex-container">
            <BandIconCard
                text = {'digital comics'}
                image = {digitalComics}
            />
            <BandIconCard
                text = {'dc merchandise'}
                image = {merchandiseComics}
            />
            <BandIconCard
                text = {'subscription'}
                image = {subscriptionComics}
            />
            <BandIconCard
                text = {'comic shop location'}
                image = {shopLocatorComics}
            />
            <BandIconCard
                text = {'dc power visa'}
                image = {powerVisaComics}
            />
        </div>
    )
}