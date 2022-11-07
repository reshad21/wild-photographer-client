import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../../../Context/AuthContext/AuthContext';

const Login = () => {
    const { logInuser } = useContext(userContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from);

    // login activities
    const handleLoginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        // firebasee login system
        logInuser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                // navigate('/');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
            })
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginForm} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/signup" className="label-text-alt link link-hover">Go to signup if you don't have any account?</Link>
                                </label>
                            </div>

                            <div className="form-control mt-6 bg-primary">
                                <button type='submit' className="btn btn-primary hover:text-white">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;