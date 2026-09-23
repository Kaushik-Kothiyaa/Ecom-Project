import { Link } from "react-router-dom";
import Footer from "../components/Home/Footer";

export const Login = () => {
    return <>
            <section className="login-page py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-7 col-xl-12">
                        <div className="login-box bg-white border rounded-3 shadow-sm p-4">
                            <div className="text-center mb-4">
                                <h1 className="fw-bold mb-2">Welcome Back</h1>
                                <p className="text-muted mb-0">Login to your account and continue shopping.</p>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-semibold">Password</label>
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Enter your password" required />
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div className="form-check">
                                        <input type="checkbox" id="remember-me" name="rememberMe" className="form-check-input" />
                                        <label htmlFor="remember-me" className="form-check-label">Remember Me</label>
                                    </div>
                                    <a href="#" className="text-primary text-decoration-none">Forgot Password?</a>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Login</button>
                            </form>
                            <div className="text-center mt-4 pt-3 border-top">
                                <p className="mb-0 text-muted">Don't have an account? <Link to="/register" className="text-primary fw-semibold text-decoration-none">Create Account</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <Footer />
    </>

};