import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import Input from './../components/Input/Input';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [password, setPassword] = useState(true);

    return (
        <div className="w-full flex justify-between mt-14 max-sm:block">
            <div className="w-3/4 bg-white rounded-3xl p-8 max-sm:w-full max-sm:mb-5">
                <h1 className="text-xl font-normal">Change password</h1>
                <form>
                    <Input
                        type={password ? 'password' : 'text'}
                        name="password"
                        label="Old Password"
                        placeholder="Password"
                        errorIcon={<AiOutlineExclamationCircle />}
                        errorMessage="The Password field is required"
                        required={true}
                        onClick={() => setPassword(!password)}
                        iconEye={password ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                    />
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
                </form>

                <button className="btn-save text-white font-medium py-2 px-5" type="submit">
                    <Link>Save changes</Link>
                </button>
            </div>
            <div className="w-1/4 px-4 mt-5 max-sm:w-full">
                <span className="px-6 py-4 border-l-2 border-solid border-black max-sm:border-none">
                    Security Setting
                </span>
            </div>
        </div>
    );
};

export default Profile;
