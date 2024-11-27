import style from '../card/card.module.css'
import Button from '../button/button'

export default function Card() {

    return (

        <div className={style.card}>
            <div className={style.header}>600 &times; 400</div>
            <div className={style.body}>
                <strong className={style.title}>Titolo del Post</strong>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero et voluptates autem quaerat ratione ab esse facere quia sint nulla, fugiat dolor illum cupiditate adipisci magnam ipsa numquam. Repellat.
                </p>
                <Button />
            </div>
        </div>
    )

}