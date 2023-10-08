import style from './index.module.css';
import { Link, useParams } from "react-router-dom";

function ProductCard({id, title, description, image}) {
    const {category} = useParams();
    return (
        <Link to={`/${category}/${id}`} className={style.link}>
            <div className={style.card_wrapper}>
                <div><img src={image} alt={title} className={style.card_img}/></div>
                <p>{description}</p>
                <button>Add to Cart</button>
            </div>
        </Link>
    )
}

export default ProductCard;