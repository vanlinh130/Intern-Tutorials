import React, { useState } from 'react';
import images from '../../images';
import { Link } from 'react-router-dom';
import { Input, LoginLayout } from '../../components';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { BsXLg } from 'react-icons/bs';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const ResetPassword = () => {
    const [password, setPassword] = useState(true);

    return (
        <div className=" flex bg-white w-full">
            <div className="auth-left p-10">
                <div className="flex items-center">
                    <img src={images.logo} alt="logo" />
                    <h5 className="ml-2 font-semibold w-5 leading-5">Ecomdy Media</h5>
                </div>
                <div className="flex flex-col items-center justify-items-center mt-2">
                    <div className="w-2/4">
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl font-semibold mb-4">Setup a new password</h1>
                            <p className="font-normal mb-10 text-center">
                                Your new password must be different from previous used passwords
                            </p>
                        </div>

                        <form>
                            <Input
                                type={password ? 'password' : 'text'}
                                name="password"
                                label="New password"
                                placeholder="Enter your new password"
                                errorIcon={<AiOutlineExclamationCircle />}
                                errorMessage="The Password field is required"
                                required={true}
                                onClick={() => setPassword(!password)}
                                iconEye={password ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                            />
                            <Input
                                type={password ? 'password' : 'text'}
                                name="password"
                                label="Confirm new password"
                                placeholder="Confirm your new password"
                                errorIcon={<AiOutlineExclamationCircle />}
                                errorMessage="The Confirm Password field is required"
                                required={true}
                                onClick={() => setPassword(!password)}
                                iconEye={password ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                            />

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

export default ResetPassword;
