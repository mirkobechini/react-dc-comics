
import style from "./CardComics.module.css"

export default function CardComics(props) {

    const {series, thumb} = props.comic
    
    return (
        <div className={style.card}>
            <div className={style.sizer}>
                <img src={thumb} alt="" />
            </div>
            <span className={style.label}>{series}</span>
        </div>

    )
}