import React from 'react';
import JJ from "../Assets/avatar1.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer(props) {
    return (
        <div className="py-10sm:pt-16 lg:pt-24">
            <hr className="mt-16 mb-10 border-gray-200"/>

            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className=" col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img className="w-auto h-28 rounded-full"
                             src={JJ} alt=""/>

                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <a
                                    href="https://github.com/ellyjj1"
                                    className="flex items-center justify-center text-gray-800 transition-all duration-200   w-7 h-7 hover:text-gray-500 focus:text-gray-500"
                                >
                                    <GitHubIcon style={{fontSize: '28px'}}/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.jingjing-portfolio.online/"
                                    className="flex items-center justify-center text-gray-800 transition-all duration-200   w-7 h-7 hover:text-gray-500 focus:text-gray-500"
                                >
                                    <LanguageIcon style={{fontSize: '28px'}}/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/jingjing-yu/"
                                    className="flex items-center justify-center text-gray-800 transition-all duration-200   w-7 h-7 hover:text-gray-500 focus:text-gray-500"
                                >
                                    <LinkedInIcon style={{fontSize: '28px'}}/>
                                </a>
                            </li>


                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Sitemap</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" title=""
                                   className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>
                            </li>

                            <li>
                                <a href="/evaluate" title=""
                                   className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Evaluation </a>
                            </li>

                            <li>
                                <a href="/register" title=""
                                   className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sign
                                    Up </a>
                            </li>

                            <li>
                                <a href="/login" title=""
                                   className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sign
                                    In </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" title=""
                                   className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Support </a>
                            </li>

                            <li>
                                <a href="/contactus" title=""
                                   className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact
                                    Us</a>
                            </li>

                            {/*<li>*/}
                            {/*    <a href="#" title=""*/}
                            {/*       className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms*/}
                            {/*        & Conditions </a>*/}
                            {/*</li>*/}

                            {/*<li>*/}
                            {/*    <a href="#" title=""*/}
                            {/*       className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy*/}
                            {/*        Policy </a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>

                    {/*<div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">*/}
                    {/*    <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to*/}
                    {/*        newsletter</p>*/}

                    {/*    <form action="#" method="POST" className="mt-6">*/}
                    {/*        <div>*/}
                    {/*            <label htmlFor="email" className="sr-only">Email</label>*/}
                    {/*            <input type="email" name="email" id="email" placeholder="Enter your email"*/}
                    {/*                   className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"/>*/}
                    {/*        </div>*/}

                    {/*        <button type="submit"*/}
                    {/*                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Subscribe*/}
                    {/*        </button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </div>

                <hr className="mt-16 mb-10 border-gray-200"/>

                <p className="text-sm text-center text-gray-600">© Copyright 2025, All Rights Reserved </p>
            </div>

        </div>
    );
}

export default Footer;