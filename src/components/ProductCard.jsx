import { span } from "framer-motion/client";
import { Link } from "react-router-dom";

Link

export const ProductCard = (prod) => {

    const product = prod.prod
    console.log(product)

    return (
        <Link to={`/product/${product.id}`}>
            <div className='productCard'>
                <div className="product-image">
                    <img className='first-img' src={product.thumbnail[0]} alt={product.name} />
                    <img className='second-img' src={product.thumbnail[3]} alt={product.name} />
                </div>
                <div className="product-title">{product.name}</div>
                <div className="product-genre">{product.genre}</div>
                <div className="product-gender-type">For {product.gender}</div>
                {/* <div className="product-colors">{product.color.length} {product.color.length > 1 ? 'Colors' : 'Color'}</div> */}
                <div className="product-price">Rs.
                    {product.sale
                        ?
                        <>
                            <span className="hide">{product.price}</span>
                            {Math.round(product.price * (1 - parseFloat(product.sale) / 100))}
                        </>
                        :
                        <span>
                            {product.price}
                        </span>} /-
                </div>

            </div>
        </Link>
    )
}
