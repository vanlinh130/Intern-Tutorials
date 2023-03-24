import React from 'react';
import { BiCaretDown } from 'react-icons/bi';
import images from '../images';
import { Link, Outlet } from 'react-router-dom';

const ReferralProgram = () => {
    return (
        <div className="w-full">
            <div className="relative p-3 w-full h-80 max-sm:p-0 max-sm:h-60">
                <img src={images.banner} alt="images" className="w-full h-full object-cover rounded-3xl" />
                <div className="absolute top-14 left-14 text-white max-sm:top-5 max-sm:left-5">
                    <h1 className="text-4xl w-4/5 font-semibold max-sm:text-xl">
                        Refer your friends and start earning!
                    </h1>
                    <p className="py-5">Earn commission for each referral you drive. View Program Terms</p>
                    <button className="flex items-center justify-items-center border-2  rounded-3xl py-3 px-5 my-5 hover:bg-slate-200 hover:text-blue-400 max-sm:my-1">
                        <span>Go to Referral below</span>
                        <BiCaretDown className="ml-2" />
                    </button>
                </div>
            </div>

            <div className="">
                <div className="my-8 border-solid border-b-2 border-gray-200 z-10">
                    <ul className="flex h-8">
                        <li className="font-medium cursor-pointer hover:border-b-2 border-solid hover:border-pink-600 hover:text-pink-600">
                            <Link to="/admin/referral-program/1">Earn money</Link>
                        </li>
                        <li className="font-medium cursor-pointer hover:border-b-2 border-solid hover:border-pink-600 hover:text-pink-600">
                            <Link className="mx-2" to="/admin/referral-program/2">
                                Payouts
                            </Link>
                        </li>
                        <li className="font-medium cursor-pointer hover:border-b-2 border-solid hover:border-pink-600 hover:text-pink-600">
                            <Link className="mx-2" to="/admin/referral-program/3">
                                Partner Program
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ReferralProgram;
