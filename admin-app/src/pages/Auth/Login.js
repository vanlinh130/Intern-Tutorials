import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import images from '../../images';
import { LoginLayout } from '../../components';

const Login = () => {
    const [password, setPassword] = useState(true);

    return (
        <div className=" flex bg-white w-full">
            <div className="auth-left p-10">
                <div className="flex items-center">
                    <img src={images.logo} alt="logo" />
                    <h5 className="ml-2 font-semibold w-5 leading-5">Ecomdy Media</h5>
                </div>
                <div className="flex flex-col items-center justify-items-center">
                    <div className="w-2/4">
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl font-semibold mb-4">Sign In</h1>
                            <p className="font-normal mb-10">Skyrocket Your Sales & Revenue with TikTok Ads</p>
                        </div>

                        <form>
                            <div className="form-control relative">
                                <label className="label pt-4">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your Email"
                                    className="input input-bordered relative"
                                />
                            </div>
                            <div className="form-control relative">
                                <label className="label pt-4">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your password"
                                    className="input input-bordered relative"
                                />
                                <div
                                    className="absolute right-0 bottom-4 px-5 cursor-pointer hover:opacity-90 text-slate-500"
                                    onClick={() => setPassword(!password)}
                                >
                                    {password ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                                </div>
                            </div>
                            <div className="flex flex-col mt-6">
                                <Link to="/forgot-password">
                                    <span className="text-base font-normal underline decoration-1">
                                        Forgot your password ?
                                    </span>
                                </Link>
                                <button className="btn-save text-white font-medium py-3 " type="submit">
                                    <Link to="/admin">Login</Link>
                                </button>
                            </div>
                        </form>
                        <p className="text-center font-normal">
                            <span>Don’t have an account ?</span>
                            <Link to="/register" className="red ml-2">
                                Register now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <LoginLayout />
        </div>
    );
};

export default Login;
