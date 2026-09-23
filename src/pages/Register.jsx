
import Footer from "../components/Home/Footer";


export const Register = () => {
    // const dispatch = useDispatch();
    // const { isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);
    // const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", mobile: "", password: "", confirmPassword: "", address: "", city: "", state: "", pincode: "", country: "", terms: false });
    // const [validationMessage, setValidationMessage] = useState("");

    // const handleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    //     setValidationMessage("");
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(clearAuthMessage());
    //     setValidationMessage("");

    //     if (formData.password !== formData.confirmPassword) {
    //         setValidationMessage("Password and Confirm Password do not match.");
    //         return;
    //     }

    //     if (!/^\d{10}$/.test(formData.mobile)) {
    //         setValidationMessage("Phone number must be 10 digits.");
    //         return;
    //     }

    //     if (!formData.terms) {
    //         setValidationMessage("Please agree to the Terms & Conditions.");
    //         return;
    //     }

    //     dispatch(registerUser({ name: `${formData.firstName} ${formData.lastName}`.trim(), email: formData.email, phone: formData.mobile, password: formData.password }));
    // };

    return (
        <>
            {/* <section className="register-page py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-10">
                            <div className="register-box bg-white border rounded-3 shadow-sm p-4">
                                <div className="text-center mb-4">
                                    <h1 className="fw-bold mb-2">Create Your Account</h1>
                                    <p className="text-muted mb-0">Register now and start shopping with us.</p>
                                </div>

                                {validationMessage && <div className="alert alert-danger">{validationMessage}</div>}
                                {isSuccess && <div className="alert alert-success">{message}</div>}
                                {isError && <div className="alert alert-danger">{message}</div>}

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3 mb-3">
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="first-name" className="form-label fw-semibold">First Name</label>
                                            <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" placeholder="Enter your first name" required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="last-name" className="form-label fw-semibold">Last Name</label>
                                            <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" placeholder="Enter your last name" required />
                                        </div>
                                    </div>

                                    <div className="row g-3 mb-3">
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="email" className="form-label fw-semibold">Email</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Enter your email" required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="mobile" className="form-label fw-semibold">Mobile Number</label>
                                            <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="form-control" placeholder="Enter your mobile number" required />
                                        </div>
                                    </div>

                                    <div className="row g-3 mb-3">
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control" placeholder="Enter your password" required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="confirm-password" className="form-label fw-semibold">Confirm Password</label>
                                            <input type="password" id="confirm-password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" placeholder="Confirm your password" required />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label fw-semibold">Address</label>
                                        <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows="3" className="form-control" placeholder="Enter your complete address" required></textarea>
                                    </div>

                                    <div className="row g-3 mb-3">
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="city" className="form-label fw-semibold">City</label>
                                            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="form-control" placeholder="Enter your city" required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="state" className="form-label fw-semibold">State</label>
                                            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="form-control" placeholder="Enter your state" required />
                                        </div>
                                    </div>

                                    <div className="row g-3 mb-4">
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="pincode" className="form-label fw-semibold">Pincode</label>
                                            <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} className="form-control" placeholder="Enter your pincode" required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="country" className="form-label fw-semibold">Country</label>
                                            <select id="country" name="country" value={formData.country} onChange={handleChange} className="form-select" required>
                                                <option value="">Select Country</option>
                                                <option value="India">India</option>
                                                <option value="USA">USA</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Australia">Australia</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-check mb-4">
                                        <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChange} className="form-check-input" required />
                                        <label htmlFor="terms" className="form-check-label">I agree to the Terms & Conditions</label>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 py-3 fw-semibold" disabled={isLoading}>{isLoading ? "Creating Account..." : "Create Account"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer /> */}
        </>
    );
};