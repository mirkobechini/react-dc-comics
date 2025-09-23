//Style
import style from "./BandIconCard.module.css"



export default function BandIconCard(props) {
    console.log(props);
    
    return (
        <div className={style.card}>
            <img src = {props.image} alt = "" />
            <span>{props.text}</span>
        </div>

    )
}