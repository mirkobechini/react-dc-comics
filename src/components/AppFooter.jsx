
//banner
import dcLogoBackground from './../assets/img/dc-logo-bg.png'

//bottom-band
import facebookLogo from './../assets/img/footer-facebook.png'
import periscopeLogo from './../assets/img/footer-periscope.png'
import pinterestLogo from './../assets/img/footer-pinterest.png'
import twitterLogo from './../assets/img/footer-twitter.png'
import youtubeLogo from './../assets/img/footer-youtube.png'

//menu data
import banner_list from '../data/footer_banner_menu';


export default function AppFooter() {
    return (
        <footer>
            <div className="container flex-container image-back banner">
                <div className="leftCol">

                    {banner_list.slice(0, 2).map(menu =>
                        <section className='linkCard' key={menu.id}>
                            <h2>{menu.title} </h2>
                            <ul>
                                {menu.list.map(list_item =>
                                    <li key={list_item.id}>
                                        <a href={list_item.href} >{list_item.text}</a>
                                    </li>
                                )}
                            </ul>
                        </section>
                    )}
                </div>
                {banner_list.slice(2).map(menu =>
                    <section className='linkCard' key={menu.id}>
                        <h2>{menu.title} </h2>
                        <ul>
                            {menu.list.map(list_item =>
                                <li key={list_item.id}>
                                    <a href={list_item.href} >{list_item.text}</a>
                                </li>
                            )}
                        </ul>
                    </section>
                )}
                <img src={dcLogoBackground} alt="logoBackground" id="logoBg" />
            </div>
            <div className="container flex-container bottom-band">
                <a id="signUpButton" href="">sign-up now!</a>
                <div className="follow flex-container">
                    <span>follow us</span>
                    <div className="socialLinks flex-container">
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