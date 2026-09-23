import { Link } from "react-router-dom";
import Footer from "./Home/Footer";

export const Checkout = () => {
    return (
        <>
            <section className="checkout-page py-5">
                <div className="container">
                    <h1 className="checkout-title mb-4">Checkout</h1>

                    <div className="row g-4">

                        {/* Billing Details */}
                        <div className="col-12 col-lg-8">
                            <div className="checkout-box">
                                <h2 className="checkout-heading">Billing Details</h2>

                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="billing-name" className="form-label">Full Name</label>
                                        <input type="text" id="billing-name" className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="billing-email" className="form-label">Email</label>
                                        <input type="email" id="billing-email" className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="billing-address" className="form-label">Address</label>
                                        <input type="text" id="billing-address" className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="billing-city" className="form-label">City</label>
                                        <input type="text" id="billing-city" className="form-control" required />
                                    </div>

                                    <div className="row g-3 mb-3">
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="billing-state" className="form-label">State</label>
                                            <input type="text" id="billing-state" className="form-control" required />
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <label htmlFor="billing-zip" className="form-label">ZIP Code</label>
                                            <input type="text" id="billing-zip" className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="billing-phone" className="form-label">Phone Number</label>
                                        <input type="tel" id="billing-phone" className="form-control" required />
                                    </div>

                                    <div className="form-check mt-4">
                                        <input type="checkbox" id="different-address" className="form-check-input" />
                                        <label htmlFor="different-address" className="form-check-label">
                                            Ship to a different address?
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>


                        {/* Order Summary */}
                        <div className="col-12 col-lg-4">
                            <div className="checkout-box order-summary">
                                <h2 className="checkout-heading">Order Summary</h2>

                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>$59.00</span>
                                </div>

                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <span>$10.00</span>
                                </div>

                                <div className="summary-row summary-total">
                                    <span>Total</span>
                                    <span>$69.00</span>
                                </div>

                                <button type="submit" className="checkout-button">
                                    Proceed to Payment
                                </button>

                                <Link to="/cart" className="back-cart">
                                    ← Back to Cart
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};