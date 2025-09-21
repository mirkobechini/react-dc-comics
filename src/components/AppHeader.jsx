
import headerLogo from '/img/dc-logo.png'

export default function AppHeader(){
    return(
        <header>
        <img src={headerLogo} className='logo' alt="logo DC" />
        <nav>
            <a href="">characters</a>
            <a href="">comics</a>
            <a href="">movies</a>
            <a href="">tv</a>
            <a href="">games</a>
            <a href="">collectibles</a>
            <a href="">videos</a>
            <a href="">fans</a>
            <a href="">news</a>
            <a href="">shop</a>
        </nav>
      </header>
    )
}