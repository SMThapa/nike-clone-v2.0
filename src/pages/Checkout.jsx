import useCartStore from "../zustand/useCartStore";
import PaymentMethod from "../components/Checkout/PaymentMethod";
import { Address } from "../components/Checkout/Address";
import { useRef, useState } from "react";
import useUserStore from "../zustand/useUserStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {

    const url = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate();

    const items = useCartStore(state => state.items)
    const clearCart = useCartStore(state => state.clearCart);
    const totalPrice = useCartStore(state => state.totalPrice());
    const user = useUserStore(state => state.user)

    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(formRef.current);
        const inputData = Object.fromEntries(data.entries());

        const finalData = {
            ...inputData,
            items,
            userId: user.userId,
            totalPrice
        }

        axios.post(`${url}/orders/create`, {
            finalData
        }).then(res => {
            clearCart()
            navigate('/thank-you', {
                state: {
                    order: res.data.order
                }
            })
        }).catch(err => {
            console.log(err)
        })
    }

    const [paymentMethod, setPaymentMethod] = useState("");
    const [showCardInfo, setShowCardInfo] = useState(false)
    const handleChange = (e) => {
        setPaymentMethod(e.target.value);

        if (e.target.value == 'card') {
            setShowCardInfo(true)
        } else {
            setShowCardInfo(false)
        }
    };

    return (
        <div className="checkout container">
            <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
                <div className="left">
                    <Address />
                    <div className="payment-method">
                        <h3 className="title">Payment Method</h3>
                        <div className="payment-option">
                            <label htmlFor="card">Debit/Credit Card
                                <input type="radio" id="card" name="paymentMethod"
                                    value="card"
                                    checked={paymentMethod === "card"}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        {
                            showCardInfo && <PaymentMethod />
                        }
                        <div className="payment-option">
                            <label htmlFor="cod">Cash On Delivery
                                <input type="radio" id="cod" name="paymentMethod"
                                    value="cod"
                                    checked={paymentMethod === "cod"}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="payment-option">
                            <label htmlFor="emi">EMI
                                <input type="radio" id="emi" name="paymentMethod"
                                    value="emi"
                                    checked={paymentMethod === "emi"}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <div className="title">Order Summery</div>
                    {
                        items.map((prod, index) => (
                            <div className="prod-card" key={index}>
                                <img src={prod.thumbnail} alt={prod.name} />
                                <div className="mid">
                                    <p>{prod.name}</p>
                                    <p>Size: {prod.size}</p>
                                </div>
                                <div className="right">
                                    <p>&#8377;{prod.price}</p>
                                    <p>Qty: {prod.quantity}</p>
                                </div>
                            </div>
                        ))
                    }

                    <hr />

                    <div className="group">
                        <p>Total:</p>
                        <p>&#8377;{totalPrice}</p>
                    </div>
                    <hr />

                    <button type="submit" className="btn-primary">Purchase</button>
                </div>
            </form>
        </div>
    )
}
