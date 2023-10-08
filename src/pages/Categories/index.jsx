import Category from "../../components/Category";
import { useGetCategoriesQuery } from "../../redux";
import style from './index.module.css';

function Categories() {
    const {data = []} = useGetCategoriesQuery();

    return(
        <div className={style.categories_wrapper}>
            <h2 className={style.category_title}>Лучший магазин лучших вещей</h2>
            <div className={style.categories}>
                {data.map((eachCategory,ind) => (
                    <Category key={ind} title={eachCategory}/>
                ))}
            </div>
        </div>
    ) 
}

export default Categories;