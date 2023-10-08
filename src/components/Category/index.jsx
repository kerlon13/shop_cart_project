import style from './index.module.css';
import { Link } from "react-router-dom";

function Category ({title}) {
    
    return (
    <Link className={style.link} to={`/${title}`}>
        <div className={style.category}>
            {title}
        </div>
    </Link>
    )
}

export default Category