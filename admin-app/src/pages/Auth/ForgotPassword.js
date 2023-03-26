import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../images';
import { Input, LoginLayout } from '../../components';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const ForgotPassword = () => {
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
                            <h1 className="text-3xl font-semibold mb-4">Forgot password</h1>
                            <p className="font-normal mb-10 text-center">
                                Missing or forget account ? Here is the way you can get it back
                            </p>
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

                            <div className="flex flex-col mt-4">
                                <button className="btn-save text-white font-medium py-3 " type="submit">
                                    <Link>Submit</Link>
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

export default ForgotPassword;
