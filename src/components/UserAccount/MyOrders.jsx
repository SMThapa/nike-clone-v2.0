import axios from "axios"
import useUserStore from "../../zustand/useUserStore";
import { useEffect, useState } from "react";
export const MyOrders = () => {

    const user = useUserStore(state => state.user);
    const url = import.meta.env.VITE_BASE_URL;

    const [orders, setOrders] = useState(null)

    useEffect(() => {
        axios.get(`${url}/orders`, { params: { userId: user.userId } }).then((res) => {
            console.log(res.data)
            setOrders(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])

    return (
        <div className="my-order">
            <div className="title">My Orders</div>


            <div className="orders-list">
                {
                    orders?.orders.map((ord, index) => (
                        <div className="order" key={index}>
                            {
                                ord.items.map((prod) => (
                                    <div className="order-product" key={prod.productId}>
                                        <img src={prod.thumbnail} alt="" />
                                        <div>
                                            <p className="name">{prod.name}</p>
                                            <p><span>Quantity:</span>{prod.quantity}</p>
                                            <p><span>Size:</span>{prod.size}</p>
                                            <p><span>Price:</span>Rs.{prod.price}/-</p>
                                        </div>

                                        <div className="last">
                                            <p className="orderId"><span>order Id:</span>{ord.orderId}</p>
                                            <div className="address">
                                                <p>{ord.address.addressLine}, {ord.address.city}, {ord.address.state} - {ord.address.pincode}</p>
                                                <p>+91 {ord.contact.phone}</p>
                                                <p className="email">{ord.contact.email}</p>
                                            </div>
                                        </div>

                                        <div className="actions">
                                            <p>Estimated delivery by, 12th Jan, 2026</p>
                                            <div className="btn-primary">Cancel Order</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
