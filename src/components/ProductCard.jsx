import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import useWishStore from "../zustand/useWishStore";

export const ProductCard = (prod) => {

    const product = prod.prod;
    const addToWish = useWishStore(state => state.toggleWishlist)
    const inList = useWishStore(state => state.isWishlisted(product.id))

    const handleWish = () => {
        addToWish(product)
    }


    return (
        <Link to={`/product/${product.id}`}>
            <div className='productCard'>
                <div className="product-image">
                    <div className={`wish-icon ${inList ? 'wish-true' : ''}`} onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleWish()
                    }}>
                        <Heart />
                    </div>
                    <img className='first-img' src={product.thumbnail[0]} alt={product.name} />
                    <img className='second-img' src={product.thumbnail[3]} alt={product.name} />
                </div>
                <div className="product-info">
                    <div className="product-title">{product.name}</div>
                    <div className="product-genre">{product.genre}</div>
                    {/* <div className="product-colors">{product.color.length} {product.color.length > 1 ? 'Colors' : 'Color'}</div> */}
                    <div className="section-group">
                        <div className="product-price">Rs.
                            {product.sale
                                ?
                                <>
                                    <span className="hide">{product.price}</span>
                                    {Math.round(product.price * (1 - parseFloat(product.sale) / 100))}
                                </>
                                :
                                <span>
                                    {product.price}/-
                                </span>}
                        </div>
                    </div>
                </div>

            </div>
        </Link>
    )
}
