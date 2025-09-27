
import headerLogo from './../assets/img/dc-logo.png'

export default function AppHeader({menu}) {
    return (
        <header>
            <div className="container flex-container">
                <img src={headerLogo} className='logo' alt="logo DC" />
                <nav className="nav flex-container">
                    {
                        menu.map(item => 
                        <a href={item.href} className={(item.is_active)?'active': ''} key={item.id}> {item.text}  </a>)
                    }
                </nav>
            </div>
        </header >
    )
}