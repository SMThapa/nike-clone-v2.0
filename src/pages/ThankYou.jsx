import { useLocation } from 'react-router-dom';
import img from '../assets/images/5227.jpg';
import { Truck } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const ThankYou = () => {

    const { state } = useLocation();
    const data = state.order

    console.log(data)

    return (
        <div className="thankYou container">
            <div className="delivery-image">
                <img src={img} alt="delivery" />
                <div className="group">
                    <div className="title">Thank you for you order!</div>
                    <div className="desc">You'll reviece an email once order in confirmed.</div>
                </div>
            </div>

            <div className="order-info">
                <p className='orderId'><span>Order Id: </span>{data.orderId}</p>

                <div className="shipment-indication">
                    <span>Orderd</span>
                    <span>Processing</span>
                    <span>Shipped</span>
                    <span>Delivered</span>
                </div>

                <div className="order-details">
                    <div className="info">
                        <div className="heading">Shipping Address</div>

                        <p>{data.address.addressLine}</p>
                        <p>{data.address.city} - {data.address.pincode},</p>
                        <p>{data.address.state}, {data.address.country.toUpperCase()}</p>
                        <p>+91 {data.contact.phone},</p>
                        <p className='email'>{data.contact.email}</p>
                    </div>

                    <div className="info">
                        <div className="heading">Payment Method</div>
                        <p> <Truck /> Cash on Delivery</p>
                    </div>

                    <div className="info">
                        <div className="heading">Order Summery</div>

                        <div className="order-summery">
                            <p>Items ({data.items.length})</p>

                            <p>Total: &#8377;{data.totalPrice}</p>
                        </div>
                    </div>
                </div>

                <Link to={'/account'}>
                    <Button title="Check Your Orders" />
                </Link>
            </div>

            {
                state.order &&
                <div className='order-info'>
                    <p className='orderId'>Products you purchased.</p>
                    {
                        data.items.map((item, index) => (
                            <div className='order-card' key={index}>
                                <img src={item.thumbnail} alt={item.name} />
                                <div className="mid">
                                    <p>{item.name}</p>
                                    <p><span>Size:</span> {item.size}</p>
                                    <p className='delivery'>Estimated delivery date 21st Jan, 2026</p>
                                </div>
                                <div className="price">&#8377;{item.price}</div>
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    )
}
