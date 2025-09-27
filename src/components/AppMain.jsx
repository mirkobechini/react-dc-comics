//import components
import BandIcon from './BandIcon/BandIcon'
import CardComics from './CardComics/CardComics'


export default function AppMain( {comics}) {
    return (
        <main>
            <div className="image-back jumbotron">
            </div>
            <div id='mainContent' className="container">
                <span className="floatingLabel">current series</span>
                <div className='flex-container comicsShow'>
                    <div className="grid flex-container">

                        {
                            comics.map(comic =>
                                <CardComics comic = {comic} key = {comic.id} />
                            )
                        }
                    </div>
                    <a className="loadMoreLabel" href="">load more</a>
                </div>
            </div>
            <BandIcon />
        </main>
    )
}