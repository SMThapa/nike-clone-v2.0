
import { Trash2, ShoppingCart } from "lucide-react";
import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";
import useWishStore from "../zustand/useWishStore";
import useCartStore from "../zustand/useCartStore";
import { toast } from "react-toastify";

export const WishList = () => {

    useTitle('Wishlist - Nike')

    const items = useWishStore(state => state.items)
    const cartItems = useCartStore(state => state.items)
    const removeItem = useWishStore(state => state.removeFromWishlist)
    const addToCart = useCartStore(state => state.addToCart);
    const handleRemove = (id) => {
        removeItem(id)
    }

    const handleMoveToCart = (id) => {
        if (cartItems.find(obj => obj.id == id)) {
            toast.error('Already in cart.')
        } else {
            const prod = items.find(obj => obj.id == id)
            const normalizedProd = {
                ...prod,
                thumbnail: Array.isArray(prod.thumbnail)
                    ? prod.thumbnail
                    : [prod.thumbnail]
            }
            addToCart({
                product: normalizedProd,
                size: 'UK 6',          // or default size
                color: 'default',   // or prod.color?.[0]
                quantity: 1
            })
            handleRemove(id)

        }

    }

    return (
        <>
            {
                items.length > 0 ?
                    <div className="wishlist-page container">

                        <div className="cart-list">
                            {
                                items.map((prod, index) => (
                                    <div className="product-card" key={index + prod.id}>
                                        <div className="left">
                                            <img src={prod.thumbnail} alt="" />
                                            <div className="info">
                                                <Link to={`/product/${prod.id}`}>
                                                    <div className="prod-name">{prod.name}</div>
                                                </Link>
                                                <p><span>Size: </span>{prod.size}</p>
                                                <p><span>MRP: </span>&#8377;{prod.price}/-</p>
                                                <p><span>Quantity:</span> 1</p>

                                                <div className="btn-group">
                                                    <div className="btn-primary" onClick={() => handleMoveToCart(prod.id)}>
                                                        Move to Cart <ShoppingCart />
                                                    </div>
                                                    <div className="btn-primary" onClick={() => handleRemove(prod.id)}>
                                                        Remove Item <Trash2 />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div> :
                    <div className="wishlist-page container empty">
                        <p>Wishlist is empty.</p>
                    </div>
            }
        </>


    )
}
