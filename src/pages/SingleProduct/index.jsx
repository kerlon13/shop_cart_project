import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../../redux";
import style from './index.module.css';

function SingleProduct () {
    const {product_id} = useParams();
    const {data = {}} =useGetSingleProductQuery(product_id);
    const { description, image, title, price } = data;
    console.log(data);
    return (
        <div className={style.product_wrapper}>
            <div className={style.img_container}><img src={image} alt={title}/></div>
            <div className={style.product_descr}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                    <span>Price: {price}</span>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;