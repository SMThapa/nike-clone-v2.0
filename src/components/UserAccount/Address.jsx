import axios from "axios"
import { toast } from "react-toastify";
import useUserStore from "../../zustand/useUserStore";


import { SquarePen, Trash2 } from "lucide-react";

export const Address = () => {

    const user = useUserStore(state => state.user);
    const userEmail = useUserStore(state => state.user.email);
    const deleteAddress = useUserStore(state => state.deleteAddress);
    const addAddress = useUserStore(state => state.addAddress);
    const url = import.meta.env.VITE_BASE_URL;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData.entries());

        axios.post(`${url}/users/user-details`, payload)
            .then(res => {
                addAddress(res.data.addressAdded); // update local store with the new address
                toast.success(res.data.message || 'New address added.');
                e.target.reset(); // clear the form
            })
            .catch(err => {
                console.log(err);
                toast.error(err.response?.data?.message || 'Failed to add address.');
            });
    };


    const handleDeleteAddress = (addressId) => {
        axios.delete(`${url}/users/address/${addressId}`, {
            data: { email:userEmail } // axios requires body via `data` key for DELETE requests
        })
        .then(res => {
            toast.success(res.data.message);
            deleteAddress(addressId);            
        })
        .catch(err => {
            console.error(err);
            toast.error(err.response?.data?.message || "Failed to delete address");
        });        
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
                            <p className="no-capital">{user.email}</p>
                            <p>{user.phone}</p>                            
                            <button className="btn-primary" onClick={()=> handleDeleteAddress(info._id)}>
                                <Trash2 />Remove Address
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
