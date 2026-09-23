import { Link } from "react-router-dom";
import Footer from "./Home/Footer";

import product1 from "../assets/images/single-product/1.jpg";
import product2 from "../assets/images/single-product/2.jpg";

const cartItems = [
    { id: 1, name: "Summer black dress", image: product1, price: 19.99, quantity: 1 },
    { id: 2, name: "Black suit", image: product2, price: 19.99, quantity: 1 }
];

export const Cart = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    <h1 className="h2 fw-semibold mb-4">Shopping Cart</h1>

                    <div className="row g-4">
                        <div className="col-12 col-lg-9">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4">
                                <div className="table-responsive">
                                    <table className="table align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-center text-md-start">Product</th>
                                                <th className="text-center">Price</th>
                                                <th className="text-center">Quantity</th>
                                                <th className="text-center text-md-end">Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {cartItems.map(item => (
                                                <tr key={item.id}>
                                                    <td>
                                                        <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                                                            <img src={item.image} alt={item.name} className="cart-product-image rounded" />
                                                            <span className="fw-semibold">{item.name}</span>
                                                        </div>
                                                    </td>

                                                    <td className="text-center">${item.price.toFixed(2)}</td>

                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center gap-2">
                                                            <button type="button" className="btn btn-primary cart-quantity-btn">−</button>
                                                            <span className="text-center">{item.quantity}</span>
                                                            <button type="button" className="btn btn-primary cart-quantity-btn">+</button>
                                                        </div>
                                                    </td>

                                                    <td className="text-center text-md-end fw-semibold">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="row g-3 align-items-center mt-4">
                                    <div className="col-12 col-lg-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Coupon code" />
                                            <button type="button" className="btn btn-primary">Apply Coupon</button>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="d-flex flex-wrap justify-content-lg-end gap-2">
                                            <button type="button" className="btn btn-primary">Empty Cart</button>
                                            <button type="button" className="btn btn-primary">Update Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3">
                            <div className="bg-white rounded shadow-sm p-4">
                                <h2 className="h5 fw-semibold mb-4">Summary</h2>

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Subtotal</span>
                                    <span>$19.99</span>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Taxes</span>
                                    <span>$1.99</span>
                                </div>

                                <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                                    <span>Shipping</span>
                                    <span>$0.00</span>
                                </div>

                                <div className="d-flex justify-content-between fw-bold">
                                    <span>Total</span>
                                    <span>$21.98</span>
                                </div>

                                <Link to="/checkout" className="btn btn-primary w-100 mt-4">Proceed to Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};