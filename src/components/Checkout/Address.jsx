import { Fragment, useState, useEffect } from 'react'
import useUserStore from '../../zustand/useUserStore'

export const Address = () => {


    const userInfo = useUserStore(state => state.user)
    const address = userInfo.address.find(obj => obj.isDefault == true);

    const [formData, setFormData] = useState({
        addressLine: "",
        state: "",
        city: "",
        pincode: "",
        country: "",
        phone: "",
        email: "",
    });

    useEffect(() => {
        if (address && userInfo) {
            setFormData(prev => ({
                ...prev,
                addressLine: address.addressLine || "",
                state: address.state || "",
                city: address.city || "",
                pincode: address.pincode || "",
                country: address.country || "",
                phone: userInfo.phone || "",
                email: userInfo.email || ""
            }));
        }
    }, [address, userInfo]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Fragment>
            <div className="title">Address</div>
            <input type="text" name='userId' value={userInfo.userId} readOnly className='no-display' />
            <div className="form-group">
                <label htmlFor="addressLine">Address </label>
                <input type="text" name="addressLine" id="addressLine"
                    value={formData.addressLine}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-divide">
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" id='state' name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id='city' name='city'
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-divide">
                <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input type="number" id='pincode' name='pincode'
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id='country' name='country'
                        value={formData.country}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-divide">
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="number" id='phone' name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
        </Fragment>
    )
}
