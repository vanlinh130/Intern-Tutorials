import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';

const Profile = () => {
    const [checkIcon, setCheckIcon] = useState(true);

    return (
        <div className="w-full flex justify-between mt-14 max-sm:block">
            <div className="w-3/4 bg-white rounded-3xl p-8 max-sm:w-full max-sm:mb-5">
                <h1 className="text-xl font-normal">Change password</h1>
                <form>
                    <div className="form-control relative">
                        <label className="label pt-4">
                            <span className="label-text">Old Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered relative" />
                        <div
                            onClick={() => setCheckIcon(!checkIcon)}
                            className="absolute right-0 bottom-4 px-5 cursor-pointer hover:opacity-90 text-slate-500"
                        >
                            {checkIcon ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                        </div>
                    </div>
                    <div className="form-control pt-4 relative">
                        <label className="label">
                            <span className="label-text">New password</span>
                        </label>
                        <input type="text" placeholder="new password" className="input input-bordered relative" />
                        <div
                            onClick={() => setCheckIcon(!checkIcon)}
                            className="absolute right-0 bottom-4 px-5 cursor-pointer hover:opacity-90 text-slate-500"
                        >
                            {checkIcon ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                        </div>
                    </div>
                    <div className="form-control pt-4 relative">
                        <label className="label">
                            <span className="label-text">Confirm new password</span>
                        </label>
                        <input
                            type="text"
                            placeholder="confirm new password"
                            className="input input-bordered relative"
                        />
                        <div
                            onClick={() => setCheckIcon(!checkIcon)}
                            className="absolute right-0 bottom-4 px-5 cursor-pointer hover:opacity-90 text-slate-500"
                        >
                            {checkIcon ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                        </div>
                    </div>
                </form>

                <button className="btn-save text-white font-medium py-2 px-5" type="submit">
                    Save changes
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
