
import headerLogo from '/img/dc-logo.png'

export default function AppHeader() {
    return (
        <header>
            <div class="container flex-container">
                <img src={headerLogo} className='logo' alt="logo DC" />
                <nav class="nav flex-container">
                    <a href="">characters</a>
                    <a href="" class='selected'>comics</a>
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