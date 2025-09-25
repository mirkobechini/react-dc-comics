
//banner
import dcLogoBackground from './../assets/img/dc-logo-bg.png'

//bottom-band
import facebookLogo from './../assets/img/footer-facebook.png'
import periscopeLogo from './../assets/img/footer-periscope.png'
import pinterestLogo from './../assets/img/footer-pinterest.png'
import twitterLogo from './../assets/img/footer-twitter.png'
import youtubeLogo from './../assets/img/footer-youtube.png'

const banner_list = [
    {
        id: 0,
        title: 'dc comics',
        list: [
            {
                id: 0,
                text: "characters",
                href: "#",
            },
            {
                id: 1,
                text: "comics",
                href: "#",
            },
            {
                id: 2,
                text: "movies",
                href: "#",
            },
            {
                id: 3,
                text: "TV",
                href: "#",
            },
            {
                id: 4,
                text: "games",
                href: "#",
            },
            {
                id: 5,
                text: "videos",
                href: "#",
            },
            {
                id: 6,
                text: "news",
                href: "#",
            }

        ]
    },
    {
        id: 1,
        title: 'shop',
        list: [
            {
                id: 0,
                text: "shop DC",
                href: "#",
            },
            {
                id: 1,
                text: "shop DC collectibles",
                href: "#",
            }
        ]
    },
    {
        id: 2,
        title: 'dc',
        list: [
            {
                id: 0,
                text: "terms of use",
                href: "#",
            },
            {
                id: 1,
                text: "privacy policy (new)",
                href: "#",
            },
            {
                id: 2,
                text: "ad choices",
                href: "#",
            },
            {
                id: 3,
                text: "advertising",
                href: "#",
            },
            {
                id: 4,
                text: "jobs",
                href: "#",
            },
            {
                id: 5,
                text: "subscriptions",
                href: "#",
            },
            {
                id: 6,
                text: "talent workshop",
                href: "#",
            },
            {
                id: 7,
                text: "CPSC certificates",
                href: "#",
            },
            {
                id: 8,
                text: "ratings",
                href: "#",
            },
            {
                id: 9,
                text: "shop help",
                href: "#",
            },
            {
                id: 10,
                text: "Contact us",
                href: "#",
            }
        ]
    },
    {
        id: 3,
        title: 'sites',
        list: [
            {
                id: 0,
                text: "DC",
                href: "#",
            },
            {
                id: 1,
                text: "MAD magazine",
                href: "#",
            },
            {
                id: 2,
                text: "DC kids",
                href: "#",
            },
            {
                id: 3,
                text: "DC universe",
                href: "#",
            },
            {
                id: 4,
                text: "DC power visa",  
                href: "#",
            }
        ]
    }
]


export default function AppFooter() {
    return (
        <footer>
            <div className="container flex-container banner">
                <div className="leftCol">

                    {banner_list.map(menu =>
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