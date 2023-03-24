import React, { useState } from 'react';
import images from '../images';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineHome, AiOutlineFileText, AiOutlineAlignLeft, AiOutlineAlignRight } from 'react-icons/ai';
import { MdOutlinePayment } from 'react-icons/md';
import { FiUsers, FiUser } from 'react-icons/fi';
import { BsLink45Deg, BsQuestionCircle, BsXLg } from 'react-icons/bs';
import { BiCollapseHorizontal } from 'react-icons/bi';
import { TfiMedallAlt } from 'react-icons/tfi';
import { FaRegUserCircle } from 'react-icons/fa';
import { CiLogin } from 'react-icons/ci';
import Tippy from '@tippyjs/react/headless';

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="w-full flex flex-row min-h-screen">
            <div
                className={collapsed ? 'p-4 rounded-tr-3xl ' : 'w-2/12 p-4 rounded-tr-3xl max-sm:hidden max-lg:w-1/12'}
                style={{ background: '#16213e' }}
            >
                <div className="logo flex items-center justify-between py-4">
                    <div className="flex justify-items-center">
                        <img src={images.logo} alt="logo" />
                        {collapsed ? '' : <h3 className="pl-2 text-white w-14 max-lg:hidden">Ecomdy Media</h3>}
                    </div>
                    {collapsed ? (
                        ''
                    ) : (
                        <BsXLg
                            className="text-xl text-red-600 cursor-pointer max-lg:hidden"
                            onClick={() => setCollapsed(!collapsed)}
                        />
                    )}
                </div>
                <div>
                    <ul>
                        <li className="flex items-center justify-items-center py-3 text-white text-sm hover:pl-1 hover:bg-slate-600 hover:rounded-xl cursor-pointer my-2    ">
                            <AiOutlineHome className="text-xl" />
                            {collapsed ? '' : <p className="pl-3 max-lg:hidden">Home</p>}
                        </li>
                        <li className="flex items-center justify-items-center py-3 text-white text-sm hover:pl-1 hover:bg-slate-600 hover:rounded-xl cursor-pointer my-2">
                            <AiOutlineFileText className="text-xl" />
                            {collapsed ? '' : <p className="pl-3 max-lg:hidden">Billing</p>}
                        </li>
                        <li className="flex items-center justify-items-center py-3 text-white text-sm hover:pl-1 hover:bg-slate-600 hover:rounded-xl cursor-pointer my-2">
                            <FiUsers className="text-xl" />
                            {collapsed ? '' : <p className="pl-3 max-lg:hidden">Profile</p>}
                        </li>
                        <li className="flex items-center justify-items-center py-3 text-white text-sm hover:pl-1 hover:bg-slate-600 hover:rounded-xl cursor-pointer my-2">
                            <MdOutlinePayment className="text-xl" />
                            {collapsed ? '' : <p className="pl-3 max-lg:hidden">payment</p>}
                        </li>
                        <li className="flex items-center justify-items-center py-3 text-white text-sm hover:pl-1 hover:bg-slate-600 hover:rounded-xl cursor-pointer my-2">
                            <BsLink45Deg className="text-xl" />
                            {collapsed ? '' : <p className="pl-3 max-lg:hidden">Product List</p>}
                        </li>
                        <li className=" text-white text-sm hover:pl-1 hover:bg-slate-600 hover:rounded-xl cursor-pointer my-2">
                            <Link to="/admin/pixel-management" className="flex items-center justify-items-center py-3">
                                <BiCollapseHorizontal className="text-xl" />
                                {collapsed ? '' : <p className="pl-3 max-lg:hidden">Management</p>}
                            </Link>
                        </li>
                        <li className=" text-white text-sm hover:pl-1 hover:bg-slate-600 hover:rounded-xl cursor-pointer my-2">
                            <Link to="/admin/referral-program" className="flex items-center justify-items-center py-3">
                                <TfiMedallAlt className="text-xl" />
                                {collapsed ? '' : <p className="pl-3 max-lg:hidden">Referral Program</p>}
                            </Link>
                        </li>
                        <li className=" text-white text-sm hover:pl-1 hover:bg-slate-600 hover:rounded-xl cursor-pointer my-2">
                            <Link to="/admin/fAQs" className="flex items-center justify-items-center py-3">
                                <BsQuestionCircle className="text-xl" />
                                {collapsed ? '' : <p className="pl-3 max-lg:hidden">FAQs</p>}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-11/12 mx-9 mt-4">
                <nav className="h-16 flex justify-between items-center">
                    <div className="flex items-center justify-items-center">
                        {React.createElement(collapsed ? AiOutlineAlignLeft : AiOutlineAlignRight, {
                            className: 'text-2xl cursor-pointer',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        <h3 className="pl-4 font-bold text-lg max-lg:hidden">Home</h3>
                    </div>
                    <div className="flex items-center justify-items-start">
                        <Link to="/admin/billing">
                            <button className="mr-4 border-solid border-2 border-amber-300 rounded-xl px-4 py-1 hover:bg-amber-100 text-amber-300">
                                regular
                            </button>
                        </Link>
                        <Tippy
                            delay={[0, 200]}
                            interactive
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <div className="bg-slate-50  p-5 shadow mt-4 rounded-lg">
                                        <ul>
                                            <li className="py-2 hover:text-red-500 cursor-pointer ">Help Center</li>
                                            <li className="py-2 hover:text-red-500 cursor-pointer ">Contact Support</li>
                                            <li className="py-2 hover:text-red-500 cursor-pointer ">
                                                Plans and Pricing
                                            </li>
                                            <li className="py-2 hover:text-red-500 cursor-pointer ">Term and policy</li>
                                            <li className="py-2 hover:text-red-500 cursor-pointer ">About Us</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        >
                            <p>
                                <BsQuestionCircle className="text-xl mr-3 cursor-pointer" />
                            </p>
                        </Tippy>

                        <Tippy
                            delay={[0, 200]}
                            interactive
                            placement="bottom-start"
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <div className="bg-slate-50 p-5 shadow mt-4 rounded-lg">
                                        <ul>
                                            <li className="py-2 hover:text-red-500 cursor-pointer ">
                                                <Link
                                                    to="/admin/profile"
                                                    className="flex items-center justify-items-center"
                                                >
                                                    <FiUser className="mr-3" />
                                                    Profile
                                                </Link>
                                            </li>
                                            <li className="py-2 flex items-center justify-items-center hover:text-red-500 cursor-pointer ">
                                                <CiLogin className="mr-3" />
                                                Log out
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        >
                            <p>
                                <FaRegUserCircle className="text-xl" />
                            </p>
                        </Tippy>
                        <span className="pl-3 max-lg:hidden">Vanlinh</span>
                    </div>
                </nav>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
