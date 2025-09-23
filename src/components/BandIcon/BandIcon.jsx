//Style
import style from "./BandIcon.module.css"

//Child components
import BandIconCard from './BandIconCard/BandIconCard'


import digitalComics from './../../assets/img/buy-comics-digital-comics.png'
import merchandiseComics from './../../assets/img/buy-comics-merchandise.png'
import shopLocatorComics from './../../assets/img/buy-comics-shop-locator.png'
import subscriptionComics from './../../assets/img/buy-comics-subscriptions.png'
import powerVisaComics from './../../assets/img/buy-dc-power-visa.svg'


export default function BandIcon() {
    return (
        <div className={style.icon_band}>
            <BandIconCard
                text={'digital comics'}
                image={digitalComics}
            />
            <BandIconCard
                text={'dc merchandise'}
                image={merchandiseComics}
            />
            <BandIconCard
                text={'subscription'}
                image={subscriptionComics}
            />
            <BandIconCard
                text={'comic shop location'}
                image={shopLocatorComics}
            />
            <BandIconCard
                text={'dc power visa'}
                image={powerVisaComics}
            />
        </div>
    )
}