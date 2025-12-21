import useCartStore from "../zustand/useCartStore";
import { Trash2 } from "lucide-react";
import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";

export const Cart = () => {

    useTitle('Cart - Nike')

    const items = useCartStore(state => state.items);
    const removeItem = useCartStore(state => state.removeFromCart);
    const totalProd = useCartStore(state => state.totalItems());
    const totalPrice = useCartStore(state => state.totalPrice());

    const handleRemove = (key) => {
        removeItem(key)
    }

    console.log(items)

    return (
        <>
            {
                totalProd > 0 ?
                    < div className="cart-page container">

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
                                                <p><span>Quantity:</span> {prod.quantity}</p>

                                                <div className="btn-primary" onClick={() => handleRemove(prod.key)}>
                                                    Remove Item <Trash2 />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="summary">
                            <div className="section-title">Summary</div>
                            <div className="prod-info">
                                <strong>Name</strong>
                                <strong>Price</strong>
                            </div>
                            {
                                items.map((prod, index) => (
                                    <div className="prod-info" key={index}>
                                        <div className="prod-name">{prod.name}</div>
                                        <div className="prod-price">&#8377;{prod.price}</div>
                                    </div>
                                ))
                            }

                            <div className="total">
                                <div className="total-info">
                                    <strong>Total:</strong>
                                    <strong>{totalPrice}</strong>
                                </div>
                            </div>

                            <div className="btn-primary">
                                Checkout
                            </div>
                        </div>
                    </ div> :
                    <div className="cart-page container empty">
                        <p>Cart is Empty.</p>
                    </div>
            }
        </>
    )
}
