import React from 'react';

function Hero(props) {
    return (
        <div className="mt-10 bg-amber-200 2xl:my-20 2xl: sm:mt-16 md:mt-0">
            <div className="px-4 mx-auto rounded-md max-w-7xl sm:px-6 lg:px-8">
                <div className="2xl:pl-24">
                    <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
                        <div className="text-center md:py-16 xl:py-24 md:text-left">
                            <blockquote>
                                <p className="text-2xl font-semibold leading-relaxed text-gray-900">“This platform helped me improve from Band 6 to Band 6.5 in just two weeks. The feedback is precise and based directly on IELTS official standards. Super helpful!”</p>
                            </blockquote>
                            <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                                <p className="text-base font-semibold text-gray-900">Malik Johnson</p>
                                <p className="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">IELTS Candidate · Lagos, Nigeria</p>
                            </div>
                            <p className="mt-12 text-base text-gray-900 lg:mt-20">Ready to boost your writing score?</p>
                            <a href="/evaluate" title="IELTS Writing Evaluation"
                               className="inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80"
                               role="button">Start Evaluation</a>
                        </div>

                        <div className="relative">
                            <img
                                className="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png"
                                alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;