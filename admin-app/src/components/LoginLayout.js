import React from 'react';
import images from '../images';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const LoginLayout = () => {
    return (
        <div className="auth-right">
            <div className="relative">
                <img src={images.backgroundLeft} alt="images" />
                <div className="absolute top-0 left-2 m-20 text-white">
                    <h4 className="text-3xl font-bold mb-3">Increase Traffic and Sales</h4>
                    <div className="flex mt-10">
                        <AiOutlineCheckCircle className="text-2xl mr-4" />
                        <div>
                            <p className="text-xl font-medium">Whitelist TikTok Ad Account</p>
                            <p className="font-light">Easy to launch your ads campaign with an unlimited budget</p>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <AiOutlineCheckCircle className="text-2xl mr-4" />
                        <div>
                            <p className="text-xl font-medium">Flexible payment</p>
                            <p className="font-light">Accept Credit Card, Payoneer, Paypal, USDT and more</p>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <AiOutlineCheckCircle className="text-2xl mr-4" />
                        <div>
                            <p className="text-xl font-medium">24/7 support</p>
                            <p className="font-light">Ads campaign review and direct support</p>
                        </div>
                    </div>
                    <div className="img-login pt-8 mx-10">
                        <img src={images.bgLogin} alt="images" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginLayout;
