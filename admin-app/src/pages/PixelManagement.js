import React from 'react';
import images from './../images/index';
import { BsChevronExpand } from 'react-icons/bs';

const PixelManagement = () => {
    return (
        <div className="bg-white rounded-2xl my-5">
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">List Pixel</h4>
                    <button className="create-new px-3 py-2 border-2 border-none bg-amber-100 rounded-3xl text-white text-sm font-semibold">
                        Create New
                    </button>
                </div>
            </div>
            <div className="">
                <div className="p-6">
                    <ul className="flex items-center justify-between">
                        <li>
                            <span>Pixel Name</span>
                        </li>
                        <li className="flex items-center justify-items-center cursor-pointer">
                            <BsChevronExpand className="opacity-70" />
                            <span className="pl-2">Pixel Id</span>
                        </li>
                        <li className="flex items-center justify-items-center cursor-pointer">
                            <BsChevronExpand className="opacity-70" />
                            <span className="pl-2">State</span>
                        </li>
                        <li className="flex items-center justify-items-center cursor-pointer">
                            <BsChevronExpand className="opacity-70" />
                            <span className="pl-2">Event</span>
                        </li>
                        <li className="flex items-center justify-items-center cursor-pointer">
                            <BsChevronExpand className="opacity-70" />
                            <span className="pl-2">Action</span>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-center py-12">
                    <img src={images.no_data} alt="images" />
                </div>
            </div>
        </div>
    );
};

export default PixelManagement;
