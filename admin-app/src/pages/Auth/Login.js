import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import images from '../../images';
import { Input, LoginLayout } from '../../components';

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
                            <Input
                                type="email"
                                name="email"
                                label="Email"
                                placeholder="Enter your email"
                                errorIcon={<AiOutlineExclamationCircle />}
                                errorMessage="The Email field is required"
                                required={true}
                            />

                            <Input
                                type={password ? 'password' : 'text'}
                                name="password"
                                label="Password"
                                placeholder="Password"
                                errorIcon={<AiOutlineExclamationCircle />}
                                errorMessage="The Password field is required"
                                required={true}
                                onClick={() => setPassword(!password)}
                                iconEye={password ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                            />

                            <div className="flex flex-col mt-6">
                                <Link to="/forgot-password">
                                    <div className="text-base font-normal underline decoration-1">
                                        Forgot your password ?
                                    </div>
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
