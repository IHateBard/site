import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'
export default function Header () {
    return (
        <div className={css.header}>
            {/* logi side*/}
            <div className={css.logo}>
                <Image src ={Logo} alt = "" width={50} height={50}/>
                <span>Пиццерия у Пантеона</span>
            </div>

            {/* menu side */ }
            <ul className={css.menu}>
                <li>Главная</li>
                <li>Меню</li>
                <li>Контакты</li>
            </ul>



            { /*right side*/ }
            <div className={css.rightSide}>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color="#2E2E2E"/>
                    <div className={css.badge}>1</div>
                </div>
            </div>
        </div>
    )

};