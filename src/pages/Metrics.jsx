import  { useEffect, useRef, useState } from 'react';

const Metrics = () => {
    const [activeStep, setActiveStep] = useState(1);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const handleScroll = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveStep(Number(entry.target.dataset.step));
                }
            });
        };

        const observer = new IntersectionObserver(handleScroll, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        });

        sectionRefs.current.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="relative bg-metric sticky-scroll text-white min-h-screen">
            <div className="container mx-auto px-4 flex">
                <div className="relative w-1/3 p-28">
                    <div className="sticky top-20">
                        <div className="space-y-8">
                            <div
                                className={`flex items-center space-x-4 transition-opacity duration-500 ${activeStep === 1 ? 'opacity-100' : 'opacity-50'}`}
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d8009ea3ec5_Avoid%20stockouts-icon.svg" alt="Avoid Stockouts" className="w-6 h-6" />
                                </div>
                                <a
                                    href="#"
                                    className={`px-4 py-2 rounded-full border border-gradient-to-br from-purple-500 to-pink-500 text-sm ${activeStep === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-500' : ''}`}
                                >
                                    STOCKOUTS
                                </a>
                            </div>
                            <div
                                className={`flex items-center space-x-4 transition-opacity duration-500 ${activeStep === 2 ? 'opacity-100' : 'opacity-50'}`}
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d16ecea3ef7_reduced-icon.svg" alt="Reduced Icon" className="w-6 h-6" />
                                </div>
                                <a
                                    href="#recovery"
                                    className={`px-4 py-2 rounded-full border border-gradient-to-br from-purple-500 to-pink-500 text-sm ${activeStep === 2 ? 'bg-gradient-to-br from-purple-500 to-pink-500' : ''}`}
                                >
                                    CASH RECOVERY CYCLE
                                </a>
                            </div>
                            <div
                                className={`flex items-center space-x-4 transition-opacity duration-500 ${activeStep === 3 ? 'opacity-100' : 'opacity-50'}`}
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d83fbea3ef8_Impact-icon.svg" alt="Impact Icon" className="w-6 h-6" />
                                </div>
                                <a
                                    href="#revenue"
                                    className={`px-4 py-2 rounded-full border border-gradient-to-br from-purple-500 to-pink-500 text-sm ${activeStep === 3 ? 'bg-gradient-to-br from-purple-500 to-pink-500' : ''}`}
                                >
                                    REVENUE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 space-y-16 px-10">
                    <div
                        id="stockouts"
                        data-step="1"
                        ref={(el) => (sectionRefs.current[0] = el)}
                        className={`min-h-screen flex items-center transition-opacity duration-500 ${activeStep === 1 ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="text-center flex flex-col gap-8">
                            <div className="text-9xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent">85%</div>
                            <div className="text-3xl text-[#fafafa]">Reduction in out-of-stock</div>
                        </div>
                    </div>
                    <div
                        id="recovery"
                        data-step="2"
                        ref={(el) => (sectionRefs.current[1] = el)}
                        className={`min-h-screen flex items-center transition-opacity duration-500 ${activeStep === 2 ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="text-center flex flex-col gap-8">
                            <div className="text-9xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent">25 Days</div>
                            <div className="text-3xl text-[#fafafa]">Reduction in cash recovery time</div>
                        </div>
                    </div>
                    <div
                        id="revenue"
                        data-step="3"
                        ref={(el) => (sectionRefs.current[2] = el)}
                        className={`min-h-screen flex items-center transition-opacity duration-500 ${activeStep === 3 ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="text-center min-h-screen flex flex-col gap-8 justify-center">
                            <div className="text-9xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent">15%</div>
                            <div className="text-3xl text-[#fafafa]">Growth in revenue</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Metrics;