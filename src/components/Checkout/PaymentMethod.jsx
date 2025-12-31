import { useState } from "react";

export default function PaymentMethod() {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");

    const formatCardNumber = (value) => {
        return value
            .replace(/\D/g, "")
            .slice(0, 16)
            .replace(/(.{4})/g, "$1 ")
            .trim();
    };

    const formatExpiry = (value) => {
        let cleaned = value.replace(/\D/g, "").slice(0, 4);

        if (cleaned.length >= 3) {
            return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
        }
        return cleaned;
    };

    return (
        <div className="payment-method-card">
            <p>Enter Card Details.</p>
            <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                    name="cardNumber"
                    id="cardNumber"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    maxLength={19}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="cardHolder">Cardholder Name</label>
                <input
                    name="cardHolder"
                    id="cardHolder"
                    type="text"
                    autoComplete="cc-name"
                    placeholder="Name on card"
                    required
                />
            </div>

            <div className="form-divide">
                <div className="form-group">
                    <label htmlFor="expiry">Expiry Date</label>
                    <input
                        name="expireDate"
                        id="expiry"
                        type="text"
                        inputMode="numeric"
                        autoComplete="cc-exp"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                        maxLength={5}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        name="cvv"
                        id="cvv"
                        type="password"
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        placeholder="***"
                        maxLength={3}
                        required
                    />
                </div>
            </div>
        </div>
    );
}
