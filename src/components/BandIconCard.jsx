export default function BandIconCard(props) {
    console.log(props);
    
    return (
        <div className="card">
            <img src = {props.image} alt = "" />
            <span>{props.text}</span>
        </div>

    )
}