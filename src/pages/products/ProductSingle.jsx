import { useParams } from 'react-router-dom';
import data from '../../../data/data.json';
import { useEffect, useState } from 'react';
import { ProductSlider } from '../../components/SingleProduct/ProductSlider'

export const ProductSingle = () => {

    const size = {
        Kid: ["UK 1", "UK 2", "UK 3", "UK 4", "UK 5", "UK 6"],
        Women: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5"],
        Men: ["UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5", "UK 9", "UK 9.5", "UK 10", "UK 10.5", "UK 11", "UK 11.5", "UK 12"]
    }

    const { pid } = useParams();

    const [prod, setProd] = useState({})
    useEffect(() => {
        setProd(data.products.find(obj => obj.id == pid))
    }, [pid])

    return (
        <div className="product-single">
            <div className="main-product">
                {
                    prod.thumbnail && <ProductSlider images={prod.thumbnail} />
                }
                <div className="product-info-section">
                    <p className="prod-name">{prod.name}</p>
                    <p className="prod-genre">{prod.genre}</p>
                    <p className="prod-price">MRP: &#8377;{prod.price}/-</p>

                    <p className='prod-size'>Size Guide:</p>
                    <div className="prod-size-guide">
                        {
                            size[prod.gender]?.map((item, index) => (
                                <div className="radio-group" key={index}>
                                    <input type="radio" id={item} name='size' defaultChecked={index === 0} />
                                    <label htmlFor={item}>{item}</label>
                                </div>
                            ))
                        }
                    </div>

                    <div className="button-group">
                        <div className="prod-btn buy">Buy Now</div>
                        <div className="prod-btn cart">Add to Cart</div>
                    </div>

                    <p className="prod-info">Net Quantity: <strong>1 Pair</strong></p>

                    <p className="prod-desc"><strong>{prod.name}</strong> redefines <strong>{prod.genre}</strong> style with a refined take on an iconic silhouette. Built with premium materials and clean design lines, it delivers a confident look that balances heritage and modern edge. Subtle detailing and thoughtful construction bring high-energy appeal, making it a versatile choice for everyday wear—where comfort, style, and attitude come together.</p>

                    <p className="prod-info">{prod.id}</p>
                    <p className="prod-info">Country of Origin: <strong>India</strong></p>
                </div>
            </div>
        </div>
    )
}
