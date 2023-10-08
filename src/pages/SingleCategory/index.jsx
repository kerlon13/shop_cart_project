import { useParams } from "react-router";
import { useGetSingleCategoryQuery } from "../../redux/api/singleCategoryApi";
import ProductCard from "../../components/ProductCard";
import style from './index.module.css';

function SingleCategory () {
    const {category} = useParams();
    const {data = []} = useGetSingleCategoryQuery(category);
    
    return( 
        <div className={style.category_wrapper}>
            <h3 className={style.category_title}>{category}</h3>
            <div className={style.products_wrapper}>
                {data.map((product, ind) => (
                    <ProductCard key={ind} {...product}/>
                ))}
            </div>
        </div>
    )
}

export default SingleCategory;