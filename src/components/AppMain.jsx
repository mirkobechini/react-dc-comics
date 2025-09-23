
import BandIcon from './BandIcon'

export default function AppMain() {
    return (
        <main>
            <div className="container flex-container jumbotron">
            </div>
            <div id='containerMain' className="container">
                <span className="label">current series</span>
                <h2>{"--> Content goes here <--"}</h2>
            </div>
            <BandIcon />
        </main>
    )
}