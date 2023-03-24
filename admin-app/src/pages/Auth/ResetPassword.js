import React, { useState } from 'react';
import images from '../../images';
import { Link } from 'react-router-dom';
import { LoginLayout } from '../../components';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { BsXLg } from 'react-icons/bs';

const ResetPassword = () => {
    const [password, setPassword] = useState(true);

    return (
        <div className=" flex bg-white w-full">
            <div className="auth-left p-10">
                <div className="flex items-center">
                    <img src={images.logo} alt="logo" />
                    <h5 className="ml-2 font-semibold w-5 leading-5">Ecomdy Media</h5>
                </div>
                <div className="flex flex-col items-center justify-items-center mt-16">
                    <div className="w-2/4">
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl font-semibold mb-4">Setup a new password</h1>
                            <p className="font-normal mb-10 text-center">
                                Your new password must be different from previous used passwords
                            </p>
                        </div>

                        <form>
                            <div className="form-control relative">
                                <label className="label pt-4">
                                    <span className="label-text">New password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your new password"
                                    className="input input-bordered relative"
                                />
                                <div
                                    className="absolute right-0 bottom-4 px-5 cursor-pointer hover:opacity-90 text-slate-500"
                                    onClick={() => setPassword(!password)}
                                >
                                    {password ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                                </div>
                            </div>

                            <div className="form-control relative">
                                <label className="label pt-4">
                                    <span className="label-text">Confirm new password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Confirm your new password"
                                    className="input input-bordered relative"
                                />
                                <div
                                    className="absolute right-0 bottom-4 px-5 cursor-pointer hover:opacity-90 text-slate-500"
                                    onClick={() => setPassword(!password)}
                                >
                                    {password ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                                </div>
                            </div>

                            <div className="mt-5">
                                <div className="flex items-center py-3">
                                    <BsXLg className="red" />
                                    <p className="ml-4 font-normal">Must be at least 6 characters.</p>
                                </div>
                                <div className="flex items-center py-3">
                                    <BsXLg className="red" />
                                    <p className="ml-4 font-normal">Both passwords must match.</p>
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">
                                <button className="btn-save text-white font-medium py-3 " type="submit">
                                    <Link>Reset Password</Link>
                                </button>
                            </div>
                        </form>
                        <p className="text-center font-normal">
                            <span>Have an account ? </span>
                            <Link to="/login" className="red ml-2">
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

export default ResetPassword;
