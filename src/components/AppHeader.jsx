
import headerLogo from './../assets/img/dc-logo.png'

export default function AppHeader() {
    return (
        <header>
            <div className ="container flex-container">
                <img src={headerLogo} className='logo' alt="logo DC" />
                <nav className ="nav flex-container">
                    <a href="">characters</a>
                    <a href="" className ='selected'>comics</a>
                    <a href="">movies</a>
                    <a href="">tv</a>
                    <a href="">games</a>
                    <a href="">collectibles</a>
                    <a href="">videos</a>
                    <a href="">fans</a>
                    <a href="">news</a>
                    <a href="">shop</a>
                </nav>
            </div>
        </header>
    )
}