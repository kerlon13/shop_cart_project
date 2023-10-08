import style from './index.module.css';

function Footer() {
    return <div className={style.footer_wrapper}>
        <div className={style.text_wrapper}>
            <p className={style.text}>Мой первый сайт ©</p>
            <p className={style.text}>2023</p>
        </div>
    </div>
}

export default Footer;