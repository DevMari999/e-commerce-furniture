import React, { useState } from 'react';
import { FormData } from "../../types/types";
import './CheckOutForm.css';
import { useCartContext } from '../../context/CartContext';

const CheckoutForm = () => {
    const { cartItems, clearCart } = useCartContext();

    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors: Partial<FormData> = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            validationErrors.email = 'Please enter a valid email address';
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            validationErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            setFormData({
                name: '',
                phone: '',
                email: '',
            });
            setErrors({});
            setIsSubmitting(false);
            setShowAlert(true);
        }, 1000);
    };

    const handleClearCart = () => {
        clearCart();
    };

    const handleAlertClose = () => {
        setShowAlert(false);
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {errors.phone && <p className="error-message">{errors.phone}</p>}
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div className="checkout-button">
                    <button
                        className="cart-button"
                        type="submit"
                        onClick={handleClearCart}
                        disabled={isSubmitting || cartItems.length === 0}
                    >
                        {isSubmitting ? 'Processing...' : 'Submit'}
                    </button>
                </div>
            </form>
            {showAlert && (
                <div className="alert success" onClick={handleAlertClose}>
                    Your order is successful, our manager will contact you soon! (Click to close)
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;
