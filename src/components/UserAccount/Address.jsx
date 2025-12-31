import axios from "axios"
import { toast } from "react-toastify";
import useUserStore from "../../zustand/useUserStore";

import { SquarePen, Trash2 } from "lucide-react";
import { span } from "framer-motion/client";

export const Address = () => {

    const user = useUserStore(state => state.user);
    const addAddress = useUserStore(state => state.addAddress);

    console.log(user)

    const url = import.meta.env.VITE_BASE_URL
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData.entries());
        console.log(payload);

        axios.post(`${url}/users/user-details`, payload)
            .then(res => {
                // console.log(res)
                toast.success('New Address Added.')
            }).catch(err => {
                // toast.error('New Address Added.')
                console.log(err)
            })
    };


    return (
        <div className="user-address">

            <div className="address">
                {
                    user.address.map((info, index) => (
                        <div className="address-card" key={index}>
                            {
                                info.isDefault ?
                                    <span></span> :
                                    <span></span>
                            }
                            <h2>{info.city}</h2>
                            <p>{info.addressLine}</p>
                            <p>{info.pincode}</p>
                            <p>{info.state}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <button className="btn-primary">
                                <SquarePen />Edit
                            </button>
                            <button className="btn-primary">
                                <Trash2 />Remove
                            </button>
                        </div>
                    ))
                }
            </div>

            <div className="title">Add Address</div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Address" name="addressLine" required />
                </div>
                <div className="form-divide">
                    <div className="form-group">
                        <input type="text" placeholder="State" name="state" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="City" name="city" required />
                    </div>
                </div>
                <div className="form-divide">
                    <div className="form-group">
                        <input type="number" placeholder="Pincode" name="pincode" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Country" name="country" required />
                    </div>
                </div>
                <div className="form-divide">
                    <div className="form-group">
                        <input type="number" placeholder="Phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" name="email" required />
                    </div>
                </div>

                <button className="btn-primary light">
                    Add Address
                </button>
            </form>

        </div>
    )
}
