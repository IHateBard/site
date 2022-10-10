import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'

export default function Hero () {
    return(
    <div className={css.container}>
            {/* left side */}
        <div className={css.left}>
            
            <div className={css.cherryDiv}>
                <span>Больше, чем быстрее</span>
                <Image src={Cherry} alt="" width={40} height={25}/>
            </div>

            <div className={css.heroText}>
                <span>Самые быстрые</span>
                <span>В доствке</span>
                <span>
                    Вашей <span style={{color:"var(--themeRed"}}>Пиццы</span>
                </span>
            </div>
          
            <span className={css.miniText}>
            Наша миссия - наполнить ваш желудок вкусной едой с быстрой и бесплатной доставкой
            </span>

            <button className={`btn ${css.btn}`}>
                Заказать
            </button>

        </div>
        

            {/* right side */}

        <div className={css.right}>
            <div className={css.imageContainer}>
                <Image src={HeroImage} alt="" layout="intrinsic"/>
            </div>
        </div>
    </div>
    )
}