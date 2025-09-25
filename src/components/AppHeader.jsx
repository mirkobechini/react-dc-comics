
import headerLogo from './../assets/img/dc-logo.png'

//Menu options
const menu = [
    {
        id: 1,
        text: "characters",
        href: "#",
        is_active: false
    },
    {
        id: 2,
        text: "comics",
        href: "#",
        is_active: true
    },
    {
        id: 3,
        text: "movies",
        href: "#",
        is_active: false
    },
    {
        id: 4,
        text: "tv",
        href: "#",
        is_active: false
    },
    {
        id: 5,
        text: "games",
        href: "#",
        is_active: false
    },
    {
        id: 6,
        text: "collectibles",
        href: "#",
        is_active: false
    },
    {
        id: 7,
        text: "videos",
        href: "#",
        is_active: false
    },
    {
        id: 8,
        text: "fans",
        href: "#",
        is_active: false
    },
    {
        id: 9,
        text: "news",
        href: "#",
        is_active: false
    },
    {
        id: 10,
        text: "shop",
        href: "#",
        is_active: false
    }
]

export default function AppHeader() {
    return (
        <header>
            <div className="container flex-container">
                <img src={headerLogo} className='logo' alt="logo DC" />
                <nav className="nav flex-container">
                    {
                        menu.map(item => 
                        <a href={item.href} className={item.is_active && 'active'} key={item.id}> {item.text}  </a>)
                    }
                </nav>
            </div>
        </header >
    )
}