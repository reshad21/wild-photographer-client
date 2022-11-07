import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../../Context/AuthContext/AuthContext';

const Signup = () => {
    const { signUpUser, updateUserInfo } = useContext(userContext);
    const navigate = useNavigate();

    // login activities
    const handleSignupForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photo, email, password });
        // signup in firebase
        signUpUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                updateUserInfo(name, photo).then(() => {
                    console.log(user);
                }).catch((error) => {
                    console.error(error);
                });
                navigate('/');
                form.reset();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignupForm} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='name' placeholder="User Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="enter photo url" className="input input-bordered" required />
                            </div>

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
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account go to login page?</Link>
                                </label>
                            </div>

                            <div className="form-control mt-6 bg-primary">
                                <button type='submit' className="btn btn-primary hover:text-white">Sign Up</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;