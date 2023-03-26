import React, { useState } from 'react';
import images from './../../images/index';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { LoginLayout, Input } from '../../components';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const Register = () => {
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
                            <h1 className="text-3xl font-semibold mb-4">Create an account</h1>
                            <p className="font-normal mb-10">First, please enter your business information</p>
                        </div>

                        <form>
                            <Input
                                type="name"
                                name="name"
                                label="Full name"
                                important={'*'}
                                placeholder="Enter your full name"
                                errorIcon={<AiOutlineExclamationCircle />}
                                errorMessage="The name field is required"
                                required={true}
                            />
                            <Input
                                type="email"
                                name="email"
                                label="Email"
                                important={'*'}
                                placeholder="Enter your email"
                                errorIcon={<AiOutlineExclamationCircle />}
                                errorMessage="The Email field is required"
                                required={true}
                            />

                            <Input
                                type={password ? 'password' : 'text'}
                                name="password"
                                label="Password"
                                important={'*'}
                                placeholder="Password"
                                errorIcon={<AiOutlineExclamationCircle />}
                                errorMessage="The Password field is required"
                                required={true}
                                onClick={() => setPassword(!password)}
                                iconEye={password ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                            />

                            <div className="flex flex-col mt-6">
                                <div className="flex items-center">
                                    <div className="form-control">
                                        <label className="cursor-pointer label">
                                            <input type="checkbox" className="checkbox h-5 w-5 " />
                                        </label>
                                    </div>
                                    <span className="text-base font-normal ml-3">
                                        I have read and accepted the <Link className="red">terms of service</Link>
                                    </span>
                                </div>
                                <button className="btn-save text-white font-medium py-3 " type="submit">
                                    <Link to="/login">Register</Link>
                                </button>
                            </div>
                        </form>
                        <p className="text-center font-normal">
                            <span>Have an account ?</span>
                            <Link to="/" className="red ml-2">
                                Login now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <LoginLayout />
        </div>
    );
};

export default Register;
